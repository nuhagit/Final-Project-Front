import app from "./config";

export const Login = async (body) => {
    try {
        const result = await app.post('auth/login')
        console.log(result)
    } catch (error) {
        throw Error (error)
    }
}