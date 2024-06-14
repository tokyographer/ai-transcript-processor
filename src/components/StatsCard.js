import React from 'react';

function StatsCard({ title, value }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="text-2xl font-semibold">{value}</p>
    </div>
  );
}

export default StatsCard;
