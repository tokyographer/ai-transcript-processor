import React from 'react';
import StatsCard from './StatsCard';
import DataTable from './DataTable';
import Contacts from './Contacts';


function Dashboard() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <StatsCard title="Total Contacts" value="1,024" />
        <StatsCard title="Total Deals" value="256" />
        <StatsCard title="New Contacts" value="50" />
        <StatsCard title="Closed Deals" value="12" />
      </div>
      <DataTable />
    </div>
  );
}

export default Dashboard;
