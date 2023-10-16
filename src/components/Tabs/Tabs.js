import { Tab } from "./Tab";
import styles from "./Tabs.module.css";

export const Tabs = (props) => {
  return (
    <div className={styles["tabs__wrap"]}>
      <Tab
        onClick={(e) => {
          props.onTabClickHander(e);
        }}
        text={"All"}
        id="All"
        className={`${props.onIndexTabClicked === "All" ? styles.active : ""} ${
          styles["tab-item"]
        }`}
      />
      <Tab
        onClick={(e) => {
          props.onTabClickHander(e);
        }}
        text={"Human res"}
        id="Hrs"
        className={`${props.onIndexTabClicked === "Hrs" ? styles.active : ""} ${
          styles["tab-item"]
        }`}
      />
      <Tab
        t
        onClick={(e) => {
          props.onTabClickHander(e);
        }}
        text={"Designers"}
        id="Designers"
        className={`${
          props.onIndexTabClicked === "Designers" ? styles.active : ""
        } ${styles["tab-item"]}`}
      />
      <Tab
        onClick={(e) => {
          props.onTabClickHander(e);
        }}
        text={"Developers"}
        id="Developers"
        className={`${
          props.onIndexTabClicked === "Developers" ? styles.active : ""
        } ${styles["tab-item"]}`}
      />
    </div>
  );
};
