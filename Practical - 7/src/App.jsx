import React, { useState } from 'react';
import './App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app-container">
      {!isSidebarOpen && (
        <button className="hamburger" onClick={toggleSidebar}>
          <i className="material-icons">menu</i>
        </button>
      )}

      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          <i className="material-icons">close</i>
        </button>
        <ul>
          <li><a href="#"><i className="material-icons">home</i> Home</a></li>
          <li><a href="#"><i className="material-icons">info</i> About</a></li>
          <li><a href="#"><i className="material-icons">room_service</i> Services</a></li>
          <li><a href="#"><i className="material-icons">email</i> Contact</a></li>
        </ul>
      </div>

      <div className="main-content">
        <h1>Welcome to My Website</h1>
        <p>This is the main content of the webpage.</p>
      </div>
    </div>
  );
}

export default App;