import { Provider } from "react-redux";
import { StatusBar } from "react-native";
import UserCard from "./components/UserCard";
import store from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#CABA9C" barStyle="light-content" />
      <UserCard />
    </Provider>
  );
}
