import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PieChart from '../Overview/Components/PieChart/PieChart';
import "./Analytics.scss";
import LastContactsComponent from '../Overview/Components/LastContactsComponent/LastContactsComponent';
import GraphComponent from '../Overview/Components/Graph/Graph';

function Analytics({ leadsData, contacts, username }) {
  const defaultLeadsData = leadsData || [];
  const defaultContacts = contacts || [];
  const [city, setCity] = useState('');
  const ratio = ((defaultLeadsData.length / defaultContacts.length) * 100).toFixed(1) || 0;

  useEffect(() => {
    if (!leadsData || !Array.isArray(leadsData)) return;

    const cities = leadsData.map(lead => lead.city);
    const cityCounts = {};
    cities.forEach(city => {
      cityCounts[city] = (cityCounts[city] || 0) + 1;
    });

    const sortedCities = Object.keys(cityCounts).sort((a, b) => cityCounts[b] - cityCounts[a]);
    const mostDominant = sortedCities[0];
    setCity(mostDominant);
  }, [leadsData]);

  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 200,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className='analytics-container'>
      <div className="analytics-section">
        {window.innerWidth <= 768 ? (
          <Slider {...sliderSettings}>
            <div className="analytics-rectangle">
              <div>
                <h1>{defaultContacts.length}</h1>
                <p>Lead Count</p>
              </div>
              <hr className="divider" />
              <div>
                <h1>{defaultLeadsData.length}</h1>
                <p>Total Tap Count</p>
              </div>
            </div>
            <div className="analytics-rectangle">
              <div>
                <h1>{ratio}%</h1>
                <p>Tap-Lead ratio</p>
              </div>
              <hr className="divider" />
              <div>
                <h1>{city}</h1>
                <p>Dominant City</p>
              </div>
            </div>
          </Slider>
        ) : (
          <div className="analytics-rectangle">
            <div>
              <h1>{defaultContacts.length}</h1>
              <p>Lead Count</p>
            </div>
            <hr className="divider" />
            <div>
              <h1>{defaultLeadsData.length}</h1>
              <p>Total Tap Count</p>
            </div>
            <hr className="divider" />
            <div>
              <h1>{ratio}%</h1>
              <p>Tap-Lead ratio</p>
            </div>
            <hr className="divider" />
            <div>
              <h1>{city}</h1>
              <p>Dominant City</p>
            </div>
          </div>
        )}
      </div>
      <div className="graph-section">
        <GraphComponent leadsData={defaultLeadsData} />
        <PieChart />
      </div>
      <div className="analytics-section">
        <LastContactsComponent
          title="Last 5 Contacts"
          count={defaultContacts.length}
          contacts={defaultContacts}
        />
      </div>
    </div>
  );
}

export default Analytics;
