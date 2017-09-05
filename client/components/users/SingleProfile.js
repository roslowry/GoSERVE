import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { GeneralNav } from '../'

class SingleProfile extends React.Component {
  constructor(props){
    super(props);
    // this.interestedIn = this.interestedIn.bind(this)
  }

    // interestedIn(profile) {
      // console.log('here is profiel', this.props.profile.photoUrl)
      // let vals = profile.sectorInterests.map(function(val){
      //   return val
      // })
      // let newVals = vals.join(' ');
      // console.log('newVals', newVals)
      // console.log('vals length is', vals.length)
      //
      // console.log(vals, Object.keys(vals).length);

      // let endSlice = vals.length - 1
      // let oneThroughLast = vals.slice(0, endSlice);
      // let lastOne = vals[vals.length - 1];
      // let newVals = oneThroughLast.join(', ')
      // let valsToReturn = 'Interested in ' + newVals + ', and ' + lastOne + ' opportunities.'
      // console.log('valsToReturn', valsToReturn)
      // return valsToReturn
  // }

  render() {
    // console.log('rendering');

    // let dog = this.interestedIn(this.props.profile)
    // console.log(dog)
    // console.log(dog)
    // console.log('dog', dog)
    // console.log('this.props.profiles.sectorInterests',this.props.profile.sectorInterests.length)
    // const profile = this.props.currentProfile
    // console.log('profile', profile)

      return (
        <div className="profileTop">
          <GeneralNav />
          <div className="profilePage">
          <div className="profileItem">
            <div className="imageCircle">
              <img className="profilePortrait" src={`${this.props.profile.photoUrl}`}/>
            </div>
            <div>
              <h1>{this.props.profile.name}</h1>
              <h4>{this.props.profile.location} Area</h4>
            </div>
            <div>
              <button className="contact-btn">Contact</button>
            </div>
          </div>
          <hr/>
          <div className="profileContents cooperate">
            <h1><strong>About Me</strong></h1>
            <h3 className="cooperate">{this.props.profile.description}</h3>
            <div className="skills-interests cooperate">
              <h3><strong>Skills</strong></h3>
              <h4>{this.props.profile.allSkills}</h4>
            </div>
            <div className="skills-intersts cooperate">
              <h3><strong>Service Interests</strong></h3>
              <h4>{this.props.profile.allServiceInterests}</h4>
            </div>
            <div className="skills-interests cooperate">
              <h3><strong>Fields of Interest</strong></h3>
              <h4>{this.props.profile.allSectorInterests}</h4>
            </div>

        </div>
      </div>
    </div>



        )
  }
}




//
const mapStateToProps = state => {
  return ({
    profile: state.profileReducer.currentProfile
  })
}

export const SingleProfileContainer = connect(mapStateToProps, null)(SingleProfile)

//
//
// <div className="profile">
//   <h1>{this.props.profile.name}</h1>
//   <p>{this.props.profile.location} Area</p>
//   <p><strong>Skills:</strong>{this.props.profile.allSkills}</p>
//   <p><strong>Sector Interests:</strong>{this.props.profile.allSectorInterests}</p>
//   <p><strong>Service Interests:</strong>{this.props.profile.allServiceInterests}</p>
//
//
// </div>
// <div className="profile-items">
//   <div>
//   </div>
// </div>
// </div>
// </div>

//
// <ul>
//
// {this.props.profile.allSkills.split(', ').map(function(skill){
//   return <li>skill</li>
// })}
// </ul>
