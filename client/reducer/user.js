import axios from 'axios';
import { browserHistory } from 'react-router';

const GET_USER = 'GET_USER';
const REMOVE_USER = 'REMOVE_USER';
const SET_USER  = 'SET_USER'

const defaultUser = {};

const getUser = user => ({ type: GET_USER, user });
const removeUser = () => ({ type: REMOVE_USER });

const setCurrentUser = user => ({ type: SET_USER, user })

export const me = () =>
  dispatch =>
    axios.get('/auth/me')
      .then(res =>
        dispatch(getUser(res.data || defaultUser)));

export const createAndSetUser = function(body){
  return function(dispatch){
    console.log('yo');
    axios.post('/api/users/newUser', body)
    .then( res => res.data)
    .then( returnedUser => {
      dispatch(setCurrentUser(returnedUser))
    })
    .catch(console.error)
    }
  }


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

export const auth = (email, password, method) =>
  dispatch =>
    axios.post(`/auth/${method}`, { email, password })
      .then(res => {
        dispatch(getUser(res.data));
        browserHistory.push('/home');
      })
      .catch(error =>
        dispatch(getUser({ error })));

export const logout = () =>
  dispatch =>
    axios.post('/auth/logout')
      .then(res => {
        dispatch(removeUser());
        browserHistory.push('/login');
      })
      .catch(err => console.log(err));


export default function (state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user;
    case REMOVE_USER:
      return defaultUser;
    case SET_USER:
      return action.user
    default:
      return state;
  }
}
