import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const fetchData = () => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_DATA_REQUEST" });
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      await AsyncStorage.setItem("fetchedData", JSON.stringify(response.data));
      dispatch({ type: "FETCH_DATA_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "FETCH_DATA_FAILURE", error: error.message });
    }
  };
};
