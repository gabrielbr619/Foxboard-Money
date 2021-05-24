/* eslint-disable no-restricted-globals */
import { ReactElement, useContext, useState } from "react";
import { Icon } from "@iconify/react";
import foxIcon from "@iconify/icons-twemoji/fox";
import bxEnvelope from "@iconify/icons-bx/bx-envelope";
import bxLockAlt from "@iconify/icons-bx/bx-lock-alt";
import { Link, Redirect, useHistory } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import "../../pages/UserAccount.scss";

export default function Login(): ReactElement {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const auth = useContext(AuthContext);

  function handleLogin(e: React.FormEvent): void {
    e.preventDefault();
    auth.Login(email, password);
    setEmail("");
    setPassword("");
    if (localStorage.getItem("user") === "true") {
      history.push("/");
    }
  }

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

        <form onSubmit={(e) => handleLogin(e)}>
          <div className="input-icons">
            <Icon icon={bxEnvelope} className="icon" />
            <input
              type="email"
              id="email"
              placeholder="seu email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div className="input-icons">
            <Icon icon={bxLockAlt} className="icon" />
            <input
              type="password"
              id="password"
              placeholder="sua senha"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
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
