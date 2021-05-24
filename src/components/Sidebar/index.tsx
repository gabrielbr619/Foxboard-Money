import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import foxIcon from "@iconify/icons-twemoji/fox";
import Styles from "./styles.module.scss";

export default function Sidebar(): ReactElement {
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
      <div>
        <Link to="/" />
        <Link to="/registry/create" />
        <Link to="/input" />
        <Link to="/output" />
        <Link to="/login" />
      </div>
    </div>
  );
}
