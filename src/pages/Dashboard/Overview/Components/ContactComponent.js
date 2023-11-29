import React from 'react'
import './ContactComponent.scss'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';


 function ContactComponent(props) {



  return (
    <div>
        
    <div className="contacts">
        <div className="contact">
            <div className="contact-logo">
                <PersonOutlineIcon/>
            </div>
            <dl className="contact-details">
                <div>
                    <dt>Name</dt>
                    <dd>{props.name}</dd>
                </div>
                <div>
                    <dt>Email</dt>
                    <dd>{props.email}</dd>
                </div>
                <div>
                    <dt>Message</dt>
                    <dd>{props.message}</dd>
                </div>
            </dl>
            <div className="reply">
                <button>Responder</button> 
            </div>
        </div>
       
       
    </div>
</div>
  )
}
export default ContactComponent