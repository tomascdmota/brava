import React, { useEffect, useRef } from 'react';
import './Graph.scss';
import * as d3 from 'd3';

const GraphComponent = ({ leadsData }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!leadsData || !Array.isArray(leadsData)) return;

    // Create an object to store the count of contacts for each day of the week
    const contactsPerDay = {
      Sun: 0,
      Mon: 0,
      Tue: 0,
      Wed: 0,
      Thu: 0,
      Fri: 0,
      Sat: 0
    };

    // Count leads for each day of the week
    leadsData.forEach(lead => {
      const dayOfWeek = new Date(lead.access_date).toLocaleDateString('en-US', { weekday: 'short' });
      contactsPerDay[dayOfWeek] += 1;
    });

    // Calculate the maximum lead count
    const maxLeadCount = Math.max(...Object.values(contactsPerDay));

    // Create the graph using D3.js
    const svg = d3.select(chartRef.current).append('svg')
      .attr('width', 800)
      .attr('height', 400)
      .append('g')
      .attr('transform', 'translate(40, 40)'); // Add padding for axes

    // Define days of the week
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Create scales
    const xScale = d3.scaleBand()
      .domain(daysOfWeek)
      .range([0, 700]) // Adjust width of chart area  
      .padding(0.1);

    const yScale = d3.scaleLinear()
      .domain([0, maxLeadCount]) // Adjust y-scale domain
      .range([300, 0]);

    // Create bars
    svg.selectAll('rect')
      .data(daysOfWeek.map(day => ({ day, count: contactsPerDay[day] })))
      .enter()
      .append('rect')
      .attr('x', d => xScale(d.day))
      .attr('y', d => yScale(d.count))
      .attr('width', xScale.bandwidth())
      .attr('height', d => 300 - yScale(d.count))
      .attr('fill', 'steelblue');

    // Create x-axis
    svg.append('g')
      .attr('transform', 'translate(0, 300)')
      .call(d3.axisBottom(xScale));

    // Create y-axis
    svg.append('g')
      .call(d3.axisLeft(yScale).ticks(maxLeadCount).tickFormat(d3.format('d')));

    // Add axis labels
    svg.append('text')
      .attr('transform', 'rotate(-90)')
      .attr('x', -200)
      .attr('y', -30)
      .text('Number of Contacts');

    svg.append('text')
      .attr('x', 350)
      .attr('y', 360)
      .text('Day of the Week');

  }, [leadsData]);

  return <div ref={chartRef}></div>;
};

export default GraphComponent;
