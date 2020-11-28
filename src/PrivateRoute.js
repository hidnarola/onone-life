import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({ children, ...rest }) {
  const token = localStorage.getItem("AUTHTOKEN");
  console.log("token: ", rest);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
