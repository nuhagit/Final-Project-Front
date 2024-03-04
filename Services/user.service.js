import app from "./config";

export const GetUserById = async () => {
    try {
        const {data} = await app.get('/user/41')
         return console.log(data)
         
    } catch (error) {
        throw Error (error)
    }
}


export const getUserData = async (id) => {
    try {
        const { data } = await app.get(`/user/training/${id}`)
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
        return error
    }
}