import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, toggleTaskCompletion } from "../redux/actions/taskActions";
const Task = ({ task, setEditId }) => {
  const { id, title, priority, completed } = task;
  const dispatch = useDispatch();
  const handleDelete = (id) => dispatch(deleteTask(id));
  const handleToggleCompletion = (id) => dispatch(toggleTaskCompletion(id));

  return (
    <li key={id} class="bullet">
      <p
        style={{
          textDecoration: completed ? "line-through" : "none",
        }}
      >
        - {title} ({priority})
      </p>
      <div>
        <button class="actions" onClick={() => handleToggleCompletion(id)}>
          {completed ? "Undo" : "Complete"}
        </button>
        <button class="actions" onClick={() => setEditId(id)}>
          Edit
        </button>
        <button class="actions" onClick={() => handleDelete(id)}>
          Delete
        </button>
      </div>
    </li>
  );
};
export default Task;
