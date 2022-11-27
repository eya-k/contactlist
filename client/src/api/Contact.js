import axios from 'axios'

//function http request

export const fetchContacts =async()=>{
    const {data} = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/user`);
    return data
}

//post part
export const postContact =async (value)=>{
    const addingContact = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/user`,{...value})
}

//update part

export const updateCont=async(id,value)=>{
    const updatedCont = await axios.put(`${process.env.REACT_APP_API_BASE_URL}/api/user/${id}`,value)
}


//get by id
export const GetUniqueContact = async(id, value)=>{
    const {data} = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/user/${id}`, value);
return data
}

export const deleteContact = async(id)=>{
    const deletedContact = await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/api/user/${id}`)
}