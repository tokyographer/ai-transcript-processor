// src/components/Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 p-4">
      <nav>
        <ul>
          <li className="mb-2">
            <Link to="/">Dashboard</Link>
          </li>
          <li className="mb-2">
            <Link to="/contacts">Contacts</Link>
          </li>
          <li className="mb-2">
            <Link to="/settings">Settings</Link>
          </li>
          {/* Add more links as needed */}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
