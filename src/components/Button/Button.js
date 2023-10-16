import React from "react";
import styles from "./Button.module.css";

export const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`${props.className} ${styles.button}`}
    >
      {props.text}
    </button>
  );
};
