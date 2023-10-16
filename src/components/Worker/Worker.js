import React from "react";
import styles from "./Worker.module.css";
export const Worker = (props) => {
  return (
    <div className={styles["item-worker__wrap"]}>
      <div> {props.name}</div>
      <div>{props.surname}</div>
      <div>{props.gender}</div>
      <div>{props.birthday}</div>
      <div>{props.salary}$</div>
      <div>{props.department}</div>
    </div>
  );
};
