import React, { Component } from 'react';
import axios from 'axios';
import { hashHistory } from 'react-router';
import {connect} from 'react-redux';
import { Navbar } from '../components/Navbar';
import UserOpportunities from '../components/users/UserOpportunities';
import UserApplications from '../components/users/UserApplications';
import NavBar from '../components/Navbar';

export default class UserDashboard extends Component {

  constructor(props){
    super(props);
    this.state = {
      positionTitle: '',
      positionDescription: '',
      educationField: '',
      educationLevel: '',
      experienceField: '',
      experienceLevel: '',
   };
	this.handleJobTitle = this.handleJobTitle.bind(this);
	this.handleJobDescription = this.handleJobDescription.bind(this);
	this.handleEducationField = this.handleEducationField.bind(this);
	this.handleEducationLevel = this.handleEducationLevel.bind(this);
	this.handleExperienceField = this.handleExperienceField.bind(this);
	this.handleExperienceLevel = this.handleExperienceLevel.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this)
  }

  	handleSubmit (event) {
  		event.preventDefault()

  		this.props.addPosting({
  			positionTitle: this.state.positionTitle,
  			positionDescription: this.state.positionDescription,
  			educationField: this.state.educationField,
  			educationLevel: this.state.educationLevel,
  			experienceField: this.state.experienceField,
  			experienceLevel: this.state.experienceLevel
  		})
  	}

	handleJobTitle (event) {
		const value = event.target.value;
		this.setState({
			positionTitle: value
		})
	}

	handleJobDescription (event) {
		const value = event.target.value;
		this.setState({
			positionDescription: value
		})
	}

	handleEducationField (event) {
		const value = event.target.value;
		this.setState({
			educationField: value
		})
	}

	handleEducationLevel (event) {
		const value = event.target.value;
		this.setState({
			educationLevel: value
		})
	}
	handleExperienceField (event) {
		const value = event.target.value;
		this.setState({
			experienceField: value
		})
	}
	handleExperienceLevel (event) {
		const value = event.target.value;
		this.setState({
			experienceLevel: value
		})
	}

  render () {
    return (
      <div>
        <UserApplications />
        <UserOpportunities />
      </div>
    )
  }
}
// <Navbar />


//
//
// const mapStateToProps = function(state){
//   return {
//     props: 'props'
//   }
// }
//
// const mapDispatchToProps = function (dispatch) {
// 	return {
// 		addPosting: (user) => {
// 			axios.post('/api/postings',{
// 				positionTitle: user.positionTitle,
// 				positionDescription: user.positionDescription,
// 				educationLevel: user.educationLevel,
// 				educationField: user.educationField,
// 				experienceLevel: user.experienceLevel,
// 				experienceField: user.experienceField
// 			})
// 			.then((result) => {
// 				console.log(result.data)
// 				// return dispatch(modPosting(result.data))
//
// 			}).catch(console.log)
// 		}
// 	}
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(EmployerDashboardContainer)
