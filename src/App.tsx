/* eslint-disable react/jsx-props-no-spreading */
import { ReactElement } from "react";
import { Switch } from "react-router-dom";
import UserAccount from "./pages/UserAccount";
import "./global.scss";
import { AuthProvider } from "./contexts/auth";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./pages/Dashboard";

function App(): ReactElement {
  return (
    <div>
      <Switch>
        <AuthProvider>
          <UserAccount />
          <PrivateRoute exact path="/" component={Dashboard} />
        </AuthProvider>
      </Switch>
    </div>
  );
}

export default App;
