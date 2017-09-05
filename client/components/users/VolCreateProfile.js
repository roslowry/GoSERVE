import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { GeneralNav } from '../';

class CreateProfile extends React.Component {

  constructor(props){
    super(props)
    // this.state.skillsClicked = false;
  }
  handleSkilsClick () {
    this.setState({
      skillsClicked: true
    })
  }

  renderSkillsButton () {
    return (
      <div>
        <h1>hello</h1>
      </div>

    )
  }

  render () {
    return (
      <div>

      <GeneralNav />
      <div className="signup-register">
        <form className="signup-form">
          <div className="form-row">
            <label htmlFor="name"><small>Name</small></label>
            <input className="form-control" name="name" type="text" />
          </div>
          <div className="form-row">
            <label htmlFor="email"><small>email</small></label>
            <input className="form-control" name="email" type="text" />
          </div>
          <div className="form-row">
            <label htmlFor="password"><small>Password</small></label>
            <input className="form-control" name="password" type="text" />
          </div>
          <div className="form-row">
            <label htmlFor="photoUrl"><small>Image URL</small></label>
            <input className="form-control" name="photoUrl" type="text" />
          </div>
          <div className="form-row">
            <label htmlFor="location"><small>Select Location</small></label>
            <select name="location" className="form-control">
              <option>Los Angeles</option>
              <option>New York</option>
              <option>Chicago</option>
              <option>Portland</option>
              <option>San Francisco</option>
            </select>
          </div>
          <div>

          <div className="form-row">
            <label htmlFor="skills"><small>*Optional</small></label>
            <button className="general-btn" name="skills">Add Skills to Profile</button>
          </div>
          <div className="form-row">
            <label htmlFor="skills"><small>*Optional</small></label>
            <button className="general-btn" name="skills">Add Service Intests</button>
          </div>
          <div className="form-row">
            <label htmlFor="skills"><small>*Optional</small></label>
            <button className="general-btn" name="skills">Add Fields of Interest</button>
          </div>
          <button className="general-btn" type="submit">Submit</button>
          </div>


        </form>

      </div>
    </div>
    )

  }



}
//
// {this.state.skillsClicked? renderSkillsButton() : null }
// {this.state.skillsClicked? renderSkillsButton() : null }
// {this.state.skillsClicked? renderSkillsButton() : null }

export const VolCreateProfile = connect(null, null)(CreateProfile);
