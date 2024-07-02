import {getUserByUsername} from "../../db/users";
import {userTransformer} from "../../transformers/user";
import bcrypt from "bcrypt";
import {generateTokens, sendRefreshToken} from "../../utils/jwt";
import {createRefreshToken} from "../../db/refreshTokens";

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const {username, password} = body;

    if (!username || !password) {
        return {
            statusCode: 400,
            body: {
                message: 'Please fill all fields'
            }
        }
    }

    const user = await getUserByUsername(username)

    if (!user) {
        return {
            statusCode: 400,
            body: {
                message: 'User not found'
            }
        }
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
        return {
            statusCode: 400,
            body: {
                message: 'Username or password invalid'
            }
        }
    }

    const {accessToken, refreshToken} = generateTokens(user)

    await createRefreshToken({
        userId: user.id,
        token: refreshToken
    })

    sendRefreshToken(event, refreshToken)

    return {
        access_token: accessToken,
        user: userTransformer(user),
    }
})