import { useState, useEffect } from "react";
import WorkersList from "./components/List/WorkersList";
import AddWorkerForm from "./components/Form/AddWorkerForm";
import { Header } from "./components/Header/Header";

const App = () => {
  const [workers, setWorkers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [tabIndexClicked, setTabIndexClicked] = useState("All");
  const [userSearchInput, setUserSearchInput] = useState("");

  const handleSearchChange = (e) => {
    setUserSearchInput(e.target.value);
  };

  const clearSearchInput = () => {
    setUserSearchInput("");
  };

  const tabClickHandler = (e) => {
    setTabIndexClicked(e.target.id);
  };

  const clickHandler = () => {
    setShowForm((prevState) => !prevState);
    console.log("clicked!");
  };

  const setFormClose = () => {
    setShowForm(false);
  };

  const fetchWorkers = async () => {
    const response = await fetch(
      "https://react-http-175ac-default-rtdb.firebaseio.com/workers.json"
    );
    if (!response.ok) {
      throw new Error("Request failed");
    }
    const data = await response.json();
    const loadedWorkers = [];
    for (const workerKey in data) {
      loadedWorkers.push({
        id: workerKey,
        name: data[workerKey].name,
        surname: data[workerKey].surname,
        birthDay: data[workerKey].birthDay,
        salary: data[workerKey].salary,
        department: data[workerKey].department,
        gender: data[workerKey].gender,
      });
    }
    setWorkers(loadedWorkers);
  };
  useEffect(() => {
    fetchWorkers();
  }, []);

  return (
    <>
      <Header
        onClick={clickHandler}
        onChange={handleSearchChange}
        clear={clearSearchInput}
        value={userSearchInput}
      />
      {showForm && <AddWorkerForm onCloseForm={setFormClose} />}
      <WorkersList
        list={workers}
        onIndexTabClicked={tabIndexClicked}
        onTabClickHander={tabClickHandler}
        searchText={userSearchInput}
      />
    </>
  );
};

export default App;
