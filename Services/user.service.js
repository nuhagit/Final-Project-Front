import app from "./config";

export const GetUserById = async () => {
    try {
        const {data} = await app.get('/user/41')
         return console.log(data)
         
    } catch (error) {
        throw Error (error)
    }
}