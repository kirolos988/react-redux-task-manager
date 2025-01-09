const initialState = {
  items: [],
  loading: false,
  error: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_REQUEST":
      return { ...state, loading: true, error: null };
    case "LOAD_STORED_DATA_REQUEST":
      return { ...state, loading: true, error: null };
    case "FETCH_DATA_SUCCESS":
      return { ...state, loading: false, items: action.payload };
    case "LOAD_STORED_DATA_SUCCESS":
      return { ...state, loading: false, items: action.payload };
    case "FETCH_DATA_FAILURE":
      return { ...state, loading: false, error: action.error };
    case "LOAD_STORED_DATA_FAILURE":
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default dataReducer;
