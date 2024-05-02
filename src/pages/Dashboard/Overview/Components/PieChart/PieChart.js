import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { Chart } from 'react-google-charts';
import './PieChart.scss';

const PieChart = () => {
  const { id: userId } = useParams();
  const [pieData, setPieData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://${process.env.REACT_APP_HOST}/api/${userId}/icon-engagement`);
        const responseData = response.data;
        const total = responseData?.top5Metrics.reduce((acc, curr) => acc + curr.count, 0);
        const filteredMetrics = responseData?.top5Metrics?.filter(entry => entry.count > 0);
        
        if (filteredMetrics && total !== 0) { // Ensure filteredMetrics is defined
          const formattedData = [
            ['Metric', 'Count'],
            ...filteredMetrics.map(entry => [mapMetricToLabel(entry.metric), entry.count])
          ];
          setPieData(formattedData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, [userId]);

  // Function to map metric names to user-friendly labels
  const mapMetricToLabel = (metric) => {
    switch (metric) {
      case 'google_reviews_count':
        return 'Google Reviews';
      case 'instagram_count':
        return 'Instagram';
      case 'facebook_count':
        return 'Facebook';
      case 'linkedin_count':
        return 'LinkedIn';
      case 'youtube_count':
        return 'YouTube';
      case 'paypal_count':
        return 'PayPal';
      case 'twitter_count':
        return 'Twitter';
      case 'tiktok_count':
        return 'TikTok';
      case 'spotify_count':
        return 'Spotify';
      case 'vinted_count':
        return 'Vinted';
      case 'notes_count':
        return 'Notes';
      case 'address_count':
        return 'Address';
      case 'standvirtual_count':
        return 'Standvirtual';
      case 'olx_count':
        return 'OLX';
      case 'piscapisca_count':
        return 'Piscapisca';
      case 'custojusto_count':
        return 'Custo Justo';
      case 'url_count':
        return 'URL';
      default:
        return metric;
    }
  };

  return (
    <div className="pie-chart-container">
      <h2>Social Media Engagement</h2>
      <div className="pie-chart">
        {pieData && pieData.length > 0 ? (
          <Chart
            width={'100%'}
            height={'100%'}
            chartType="PieChart"
            data={pieData}
            
            options={{
              pieSliceText:'none',
              pieHole: 0.5,
              sliceVisibilityThreshold: 0.01, // 1%
              legend: {
                textStyle: {
                  color: '#fff', // Change legend text color
                  fontSize: 16,
                },
              },
              backgroundColor: '#1b1b1c',
              pieSliceBorderColor: 'none',
              colors: ['#613FB8', '#361BA0', '#8B63D0', '#B688E7', '#E0ACFF'],
              chartArea: {
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
              },
            }}
          />
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
};

export default PieChart;
