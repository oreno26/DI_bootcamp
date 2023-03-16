export const remove = (id) =>{
    return{
        type: "DELETE",
        payload: id
    }
}