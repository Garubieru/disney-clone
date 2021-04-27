import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import PropTypes from "prop-types";
import { selectUserName } from "../features/user/userSlice";

export default function PrivateRoute({ component, isClosed, ...rest }) {
  const username = useSelector(selectUserName);

  if (!username && isClosed) {
    return (
      <Redirect
        to={{
          pathname: "/",
        }}
      />
    );
  }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} component={component} />;
}

PrivateRoute.defaultProps = {
  isClosed: false,
};

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isClosed: PropTypes.bool,
};
