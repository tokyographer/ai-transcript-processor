import React from 'react';

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white">
      <ul>
        <li className="p-4 hover:bg-gray-700">Dashboard</li>
        <li className="p-4 hover:bg-gray-700">Contacts</li>
        <li className="p-4 hover:bg-gray-700">Deals</li>
        <li className="p-4 hover:bg-gray-700">Settings</li>
      </ul>
    </div>
  );
}

export default Sidebar;
