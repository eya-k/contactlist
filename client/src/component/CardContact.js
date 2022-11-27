import React from "react";
import {Card} from 'react-bootstrap';
import {useNavigate} from 'react-router';
import {deleteContact} from '../api/Contact';

const CardContact = ({contact, getContact}) => {
let navigate = useNavigate()

const navigateUser=()=>{
  navigate(`/update/${contact._id}`)
}
    return(
        <div>
             <Card style={{ width: '18rem' }}>
      <Card.Body>
        <button onClick={async()=>{await deleteContact(contact._id);getContact()}}>X</button>
        <button onClick={()=>navigateUser()} >modify</button>
        <Card.Title>{contact.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">{contact.email}</Card.Link>
        <Card.Link href="#">{contact.age}</Card.Link>
      </Card.Body>
    </Card>
        </div>
    )
}

export default CardContact