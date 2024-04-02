import React from 'react'
import './ContactComponent.scss'



 function ContactComponent({user_id, contact_id, name, company, email, message,contact_date}) {
    const isMobile = window.innerWidth <= 1000;

   
  return (
    <div>
        
    <div className="contacts">
        <div className="contact">
        {!isMobile && <img src="https://cdn.shopify.com/s/files/1/0733/7767/7577/files/profile_2.png?v=1712073839"/>  }
        {isMobile && (
              <div>
                <dt>Contact Date</dt>
                <dd>{contact_date}</dd>
              </div>
            )}
            <dl className="contact-details">
                <div>
                    <dt>{name}, {company}</dt>
                </div>
                
                <div>
                    
                    <dd>{email}</dd>
                </div>
                {!isMobile && (
              <div>
                <dd>{contact_date}</dd>
              </div>
            )}
                 <div className={`contact-message ${isMobile ? 'full-width-message' : ''}`}>
                  <dt>{message}</dt>
                </div>
            </dl>
           {/*<div className="reply">
                <button>Responder</button> 
                </div>*/}
        </div>
       
       
    </div>
</div>
  )
}
export default ContactComponent