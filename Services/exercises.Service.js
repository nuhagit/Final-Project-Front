import app from "./config";

export const getExerciseData = async (id) => {
    try {
        const { data } = await app.get(`/routine/exercises/${id}`, {
            headers: {
                authorization: localStorage.getItem('token')
                
            }
        })
        console.log(data)
        return data
        
        
        }catch (error) {
        console.log(error)
        return error
    }
}