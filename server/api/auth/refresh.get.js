export default defineEventHandler(async (event) => {

    const cookies = getCookie(event)

    const refreshToken = cookies.refresh_token

    if (!refreshToken) {
        return {
            statusCode: 401,
            body: {
                message: 'Refresh token is invalid'
            }
        }
    }


    return {
        hello: 'world'
    }
})