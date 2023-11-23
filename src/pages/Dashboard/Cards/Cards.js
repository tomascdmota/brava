import React from 'react'
import Header from '../Components/Header'
import "./Cards.scss"

function Cards() {
  return (
    <div className='cards-container'>
        <Header/>
        <h1>My Cards</h1>
        <div className="tiles">
            
					<article className="tile">
						<div className="tile-header">
							<i className="ph-lightning-light"></i>
							<h3>
								<span>Electricity</span>
								<span>UrkEnergo LTD.</span>
							</h3>
						</div>
						<a href="#">
							<span>Go to service</span>
							<span className="icon-button">
								<i className="ph-caret-right-bold"></i>
							</span>
						</a>
					</article>
					<article className="tile">
						<div className="tile-header">
							<i className="ph-fire-simple-light"></i>
							<h3>
								<span>Heating Gas</span>
								<span>Gazprom UA</span>
							</h3>
						</div>
						<a href="#">
							<span>Go to service</span>
							<span className="icon-button">
								<i className="ph-caret-right-bold"></i>
							</span>
						</a>
					</article>
					<article className="tile">
						<div className="tile-header">
							<i className="ph-file-light"></i>
							<h3>
								<span>Tax online</span>
								<span>Kharkov 62 str.</span>
							</h3>
						</div>
						<a href="#">
							<span>Go to card</span>
							<span className="icon-button">
								<i className="ph-caret-right-bold"></i>
							</span>
						</a>
					</article>
				</div>
      
    </div>
  )
}

export default Cards
