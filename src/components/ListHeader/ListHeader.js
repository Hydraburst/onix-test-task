import React from "react";
import styles from "./ListHeader.module.css";

export const ListHeader = () => {
  return (
    <div className={styles["list-header__wrap"]}>
      <div>Name</div>
      <div>Surname</div>
      <div>Gender</div>
      <div>Birthday</div>
      <div>Salary</div>
      <div>Department</div>
    </div>
  );
};
