import {
    ADD_TASK,
    EDIT_TASK,
    DELETE_TASK,
    TOGGLE_TASK_COMPLETION,
    FILTER_TASKS,
    LOAD_TASKS,
  } from "../actions/actionTypes";
  
  const initialState = {
    tasks: [],
    filteredTasks: [],
    filterCriteria: null,
  };
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOAD_TASKS:
        return {
          ...state,
          tasks: action.payload,
          filteredTasks: action.payload,
        };
      case ADD_TASK:
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
          filteredTasks: [...state.filteredTasks, action.payload],
        };
      case EDIT_TASK:
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload.id ? action.payload.updatedTask : task
          ),
          filteredTasks: state.filteredTasks.map((task) =>
            task.id === action.payload.id ? action.payload.updatedTask : task
          ),
        };
      case DELETE_TASK:
        return {
          ...state,
          tasks: state.tasks.filter((task) => task.id !== action.payload),
          filteredTasks: state.filteredTasks.filter(
            (task) => task.id !== action.payload
          ),
        };
      case TOGGLE_TASK_COMPLETION:
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload
              ? { ...task, completed: !task.completed }
              : task
          ),
          filteredTasks: state.filteredTasks.map((task) =>
            task.id === action.payload
              ? { ...task, completed: !task.completed }
              : task
          ),
        };
      case FILTER_TASKS:
        return {
          ...state,
          filterCriteria: action.payload,
          filteredTasks: state.tasks.filter((task) =>
            action.payload.priority
              ? task.priority === action.payload.priority
              : true
          ),
        };
      default:
        return state;
    }
  };
  
  export default taskReducer;
  