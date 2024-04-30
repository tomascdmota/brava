import React from 'react';

const TotalCountComponent = ({ title, count }) => {
  return (
    <div className="total-count-component">
      <h2>{title}</h2>
      <p>Total Count: {count}</p>
    </div>
  );
};

export default TotalCountComponent;
