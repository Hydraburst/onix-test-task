import React from "react";
import styles from "./Header.module.css";
import { Search } from "../SearchField/Search";

export const Header = (props) => {
  return (
    <div className={styles["header__wrap"]}>
      <div className={styles["header-content__wrap"]}>
        <Search
          onChange={props.onChange}
          onClick = {props.onClick}
          value={props.value}
          clear={props.clear}
        />
      </div>
    </div>
  );
};
