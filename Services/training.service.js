import app from "./config";

export const getTrainingData = async (id) => {
    try {
        const { data } = await app.get(`/training/routines/${id}`)
       // console.log(data)
        return data
    } catch (error) {
        console.log(error)
        return error
    }
}