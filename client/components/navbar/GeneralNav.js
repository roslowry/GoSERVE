
import React from 'react';
import { Link } from 'react-router';

export default function GeneralNav() {
  return (
    <div className="above-general">
      <div className="brand"><Link to={'/'}>HOME</Link></div>
      <div className="brand">VOLUNTEER OPPORTUNITIES</div>
      <div className="brand"><Link to={'/volunteer-signup'}>GoSERVE!</Link></div>
      <div className="brand"><Link to="/allProfiles">VOLUNTEERS</Link></div>
      <div className="brand"><Link to={'/organizations'}>ORGANIZATIONS</Link></div>
    </div>

  )
}



// <div className="brand">ABOUT</div>
