// Component: PrivateRoute 
// Description: This component is used to protect routes that require a user to be logged in. If the user is not logged in, they will be redirected to the login page.
// We are using this is redirect venue owners to the the venue owner dashboard
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem('token')) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
