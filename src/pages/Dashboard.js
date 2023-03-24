import React from 'react';
import {Link, Outlet} from "react-router-dom";

function Dashboard() {
    return (
      <div>
        <h1>Dashboard</h1>
        <Outlet />
        <Link to="/">Home</Link>
      </div>
    )
  }

export default Dashboard;