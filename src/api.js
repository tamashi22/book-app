
const axios=require('axios').default

export const getAllBooks=async()=>{
    const responce=
    axios.get(`${process.env.REACT_APP_API_SERVER}/books`)
    .then((responce)=>{
        console.log(responce);
    })
    .catch((error)=>{
        console.log(error);
    })
    return responce.json()
}