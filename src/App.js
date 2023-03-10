import { useState } from "react";

import UpdateForm from "./components/UpdateForm";
import AddTaskFrom from "./components/AddTaskFrom";
import ToDo from "./components/ToDo";
import "./App.css";
import Footer from "./components/footer";
function App() {
  const [toDo, setToDo] = useState([]);

  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntery = { id: num, title: newTask, status: false };
      setToDo([...toDo, newEntery]);
      setNewTask("");
    }
  };

  const deleteTask = (id) => {
    let newTasks = toDo.filter((task) => task.id !== id);
    setToDo(newTasks);
  };

  const markDone = (id) => {
    let newTask = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setToDo(newTask);
  };

  const cancelUpdate = () => {
    setUpdateData("");
  };

  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpdateData(newEntry);
  };

  const updateTask = () => {
    let filterRecords = [...toDo].filter((task) => task.id !== updateData.id);
    let updatedOject = [...filterRecords, updateData];
    setToDo(updatedOject);
    setUpdateData("");
  };

  return (
    <>
      <div className="container App">
        <br />
        <br />
        <h2>To Do List App(ReactJS)</h2>
        <br />
        <br />

        {updateData && updateData ? (
          <>
            <UpdateForm
              updateData={updateData}
              updateTask={updateTask}
              cancelUpdate={cancelUpdate}
              changeTask={changeTask}
            />
          </>
        ) : (
          <>
            <AddTaskFrom
              newTask={newTask}
              setNewTask={setNewTask}
              addTask={addTask}
            />
          </>
        )}

        {toDo && toDo.length ? "" : "No tasks"}
        <ToDo
          toDo={toDo}
          markDone={markDone}
          deleteTask={deleteTask}
          setUpdateData={setUpdateData}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
