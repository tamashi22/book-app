
const axios = require('axios').default; 
export const   getAllBooks = async () => {
    const response =  await axios.get(`${process.env.REACT_APP_API_SERVER}/books`)
    return response.data
  };

  export const updateBook = async ({ id, ...data }) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_SERVER}/books/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
  
    if (!response.ok) {
      throw new Error(response.json().message);
    }
  
    return response.json();
  };



  
export const getBook= async (id) => {
  const response =  await axios.get(`${process.env.REACT_APP_API_SERVER}/books/${id}`)
  return response.data
};
  
  
  export const removeBook = async (id) => {
    const response = axios.delete(`${process.env.REACT_APP_API_SERVER}/books/${id}`);
  
   
  
    return true;
  };
