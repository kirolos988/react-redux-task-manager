import AsyncStorage from "@react-native-async-storage/async-storage";

export const loadStoredData = () => {
  return async (dispatch) => {
    dispatch({ type: "LOAD_STORED_DATA_REQUEST" });

    try {
      const storedData = await AsyncStorage.getItem("fetchedData");
      const parsedData = storedData ? JSON.parse(storedData) : [];

      dispatch({ type: "LOAD_STORED_DATA_SUCCESS", payload: parsedData });
    } catch (error) {
      dispatch({ type: "LOAD_STORED_DATA_FAILURE", error: error.message });
    }
  };
};
