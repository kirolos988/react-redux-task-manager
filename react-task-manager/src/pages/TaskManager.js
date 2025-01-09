import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./TaskManager.css";
import Task from "../components/task";
import Filter from "../components/filter";
import AddTaskInput from "../components/addTaskInput";

const TaskManager = () => {
  const tasks = useSelector((state) => state.filteredTasks);

  const [editId, setEditId] = useState(null);

  return (
    <div class="container">
      <h1 className="title">Task Manager</h1>
      <AddTaskInput editId={editId} setEditId={setEditId} />
      <div className="line" />

      <Filter />

      {tasks.length !== 0 && (
        <ul class="list">
          {tasks.map((task) => (
            <Task task={task} setEditId={setEditId} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskManager;
