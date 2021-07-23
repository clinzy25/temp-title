import React from 'react';
import { Link } from 'react-router-dom';

const HostDashboard = () => (
  <>
    <h1>HostDashboard</h1>
    <Link to='/feeds/:id'>
      <button type='button'>Create Feed</button>
    </Link>
  </>
);

export default HostDashboard;
