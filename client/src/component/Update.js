import React, { useEffect, useState } from "react";
import {useParams, useNavigate} from 'react-router';
import { updateCont,GetUniqueContact } from "../api/Contact";
const Update = () => {


//update part


const {id}=useParams()
let navigateus = useNavigate()
console.log('ici',id)


const [name,setName]=useState('')
const [age,setAge]=useState('')
const [email, setEmail] = useState('')


//get unique part
const getContactbyId=async(conatactId)=>{
    const data = await GetUniqueContact(conatactId)
    console.log('dataupdated',data)
    setName(data.getuser.name)
    setAge(data.getuser.age)
    setEmail(data.getuser.email)
}

useEffect(()=>{
if(id){getContactbyId(id)}
},[id])




const handelSubmit=async(idContact,Value)=>{
    await updateCont(idContact,Value)
    navigateus('/contacts')
}


    return (
        <div>

            <div>

            <label>
                Name:
                <input
                type="text"
                name="name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
            </label>
            <label>
                Age:
                <input
                type="text"
                name="age"
                value={age}
                onChange={(e)=>setAge(e.target.value)}
                />
            </label>
            <label>
                email:
                <input
                type="text"
                name="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
            </label>
            <button onClick={()=>handelSubmit(id,{name,age,email})} >Update user</button>
            </div>
        </div>
    )
}
export default Update