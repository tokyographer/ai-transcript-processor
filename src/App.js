import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contacts from './components/Contacts';
import Settings from './components/Settings'; // Import the Settings component


function App() {
  return (
    <Router>
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <Routes>
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  </Router>
  );
}

export default App;
