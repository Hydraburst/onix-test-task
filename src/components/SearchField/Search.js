import styles from "./Search.module.css";
import { Button } from "../Button/Button";

export const Search = (props) => {
  return (
    <>
      <div className={styles["search-field__wrap"]}>
        <div className={styles["search-text__wrap"]}>
          <input
            type="text"
            onChange={props.onChange}
            value={props.value}
            placeholder="Search..."
          />
          <Button
            className={styles["search-text__clear"]}
            onClick={props.clear}
            text="Clear"
          />
          <Button
            className={styles["btn-add"]}
            text="Add worker"
            onClick={props.onClick}
          />
        </div>
      </div>
    </>
  );
};
