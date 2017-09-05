
import React from 'react';
import { Link } from 'react-router';

export default function EntryNav() {
  return (
    <div className="above">
      <div className="volunteer-login"><Link to={'/volunteer-signup'}>VOLUNTEER LOGIN</Link></div>
      <div className="about"><Link to="/allProfiles">VOLUNTEERS</Link></div>
      <div className="brand">GoSERVE!</div>
      <div className="opportunities"><Link to={'/organizations'}>ORGANIZATIONS</Link></div>
    </div>

  )
}


// <div className="organization-login">ORGANIZATION LOGIN</div>
