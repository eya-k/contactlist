import React, { useState } from "react";
import {postContact} from '../api/Contact';
import {useNavigate} from 'react-router';

const Add = () => {
const [name, setName]=useState('')
const [age,setAge]=useState('')
const [email,setEmail]=useState('')
let navigate = useNavigate()

const handelSubmit =async(value)=>{
    await postContact(value)
    navigate('/contacts')
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
            <button onClick={()=>handelSubmit({name,age,email})}  >Add user</button>
        </div>
        </div>
    )
}
export default Add