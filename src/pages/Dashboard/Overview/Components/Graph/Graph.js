import React, { useRef, useEffect, useState } from 'react';
import { VictoryChart, VictoryLine, VictoryAxis, VictoryLabel } from 'victory';
import './Graph.scss'; // Import the styles

const GraphComponent = ({ leadsData }) => {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        const { width, height } = entry.contentRect;
        setDimensions({ width, height });
      }
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  if (!leadsData || !Array.isArray(leadsData)) return null;

  // Initialize contactsPerDay object
  const contactsPerDay = {
    Sun: 0, Mon: 0, Tue: 0, Wed: 0, Thu: 0, Fri: 0, Sat: 0
  };

  // Count leads for each day of the week
  leadsData.forEach(lead => {
    const dayOfWeek = new Date(lead.access_date).toLocaleDateString('en-US', { weekday: 'short' });
    contactsPerDay[dayOfWeek] += 1;
  });

  // Define days of the week
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Prepare data for Victory
  const data = daysOfWeek.map(day => ({ x: day, y: contactsPerDay[day] }));

  return (
    <div ref={containerRef} className='graph-container'>
      <VictoryChart width={dimensions.width} height={dimensions.height}>
      <VictoryLabel text="Weekly Taps" x={100} y={10} textAnchor="middle" style={{ fill: '#fff', fontSize: 22, fontWeight: 'bold' }} />
        <VictoryAxis
          tickValues={daysOfWeek}
          style={{
            tickLabels: { fontSize: 16, fill: '#fff',fontWeight: 'bold'  }, // Customize axis tick labels
            axis: { stroke: '#fff' }, // Customize axis line
          }}
        />
        <VictoryAxis
          dependentAxis
          style={{
            tickLabels: { fontSize: 16, fill: '#fff',fontWeight: 'bold'  }, // Customize axis tick labels
            axis: { stroke: '#fff' }, // Customize axis line
          }}
        />
        <VictoryLine
          data={data}
          style={{
            data: { stroke: '#8824c2' }, // Customize line color
            parent: { border: '1px solid #000' }
          }}
        />
      </VictoryChart>
    </div>
  );
};

export default GraphComponent;
