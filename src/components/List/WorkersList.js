import { Worker } from "../Worker/Worker";
import { ListHeader } from "../ListHeader/ListHeader";
import { Tabs } from "../Tabs/Tabs";
import styles from "./WorkersList.module.css";

const WorkersList = (props) => {
  let listContent;

  let estimates;

  let totalSalaries = props.list.reduce((total, worker) => {
    return Math.round((total + parseInt(worker.salary)) / props.list.length);
  }, 0);

  if (props.onIndexTabClicked === "All") {
    let filtredList = props.list.filter((worker) =>
      !props.searchText
        ? props.list
        : worker.name.toLowerCase().includes(props.searchText)
    );
    let totalAmount = props.list.length;
    estimates = (
      <div className={styles.estimates}>
        <div>{`Average salary: ${totalSalaries}$`}</div>
        <div>{`Quantity: ${totalAmount}`}</div>
      </div>
    );
    listContent = (
      <>
        {filtredList.map((worker) => (
          <li key={worker.id}>
            <Worker
              name={worker.name}
              surname={worker.surname}
              gender={worker.gender}
              birthday={worker.birthDay}
              salary={worker.salary}
              department={worker.department}
            />
          </li>
        ))}
        <>{totalAmount && totalSalaries > 0 ? estimates : <p>No info!</p>}</>
      </>
    );
  } else {
    let filtredList = props.list.filter((worker) =>
      !props.searchText
        ? worker.department === props.onIndexTabClicked
        : worker.department === props.onIndexTabClicked &&
          worker.name.toLowerCase().includes(props.searchText)
    );
    let totalAmount = filtredList.length;
    let totalSalaries = filtredList.reduce((total, worker) => {
      return Math.round((total + parseInt(worker.salary)) / filtredList.length);
    }, 0);
    estimates = (
      <div className={styles.estimates}>
        <div>{`Average salary: ${totalSalaries}$`}</div>
        <div>{`Quantity: ${totalAmount}`}</div>
      </div>
    );

    listContent = (
      <>
        {filtredList.map((worker) => (
          <li key={worker.id}>
            <Worker
              name={worker.name}
              surname={worker.surname}
              gender={worker.gender}
              birthday={worker.birthDay}
              salary={worker.salary}
              department={worker.department}
            />
          </li>
        ))}
        <>{totalAmount && totalSalaries > 0 ? estimates : <p>No info!</p>}</>
      </>
    );
  }

  return (
    <div className={styles["list__wrap"]}>
      <div className={styles["content-wrap"]}>
        <Tabs
          onIndexTabClicked={props.onIndexTabClicked}
          onTabClickHander={props.onTabClickHander}
        />

        <ListHeader />
        {listContent.props.children.length === 0 ? (
          <p>No workers found!</p>
        ) : (
          listContent
        )}
      </div>
    </div>
  );
};

export default WorkersList;
