import { ReactElement } from "react";
import { Switch, Route } from "react-router-dom";
import Main from "../components/Content/Main";
import Output from "../components/Content/Output";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Dashboard(): ReactElement {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ display: "flex", flexDirection: "column", width: "86%" }}>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/output" component={Output} />
        </Switch>
      </div>
    </div>
  );
}
