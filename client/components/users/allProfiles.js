import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { GeneralNav } from '../'

class ProfileList extends React.Component {
  constructor(props){
    super(props);
  }



  render() {
    console.log('rendering')
    console.log('this.props.profiles', this.props.profiles)
    const profiles = this.props.profiles

    return (
      <div className="profileList">
      <GeneralNav />
      {profiles.map(function(profile){
        return (
          <div key={profile.id} className="profileItem">
            <div className="imageCircle">
              <img className="profileImg" src={`${profile.photoUrl}`}/>
              </div>
              <div className="profile-items">
                <div>
                  <Link to={`/profilepage/${profile.id}`}><h1 className="name">{profile.name}</h1></Link>
                  <h5 className="location">{profile.location} Area</h5>
                  <p className="service-interests"><strong>Service Interests Include:  </strong>{profile.allServiceInterests}</p>
                </div>
                <div>
                  <Link to={`/profilepage/${profile.id}`}><button className="general-btn">View Profile</button></Link>
                </div>
              </div>
            </div>
        )
        })
      }
    </div>
    )
  }
}



const mapStateToProps = state => {
  return ({
    profiles: state.profileReducer.selectedProfiles
  })
}

export const ProfilesContainer = connect(mapStateToProps, null)(ProfileList)
