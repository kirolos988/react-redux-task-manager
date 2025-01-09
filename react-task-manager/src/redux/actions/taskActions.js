import {
    ADD_TASK,
    EDIT_TASK,
    DELETE_TASK,
    TOGGLE_TASK_COMPLETION,
    FILTER_TASKS,
    LOAD_TASKS,
  } from "./actionTypes";
  
  export const addTask = (task) => ({
    type: ADD_TASK,
    payload: task,
  });
  
  export const editTask = (id, updatedTask) => ({
    type: EDIT_TASK,
    payload: { id, updatedTask },
  });
  
  export const deleteTask = (id) => ({
    type: DELETE_TASK,
    payload: id,
  });
  
  export const toggleTaskCompletion = (id) => ({
    type: TOGGLE_TASK_COMPLETION,
    payload: id,
  });
  
  export const filterTasks = (filterCriteria) => ({
    type: FILTER_TASKS,
    payload: filterCriteria,
  });
  
  export const loadTasks = (tasks) => ({
    type: LOAD_TASKS,
    payload: tasks,
  });
  