import { Redirect, Route, useLocation } from 'react-router';
import { useStateValue } from '../StateProvider';
import React from 'react';

function PrivateRoute({ component: Component, ...rest }) {
  const [{ user }] = useStateValue();
  const location = useLocation();
  const SignupURL = '/login';

  return (
    <Route
      {...rest}
      render={(props) => {
        return user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: SignupURL,
              state: { redirectOrigin: location.pathname },
            }}
          />
        );
      }}
    />
  );
}

export default PrivateRoute;
