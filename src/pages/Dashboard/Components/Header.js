import React from 'react'
import "./Header.scss";

function Header(props) {

  return (
    <div className='header-container'>
      <header className="dashboard-header">
		<div className="dashboard-header-logo">
			<div className="logo">
				<span className="logo-icon">
					<img src="https://res.cloudinary.com/dnho57ne8/image/upload/v1699913993/brava_fqk4h4.png" />
				</span>
				<h1 className="logo-title">
					<span>Brava</span>
					<span>NFC</span>
				</h1>
			</div>
		</div>
		<div className="dashboard-header-navigation">
			<div className="tabs">
				<a href="#" className="active">
					Overview
				</a>
				<a href="" >
					Payments
					
				</a>
				<a href="Cards/:id">
					Cards
				</a>
				<a href="#">
					Account
				</a>
				<a href="#">
					System
				</a>
				
			</div>
		</div>
		<div className="dashboard-header-actions">
			<button className="user-profile">
				<span>{props.username}</span>
				<span>
					<img src="https://assets.codepen.io/285131/almeria-avatar.jpeg" />
				</span>
			</button>
			
		</div>
		<div className="dashboard-header-mobile">
			<button className="icon-button large">
				<i className="ph-list"></i>
			</button>
		</div>

	</header>
    </div>
  )
}

export default Header
