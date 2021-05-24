import { ReactElement } from "react";
import Card from "./Card";
import { ChartLine, ChartPie } from "./Chart";
import Styles from "./styles.module.scss";

export default function Main(): ReactElement {
  const value = 400;
  let messageH1p1;
  let messageH1p2;
  let messageP;
  if (value > 0) {
    messageH1p1 = "Parabens!";
    messageH1p2 = "Sua carteira está positiva!";
    messageP = "Continue assim. Seus esforços valeram a pena.";
  }

  return (
    <div className={Styles.containerGeral}>
      <div className={Styles.containerTitle}>
        <h1>Dashboard</h1>
        <div className={Styles.underlineTitle} />
      </div>
      <div className={Styles.containerInfo}>
        <div className={Styles.containerCards}>
          <Card title="saldo" color="blue" value={455} />
          <Card title="entradas" color="green" value={3000} />
          <Card title="saídas" color="red" value={2545} />
        </div>

        <div className={Styles.secondRow}>
          <div className={Styles.message}>
            <h1 id={Styles.messageH1}>
              {messageH1p1}
              <br />
              {messageH1p2}
            </h1>
            <p>{messageP}</p>
          </div>
          <div
            className={Styles.message}
            style={{ width: "30.25rem", height: "260px" }}
          >
            <ChartPie />
          </div>
        </div>
        <div
          className={Styles.message}
          style={{ width: "100%", height: "260px" }}
        >
          <ChartLine />
        </div>
      </div>
    </div>
  );
}
