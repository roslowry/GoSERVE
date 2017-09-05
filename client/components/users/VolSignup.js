import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { GeneralNav } from '../';
import {createAndSetUser} from '../../reducer/user';
import {browserHistory} from 'react-router'

// createAndSetUser

class VolSignup extends React.Component {

  constructor(){
    super()
    this.state = {
      name: '',
      email: '',
      password: ''
    }
    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    console.log('inside submit');
    let name = this.state.name;
    let email = this.state.email;
    let password = this.state.password;
    let body = {
      name, email, password
    };
    console.log('body', body)
    this.setState({
      name: '',
      email: '',
      password: ''
    });
    this.props.addUser(body);
    browserHistory.push("/volunteer-createprofile")
  }


  onNameChange (event) {
    this.setState({
        name: event.target.value
      })
  }


  onEmailChange (event) {
    this.setState({
        email: event.target.value
      })

  }

  onPasswordChange (event) {
    this.setState({
        password: event.target.value
      })
  }


  render () {

    return (
      <div>
      <GeneralNav />
      <div className="signup-register">
        <form className="profile-form">
          <div className="form-row">
            <label htmlFor="name"><small>Name</small></label>
            <input className="form-control" name="name" type="text" onChange={this.onNameChange}/>
          </div>
          <div className="form-row">
            <label htmlFor="email"><small>email</small></label>
            <input className="form-control" name="email" type="text" onChange={this.onEmailChange} />
          </div>
          <div className="form-row">
            <label htmlFor="password"><small>Password</small></label>
            <input className="form-control" name="password" type="text" onChange={this.onPasswordChange}/>
          </div>
          <button className="general-btn" type="submit" onClick={this.handleSubmit}>Submit</button>
        </form>

      </div>
    </div>
    )

  }

}



const mapDispatchToProps = dispatch => {
  return ({

      addUser: (body) => {
      dispatch(createAndSetUser(body))
      }
    }

  )
}


export const VolSignupContainer = connect(null, mapDispatchToProps)(VolSignup);
