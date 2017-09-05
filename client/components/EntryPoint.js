import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { logout } from '../reducer/user';
import EntryNav from './navbar/EntryNav'
// Component //

function EntryPoint () {

  // const { children, handleClick, loggedIn } = props;

  return (
    <div>

      <EntryNav />


      <div className="volunteer-cover">
        <img className="wide-image" src="cover-volunteers.jpg"/>
        <h2 className="cover-text"><strong>FIND OPPORTUNITIES IN YOUR COMMUNITY TO MAKE A DIFFERENCE</strong></h2>
        <button className="volunteer-btn"><Link to="/volunteer-signup">Volunteer</Link></button>

      </div>
    </div>
  );
};

// { children }

// Main.propTypes = {
//   children: PropTypes.object,
//   handleClick: PropTypes.func.isRequired,
//   loggedIn: PropTypes.bool.isRequired
// };
//
// // Container //
//
// const mapState = ({ user }) => ({
//   loggedIn: !!user.id
// });
//
// const mapDispatch = dispatch => ({
//   handleClick () {
//     dispatch(logout());
//   }
// });
//

// export default EntryPoint


export default connect(null, null)(EntryPoint);
