import { legacy_createStore as createStore } from "redux";
import taskReducer from "./reducers/taskReducer";

const store = createStore(
  taskReducer,
  {
    tasks: JSON.parse(localStorage.getItem("tasks")) || [],
    filteredTasks: JSON.parse(localStorage.getItem("tasks")) || [],
  }
);

store.subscribe(() => {
  localStorage.setItem("tasks", JSON.stringify(store.getState().tasks));
});

export default store;
