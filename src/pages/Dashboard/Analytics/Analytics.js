import React, { useState, useEffect } from 'react';
import Slider from 'react-slick'; // Import the Slider component
import 'slick-carousel/slick/slick.css'; // Import slick carousel styles
import 'slick-carousel/slick/slick-theme.css'; // Import slick carousel theme styles
import "./Analytics.scss";

import LastContactsComponent from '../Overview/Components/LastContactsComponent/LastContactsComponent';
import GraphComponent from '../Overview/Components/Graph/Graph';

function Analytics({ leadsData, contacts, username }) {
  // Provide default values for leadsData and contacts to prevent TypeError
  const defaultLeadsData = leadsData || [];
  const defaultContacts = contacts || [];
  const [city, setCity] = useState('');
  const ratio = ((defaultContacts.length / defaultLeadsData.length) * 100).toFixed(1) || 0;

  useEffect(() => {
    if (!leadsData || !Array.isArray(leadsData)) return;

    // Extract cities from leadsData
    const cities = leadsData.map(lead => lead.city);

    // Count occurrences of each city
    const cityCounts = {};
    cities.forEach(city => {
      cityCounts[city] = (cityCounts[city] || 0) + 1;
    });

    // Find the most dominant city
    const sortedCities = Object.keys(cityCounts).sort((a, b) => cityCounts[b] - cityCounts[a]);
    const mostDominant = sortedCities[0];

    // Set the most dominant city
    setCity(mostDominant);
  }, [leadsData]);

  // Settings for the Slider component
  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 200,
    slidesToShow: 2, // Show 2 squares at a time
    slidesToScroll: 1,
    swipeToSlide: true, // Enable swipe
    responsive: [
      {
        breakpoint: 768, // Breakpoint for mobile
        settings: {
          slidesToShow: 1, // Show 1 square at a time on mobile
        }
      }
    ]
  };

  return (
    <div className='analytics-container'>
      <div className="analytics-section">
        {/* Conditionally render different layouts based on screen size */}
        {window.innerWidth <= 768 ? (
          /* Render the Slider component on mobile */
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
          /* Render the squares directly on desktop */
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
      <div className="analytics-graph">
        <GraphComponent leadsData={defaultLeadsData} />
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
