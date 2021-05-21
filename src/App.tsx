import { ReactElement } from "react";
import UserAccount from "./pages/UserAccount";
import "./global.scss";

function App(): ReactElement {
  return (
    <div>
      <UserAccount />
    </div>
  );
}

export default App;
