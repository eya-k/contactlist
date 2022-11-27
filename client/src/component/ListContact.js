import React, { useEffect } from "react";
import CardContact from "./CardContact";
import {setContacts} from '../store/contactSlice';
import {useDispatch, useSelector} from 'react-redux';
import { fetchContacts } from "../api/Contact";


const ListContact = () => {

    //redux part
    const dispatch = useDispatch()
    const Contacts = useSelector(state=>state.contact)

    //fetchContact part 'data'
    
    const getContact=async()=>{
        const data = await fetchContacts()
        dispatch(setContacts(data.Contacts))
    }

    useEffect(()=>{
        getContact()
    },[])



return (
    <div>
        {
            Contacts.map((e)=>( <CardContact contact={e} getContact={getContact} />))
        }
       
    </div>
)
}
    export default ListContact