import {createUser} from "../../db/users";
import {userTransformer} from "../../transformers/user";

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const {username, email, password, repeatPassword, name} = body;

    if (!username || !email || !password || !repeatPassword || !name) {
        return {
            statusCode: 400, body: {
                message: 'Please fill all fields'
            }
        }
    }

    if (password !== repeatPassword) {
        return {
            statusCode: 400, body: {
                message: 'Passwords do not match'
            }
        }
    }

    const userData = {
        username, email, password, name, profileImage: `https://robohash.org/${username}`,
    }

    const user = await createUser(userData)

    return {
        body: userTransformer(user)
    }
})