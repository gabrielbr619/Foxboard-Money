import { ReactElement } from "react";
import { Icon } from "@iconify/react";
import foxIcon from "@iconify/icons-twemoji/fox";
import bxsUser from "@iconify/icons-bx/bxs-user";
import bxEnvelope from "@iconify/icons-bx/bx-envelope";
import bxLockAlt from "@iconify/icons-bx/bx-lock-alt";
import { Link } from "react-router-dom";
import "../../pages/UserAccount.scss";

export default function Register(): ReactElement {
  return (
    <div className="container-geral">
      <div className="container-logo">
        <Icon icon={foxIcon} style={{ fontSize: "4.375rem" }} />
        <h1>Foxboard Money</h1>
      </div>
      <div className="container-form">
        <div className="container-title">
          <h1 className="title">Cadastrar</h1>
          <div className="underline-title" />
        </div>

        <form>
          <div className="input-icons">
            <Icon icon={bxsUser} className="icon" />
            <input type="text" id="name" placeholder="seu nome" />
          </div>

          <div className="input-icons">
            <Icon icon={bxEnvelope} className="icon" />
            <input type="email" id="email" placeholder="seu email" />
          </div>

          <div className="input-icons">
            <Icon icon={bxLockAlt} className="icon" />
            <input type="password" id="password" placeholder="sua senha" />
          </div>
          <div className="input-icons">
            <Icon icon={bxLockAlt} className="icon" />
            <input
              type="password"
              id="confirm-password"
              placeholder="confirme sua senha"
            />
          </div>
          <button type="submit">Cadastrar</button>
        </form>
      </div>
      <Link to="/login" className="Link">
        já tenho uma conta!
      </Link>
    </div>
  );
}
