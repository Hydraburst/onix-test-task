import React from "react";
import useInput from "../../hooks/use-input";
import styles from "./AddWorkerForm.module.css";
import Modal from "../DropdownModal/Modal";
const AddWorkerForm = (props) => {
  const name = useInput("");
  const surname = useInput("");
  const birthDay = useInput("");
  const salary = useInput("");
  const department = useInput("");
  const gender = useInput("Male");

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      name.value &&
      surname.value &&
      birthDay.value &&
      salary.value &&
      department.value &&
      department.value &&
      gender.value !== ""
    ) {
      enterWorkerHandler({
        name: name.value,
        surname: surname.value,
        birthDay: new Date(birthDay.value),
        salary: salary.value,
        department: department.value,
        gender: gender.value,
      });
    }
    name.onResetInput();
    surname.onResetInput();
    birthDay.onResetInput();
    salary.onResetInput();
    department.onResetInput();
    gender.onResetInput();
  };

  const enterWorkerHandler = async (obj) => {
    try {
      const response = await fetch(
        "https://react-http-175ac-default-rtdb.firebaseio.com/workers.json",
        {
          method: "POST",
          body: JSON.stringify({
            name: obj.name,
            surname: obj.surname,
            birthDay: obj.birthDay.toLocaleDateString(),
            salary: obj.salary,
            department: obj.department,
            gender: obj.gender,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Request failed!");
      }
      const data = await response.json();

      const generatedId = data.name;
      const createdWorker = {
        id: generatedId,
        name: obj.name,
        surname: obj.surname,
        birthDay: obj.birthDay.toLocaleDateString(),
        salary: obj.salary,
        department: obj.department,
        gender: obj.gender,
      };
      console.log(createdWorker);
      props.onAddWorkerHandler(createdWorker);
    } catch (err) {
      return;
    }
  };

  return (
    <Modal onCloseForm={props.onCloseForm}>
      <form onSubmit={submitHandler} className={styles["worker-add__form"]}>
        <div className={styles["workerks-pers__wrap"]}>
          <label htmlFor="">Name</label>
          <div className={styles["worker-pers__info"]}>
            <input
              type="text"
              placeholder="Name"
              id="name"
              value={name.value}
              onChange={(e) => name.onChange(e)}
              onBlur={(e) => name.onBlur(e)}
            />
            <input
              type="text"
              placeholder="Surname"
              value={surname.value}
              onChange={(e) => surname.onChange(e)}
              onBlur={(e) => surname.onBlur(e)}
            />
          </div>
        </div>
        <div className={styles["second-section__wrap"]}>
          <div className={styles["workerks-pers__wrap"]}>
            <label htmlFor="">Gender</label>
            <div className={styles["worker-pers__info"]}>
              <select
                onChange={(e) => gender.onChange(e)}
                name="gender"
                id="gender"
                onBlur={(e) => gender.onBlur(e)}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>
          <div className={styles["workerks-pers__wrap"]}>
            <label htmlFor="">Birthday</label>
            <div className={styles["worker-pers__info"]}>
              <input
                type="date"
                onChange={(e) => birthDay.onChange(e)}
                onBlur={(e) => birthDay.onBlur(e)}
              />
            </div>
          </div>
        </div>
        <div className={styles["workerks-pers__wrap"]}>
          <label htmlFor="">Operational data</label>
          <div className={styles["worker-pers__info"]}>
            <input
              type="number"
              name=""
              id=""
              placeholder="Salary"
              min="300"
              value={salary.value}
              onChange={(e) => salary.onChange(e)}
              onBlur={(e) => salary.onBlur(e)}
            />
            <select
              onChange={(e) => department.onChange(e)}
              name="gender"
              id="gender"
              onBlur={(e) => department.onBlur(e)}
            >
              <option value="Devs">Devs</option>
              <option value="Designers">Designers</option>
              <option value="Hrs">Hrs</option>
            </select>
          </div>
        </div>
        <div className={styles["buttons__wrap"]}>
          <button
            className={styles["add__btn"]}
            type="sumbit"
            onClick={props.onCloseForm}
          >
            Add
          </button>
          <button className={styles["close__btn"]} onClick={props.onCloseForm}>
            Close
          </button>
        </div>
      </form>
    </Modal>
  );
};
export default AddWorkerForm;
