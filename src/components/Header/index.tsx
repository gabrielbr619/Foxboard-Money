import { ReactElement } from "react";
import Styles from "./styles.module.scss";

export default function Header(): ReactElement {
  return (
    <div className={Styles.header}>
      <div />
      <div className={Styles.profile}>
        <h3>Olá,</h3>
        <p>Gabriel Lara</p>
      </div>
    </div>
  );
}
