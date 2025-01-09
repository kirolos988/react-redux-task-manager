import { Provider } from "react-redux";
import "./App.css";
import TaskManager from "./pages/TaskManager";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <TaskManager />
    </Provider>
  );
}

export default App;
