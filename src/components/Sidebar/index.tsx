import React, { ReactElement, useContext } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import foxIcon from "@iconify/icons-twemoji/fox";
import Styles from "./styles.module.scss";
import { AuthContext } from "../../contexts/auth";

export default function Sidebar(): ReactElement {
  const auth = useContext(AuthContext);
  return (
    <div className={Styles.sidebar}>
      <div className={Styles.containerLogo}>
        <Icon
          icon={foxIcon}
          style={{ fontSize: "4.375rem" }}
          className={Styles.foxIcon}
        />
        <h1>Foxboard Money</h1>
      </div>
      <div className={Styles.navContainer}>
        <NavLink
          exact
          to="/"
          className={Styles.Link}
          activeStyle={{ background: "#0A3364" }}
        >
          <div className={Styles.LinkDiv}>
            <h3>Dashboard</h3>
          </div>
        </NavLink>

        <NavLink
          to="/registry/create"
          className={Styles.Link}
          activeStyle={{ background: "#0A3364" }}
        >
          <div className={Styles.LinkDiv}>
            <h3>Novo registro</h3>
          </div>
        </NavLink>

        <NavLink
          to="/input"
          className={Styles.Link}
          activeStyle={{ background: "#0A3364" }}
        >
          <div className={Styles.LinkDiv}>
            <h3>Entradas</h3>
          </div>
        </NavLink>

        <NavLink
          to="/output"
          className={Styles.Link}
          activeStyle={{ background: "#0A3364" }}
        >
          <div className={Styles.LinkDiv}>
            <h3>Saídas</h3>
          </div>
        </NavLink>
        <NavLink
          to="/login"
          className={Styles.Link}
          activeStyle={{ background: "#0A3364" }}
          onClick={() => {
            auth.Login("", "");
          }}
        >
          <div className={Styles.LinkDiv}>
            <h3>Logout</h3>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
