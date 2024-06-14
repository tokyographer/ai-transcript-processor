import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white">
      <ul>
        <li className="p-4 hover:bg-gray-700">
          <Link to="/">Dashboard</Link>
        </li>
        <li className="p-4 hover:bg-gray-700">
          <Link to="/contacts">Contacts</Link>
        </li>
        <li className="p-4 hover:bg-gray-700">Deals</li>
        <li className="p-4 hover:bg-gray-700">Settings</li>
      </ul>
    </div>
  );
}

export default Sidebar;
