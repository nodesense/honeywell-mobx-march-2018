import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {inject, observer} from "mobx-react";

import PropTypes from "prop-types";

//AuthRoute allows user to load component 
//ONLY if the user is authenticated
//else redirect user to login page

const AuthRoute = ({ component, exact = false, path, authState }) => (
  <Route
    exact={exact}
    path={path}
    render={props => (
        authState.authenticated ? (
        React.createElement(component, props)
      ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }}/>
      )
    )}
  />
);
 
AuthRoute.propTypes = {
  component: PropTypes.func.isRequired,
  exact: PropTypes.bool,
  path: PropTypes.string.isRequired,
  authState: PropTypes.object.isRequired,
  location: PropTypes.object
};

export default  inject("authState") (observer(AuthRoute));
