
import React from 'react';
import { Link } from 'react-router';

export default function EntryNav() {
  return (
    <div className="above">
      <div className="volunteer-login">VOLUNTEER LOGIN</div>
      <div className="organization-login">ORGANIZATION LOGIN</div>
      <div className="brand">GoServe!</div>
      <div className="about"><Link to="/allProfiles">VOLUNTEERS</Link></div>
      <div className="opportunities">SERVICE OPPORTUNITIES</div>
    </div>

  )
}
