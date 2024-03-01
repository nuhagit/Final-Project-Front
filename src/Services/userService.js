import app from "./config";

export const getAllUsers =  async () => {
    try {
        const { data } = await app.get('/user',{
        headers: {
            Authorization: localStorage.getItem('token')
          }
        })
        return data
    } catch (error) {
        console.log(error)        
    }
}