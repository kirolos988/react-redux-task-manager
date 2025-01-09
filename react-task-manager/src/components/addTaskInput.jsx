import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../redux/actions/taskActions";

function AddTaskInput({ editId, setEditId }) {
  const task = useSelector((state) => state.filteredTasks).find(
    (task) => task.id === editId
  );
  const [taskText, setTaskText] = useState("");
  const [priority, setPriority] = useState("Medium");

  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskText.trim() === "") return;

    const newTask = {
      id: Date.now(),
      title: taskText,
      priority,
      completed: false,
    };

    if (editId) {
      dispatch(editTask(editId, newTask));
      setEditId(null);
    } else {
      dispatch(addTask(newTask));
    }

    setTaskText("");
  };
  return (
    <>
      <input
        type="text"
        value={taskText || task?.title}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Write a task ..."
        className="taskInput"
      />

      <div className="selectContainer">
        <select
          className="select"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <button className="select" onClick={handleAddTask}>
          {editId ? "Edit Task" : "Add Task"}
        </button>
      </div>
    </>
  );
}
export default AddTaskInput;
