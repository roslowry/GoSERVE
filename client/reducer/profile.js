import axios from 'axios';
import { browserHistory } from 'react-router';

const GET_SELECTED_PROFILES = 'GET_SELECTED_PROFILES';
const GET_PROFILE = 'SET_PROFILE';
// const REMOVE_USER = 'REMOVE_USER';
// const SET_USER  = 'SET_USER'

const initialState = {
  selectedProfiles: [],
  currentProfile: {}
}

const getSelectedProfiles = profiles => ({ type: GET_SELECTED_PROFILES, profiles})

const getProfile = profile => ({type: GET_PROFILE, profile})

//
// const getUser = user => ({ type: GET_USER, user });
// const removeUser = () => ({ type: REMOVE_USER });
//
// const setCurrentUser = user => ({ type: SET_USER, user })

export const fetchAllProfiles = function(){
  console.log('wooooop');
  return function(dispatch){
    console.log('i am in the dispatch')
    axios.get('/api/users/allProfiles')
    .then(res => res.data)
    .then( returnedProfiles => {
      console.log('whaaat', returnedProfiles)
      dispatch(getSelectedProfiles(returnedProfiles))
    })
    .catch(console.error)
  }
}

export const fetchSingleProfile = function(profileId) {
  console.log('in dispatch');
  console.log('in dispatch profileID', profileId)
  return function(dispatch){
    console.log('i am actually dispatching and using profileId of following', profileId);
    return axios.get(`/api/users/profile/${profileId}`)
    .then(response => {
      console.log('i received data')
      return response.data
    })
    .then(returnedProfile => {
      dispatch(getProfile(returnedProfile))
    })
    .catch(console.error)
  }
}
// .then(res => {
//   console.log('res', res)
//   console.log('res.data', res.data)
//   return res.data
// })
// .then(returnedProfile => {
//   console.log('in the returned profile part')
//   console.log('returned info', returnedProfile)
//   dispatch(getProfile(returnedProfile))
// })
// .catch(console.error)


export default function (state = initialState, action) {
  const newState = Object.assign({}, state)
  switch (action.type) {
    case GET_PROFILE:
      newState.currentProfile = action.profile
      return newState;
    case GET_SELECTED_PROFILES:
      newState.selectedProfiles = action.profiles
      return newState;
    default:
      return state;
  }
}

//
// export const me = () =>
//   dispatch =>
//     axios.get('/auth/me')
//       .then(res =>
//         dispatch(getUser(res.data || defaultUser)));
//
// export const createAndSetUser = function(body){
//   return function(dispatch){
//     console.log('yo');
//     axios.post('/api/users/newUser', body)
//     .then( res => res.data)
//     .then( returnedUser => {
//       dispatch(setCurrentUser(returnedUser))
//     })
//     .catch(console.error)
//     }
//   }


// (body) => {
//   (dispatch) =>  {
// console.log('yo');
//   axios.post('/api/users/newUser', body)
//   .then( res => res.data)
//   .then( returnedUser => {
//     disptach(setCurrentUser(returnedUser))
//   })
//   .catch(error)
//   }
// }
//
// export const auth = (email, password, method) =>
//   dispatch =>
//     axios.post(`/auth/${method}`, { email, password })
//       .then(res => {
//         dispatch(getUser(res.data));
//         browserHistory.push('/home');
//       })
//       .catch(error =>
//         dispatch(getUser({ error })));
//
// export const logout = () =>
//   dispatch =>
//     axios.post('/auth/logout')
//       .then(res => {
//         dispatch(removeUser());
//         browserHistory.push('/login');
//       })
//       .catch(err => console.log(err));
