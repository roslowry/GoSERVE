import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { GeneralNav } from '../';

class AllOrganizations extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    // console.log('rendering')
    // console.log('this.props.organizations', this.props.organizations)
    // const profiles = this.props.profiles;
    const organizations = this.props.organizations

    return (
      <div className="profileList">
      <GeneralNav />
        {organizations.map(function(organization){
          return (

          <div key={organization.id} className="profileItem">
            <div className="imageCircle">

              <img className="orgImg" src={`${organization.photoUrl}`}/>
            </div>
            <div className="profile-items">
              <div>
                <h1 className="name">{organization.name}</h1>

                <h5 className="location">{organization.sector.split('_').join(' ')}</h5>
                <p className="service-interests"><strong>About the Organization: </strong>{organization.description}</p>

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
    organizations: state.organizationReducer.allOrganizations
  })
}

export const OrganizationContainer = connect(mapStateToProps, null)(AllOrganizations)


//
//



//
//
//
//
// {this.props.organizations.map(function(organization){
//   return (
//     <h1>{organization.name}</h1>
//
//   )
//
// })
//
//
// }
