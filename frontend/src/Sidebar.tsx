import React from 'react';
import './App.css';

import { Link } from 'react-router-dom'

export class Sidebar extends React.Component {

  render() {
    return (
      <div className="Sidebar">
        <div className="SidebarHeader">THIS IS IN THE SIDEBAR NOW</div>

        <div className="SidebarElement">
          <Link to="/">Dashboard</Link>
        </div>
        <div className="SidebarElement">
          <Link to="/gyms">Gyms</Link>
        </div>
        <div className="SidebarElement">
          <Link to="/walls">Walls</Link>
        </div>
        <div className="SidebarElement">
          <Link to="/ropes">Ropes</Link>
        </div>
        <div className="SidebarElement">
          <Link to="/setters">Setters</Link>
        </div>
        <div className="SidebarElement">
          <Link to="/routes">Routes</Link>
        </div>
      </div>
    );
  }
}