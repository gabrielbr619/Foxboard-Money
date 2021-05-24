import { ReactElement } from "react";
import Styles from "./styles.module.scss";

interface Icard {
  title: string;
  color: "green" | "red" | "blue";
  value: number;
}

export default function Card(props: Icard): ReactElement {
  const { title, color, value } = props;
  let CardColor;
  if (color === "green") {
    CardColor = "#30BB3E";
  } else if (color === "red") {
    CardColor = "#C43535";
  } else {
    CardColor = "#C47335";
  }
  const valueLocale = value.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div style={{ background: CardColor }} className={Styles.cardContainer}>
      <p className={Styles.title}>{title}</p>
      <h3>R$ {valueLocale}</h3>
    </div>
  );
}
