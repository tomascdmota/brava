import React from 'react'
import './ContactComponent.scss'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';


 function ContactComponent({user_id, contact_id, name, email, message,contact_date}) {

  return (
    <div>
        
    <div className="contacts">
        <div className="contact">
          
            <dl className="contact-details">
                <div>
                    <dt>Name</dt>
                    <dd>{name}</dd>
                </div>
                <div>
                    <dt>Email</dt>
                    <dd>{email}</dd>
                </div>
                <div className='contact-message'>
                    <dt>Message</dt>
                    <dd>{message}</dd>
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