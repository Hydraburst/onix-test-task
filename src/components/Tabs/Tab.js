import React from "react";
import styles from "./Tab.module.css";

export const Tab = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={`${props.className} ${styles["tab__wrap"]}`}
      id={props.id}
    >
      {props.text}
    </div>
  );
};
