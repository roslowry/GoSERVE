import axios from 'axios';
import { browserHistory } from 'react-router';


// constants

const GET_ALL_ORGANIZATIONS = 'GET_ALL_ORGANIZATIONS';
const GET_CURRENT_ORGANIZATION = 'GET_CURRENT_ORGANIZATION';

// vanilla action creators

export const getOrgs = function(organizations){ return {
  type: GET_ALL_ORGANIZATIONS,
  organizations
}

}
  // export const addUserExperience = experience => ({
//   type: ADD_USER_EXPERIENCE,
//   experience
// })
// thunk async action creators

export const fetchAllOrganizations = function() {
  return function(dispatch) {
    axios.get('/api/organizations')
    .then(res => res.data)
    .then(returnedOrgs => {
      console.log('orgs found', returnedOrgs)
      dispatch(getOrgs(returnedOrgs))
    })
    .catch(console.error)
  }
}

// initial state

const initialState = {
  currentOrganization: {},
  allOrganizations: []
}



// reducer

export default function (state = initialState, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case GET_ALL_ORGANIZATIONS:
      newState.allOrganizations = action.organizations;
      return newState;
    case GET_CURRENT_ORGANIZATION:
      newState.currentOrganization = action.organization;
      return newState;
    default:
      return state;
  }
}
