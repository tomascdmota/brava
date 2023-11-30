import React, {useState, useEffect} from 'react';
import { useParams, useNavigate} from 'react-router';
import "./Overview.scss"
import ContactComponent from './Components/ContactComponent';
import axios from 'axios';
import Cookie from 'js-cookie';

const OverviewContent = () => {
	const {id:userId} = useParams();
	const [contactData, setContactData] = useState([]);
	const [contactCounter, setContactCounter] = useState(0);
	const host = process.env.REACT_APP_HOST;
	const isMobile = window.innerWidth <= 1000;
	const navigate = useNavigate()
	

	useEffect(()=>{
		const fetchContacts = async () => {
			await axios.get(`http://${host}:3306/api/${userId}/dashboard`,{ withCredentials: true 
			  }).then((res)=> {
				setContactData(res.data);
				setContactCounter(res.data.length);
			  }).catch((error)=> {
				console.log(error)
			  }); 
		}
		fetchContacts()
	}, [userId])

	useEffect(() => {
		// Check if the session_token cookie exists
		const sessionToken = Cookie.get('session_token');
	
		if (!sessionToken) {
		  // Redirect to the login page if the cookie does not exist
		  navigate('/login');
		}
	  }, [navigate]);

	

  return (
    <div>
		<div className="overview">
	<div className="overview-body">
		<div className="overview-body-navigation">
		{/*	<nav className="navigation">
				<a href="#">
					<i className="ph-browsers"></i>
					<span>Analytics </span>
				</a>
				<a href="#">
					<i className="ph-check-square"></i>
					<span>Cards</span>
				</a>
				<a href="#">
					<i className="ph-swap"></i>
					<span>Profile</span>
				</a>
				<a href="#">
					<i className="ph-file-text"></i>
					<span>Help Center</span>
				</a>
				<a href="#">
					<i className="ph-globe"></i>
					<span>Sharing</span>
				</a>
				
  </nav> */	}
   			
			
		</div>
		<div className="overview-body-main-content">
			{/*<section className="service-section">
				<h2>Este mês</h2>
				<div className="service-section-header">
					<div className="search-field">
						<i className="ph-magnifying-glass"></i>
						<input type="text" placeholder="Account number"></input>
					</div>
					<div className="dropdown-field">
						<select>
							<option>Home</option>
							<option>Work</option>
						</select>
						<i className="ph-caret-down"></i>
					</div>
					<button className="flat-button">
						Search
					</button>
				</div>
				<div className="mobile-only">
					<button className="flat-button">
						Toggle search
					</button>
				</div>
				
				<div className="service-section-footer">
					<p>Services are paid according to the current state of the currency and tariff.</p>
				</div>
</section> */}	
			<section className="contact-section">
			{isMobile && (
              <div className='gen-leads'>
                <h2 >GENERATED LEADS: </h2>
				<div className='contact-counter'>{contactCounter}</div>
              </div>
            )}
			<div className="contact-section-header">
				<h2>Últimos Contactos</h2>
				{/*<div className="filter-options">
					<p>Filter selected: more than 100 $</p>
					<button className="icon-button">
						<i className="ph-funnel"></i>
					</button>
					<button className="icon-button">
						<i className="ph-plus"></i>
					</button>
</div> */}
			</div>
			{contactData.map((contact) => <ContactComponent key={contact.contact_id} name={contact.name} email={contact.email} contact_date={contact.contact_date} message={contact.message} />)}

			
			</section>
		</div>
		<div className="overview-body-sidebar">
			<section className="payment-section">
			{!isMobile && (<div><h2>GENERATED LEADS: </h2>
				<div className='contact-counter'>{contactCounter}</div></div>)}
				<div className="payment-section-header">
					
				</div>
				{/*<div className="payments">
					<div className="payment">
						<div className="profile-card green">
							<span>01/22</span>
							<span>
								•••• 4012
							</span>
						</div>
						<div className="payment-details">
							<h3>Internet</h3>
							<div>
								<span>$ 2,110</span>
								<button className="icon-button">
									<i className="ph-caret-right-bold"></i>
								</button>
							</div>
						</div>
					</div>
					<div className="payment">
						<div className="profile-card olive">
							<span>12/23</span>
							<span>
								•••• 2228
							</span>
						</div>
						<div className="payment-details">
							<h3>Universal</h3>
							<div>
								<span>$ 5,621</span>
								<button className="icon-button">
									<i className="ph-caret-right-bold"></i>
								</button>
							</div>
						</div>
					</div>
					<div className="payment">
						<div className="profile-card gray">
							<span>03/22</span>
							<span>
								•••• 5214
							</span>
						</div>
						<div className="payment-details">
							<h3>Gold</h3>
							<div>
								<span>$ 3,473</span>
								<button className="icon-button">
									<i className="ph-caret-right-bold"></i>
								</button>
							</div>
						</div>
					</div>
</div>
				<div className="faq">
					<p>Most frequently asked questions</p>
					<div>
						<label>Question</label>
						<input type="text" placeholder="Type here"></input>
					</div>
				</div>
				<div className="payment-section-footer">
					<button className="save-button">
						Save
					</button>
					<button className="settings-button">
						<i className="ph-gear"></i>
						<span>More settings</span>
					</button>
				</div>
				*/}
			</section>
		</div>
	</div>
</div></div>
  );
};

export default OverviewContent;