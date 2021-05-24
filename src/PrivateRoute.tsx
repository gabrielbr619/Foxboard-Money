/* eslint-disable */

import React, { PropsWithoutRef, useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./contexts/auth";

export default function PrivateRoute(props: any) {
  const { signed } = useContext(AuthContext);
  const { component: Component, ...rest } = props;
  const auth = localStorage.getItem('user')
  console.log(auth)
  if (auth==="true") {
    return <Route {...rest} render={(props) => <Component {...props} />} />;
  }
  // redirect if there is no user
  return <Redirect to="/login" />;
}
