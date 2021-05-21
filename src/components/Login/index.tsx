import { ReactElement } from "react";
import { Icon } from "@iconify/react";
import foxIcon from "@iconify/icons-twemoji/fox";
import bxsUser from "@iconify/icons-bx/bxs-user";
import bxEnvelope from "@iconify/icons-bx/bx-envelope";
import bxLockAlt from "@iconify/icons-bx/bx-lock-alt";
import { Link } from "react-router-dom";
import "../../pages/UserAccount.scss";

export default function Login(): ReactElement {
  return (
    <div className="container-geral">
      <div className="container-logo">
        <Icon icon={foxIcon} style={{ fontSize: "4.375rem" }} />
        <h1>Foxboard Money</h1>
      </div>
      <div className="container-form" style={{ height: "25rem" }}>
        <div className="container-title">
          <h1 className="title">Login</h1>
          <div className="underline-title" />
        </div>

        <form>
          <div className="input-icons">
            <Icon icon={bxEnvelope} className="icon" />
            <input type="email" id="email" placeholder="seu email" />
          </div>

          <div className="input-icons">
            <Icon icon={bxLockAlt} className="icon" />
            <input type="password" id="password" placeholder="sua senha" />
          </div>

          <button type="submit">Entrar</button>
        </form>
      </div>
      <Link to="/register" className="Link">
        criar uma conta!
      </Link>
    </div>
  );
}
