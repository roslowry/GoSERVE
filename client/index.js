import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import store from './store';
// import { Main, Login, Signup, UserHome, EntryPoint} from './components';
import { EntryPoint} from './components';
import {VolSignupContainer} from './components/users/VolSignup';
import {VolCreateProfile} from './components/users/VolCreateProfile';
import {ProfilesContainer} from './components/users/allProfiles'
import {fetchAllProfiles} from './reducer/profile';
import {fetchSingleProfile} from './reducer/profile';
import {SingleProfileContainer} from './components/users/SingleProfile';
import {IndexRedirect} from 'react-router';
import {fetchAllOrganizations} from './reducer/organization';
import {OrganizationContainer} from './components/organizations/AllOrganizations'

// import { me } from './reducer/user';

// const whoAmI = store.dispatch(me());

const requireLogin = (nextRouterState, replace, next) =>
  whoAmI
    .then(() => {
      const { user } = store.getState();
      if (!user.id) replace('/login');
      next();
    })
    .catch(err => console.log(err));

const onAllProfilesEnter = () => {
  return store.dispatch(fetchAllProfiles())
}

const onProfileEnter = (nextRouterState) => {
  console.log('i am trying...')
  const profileId = nextRouterState.params.profileId
  console.log('profileId', profileId)
  return store.dispatch(fetchSingleProfile(profileId))
}

const onOrganizationEnter = () => {
  return store.dispatch(fetchAllOrganizations())
}
//
// const onOrgsEnter = (nextRouterState) => {
//   console.log('i am entering into the orgs page...')
//   const profileId = nextRouterState.params.profileId
//   console.log('profileId', profileId)
//   return store.dispatch(fetchSingleProfile(profileId))
// }
//




ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={EntryPoint} />
      <Route path="/volunteer-signup" component={VolSignupContainer} />
      <Route path="/volunteer-createProfile" component={VolCreateProfile} />
      <Route path="/organizations" component={OrganizationContainer} onEnter={onOrganizationEnter} />
      <Route path="/allprofiles" component={ProfilesContainer} onEnter={onAllProfilesEnter} />
      <Route path="/profilepage/:profileId" component={SingleProfileContainer} onEnter={onProfileEnter} />

    </Router>
  </Provider>,
  document.getElementById('app')
);
//
// <IndexRedirect to="/"/>

//
// ReactDOM.render(
//   <Provider store={store}>
//     <Router history={browserHistory}>
//       <Route path="/" component={Main}>
//         <IndexRoute component={Login} />
//         <Route path="login" component={Login} />
//         <Route path="signup" component={Signup} />
//         <Route onEnter={requireLogin}>
//           <Route path="home" component={UserHome} />
//         </Route>
//       </Route>
//     </Router>
//   </Provider>,
//   document.getElementById('app')
// );
