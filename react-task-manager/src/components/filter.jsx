import { useDispatch } from "react-redux";
import { filterTasks } from "../redux/actions/taskActions";

function Filter() {
  const dispatch = useDispatch();

  const handleFilter = (priority) => dispatch(filterTasks({ priority }));

  return (
    <div className="filterContainer">
      <h3 className="title">Filter By:</h3>
      <button className="select" onClick={() => handleFilter(null)}>
        None
      </button>
      <button className="select" onClick={() => handleFilter("High")}>
        High Priority
      </button>
      <button className="select" onClick={() => handleFilter("Medium")}>
        Medium Priority
      </button>
      <button className="select" onClick={() => handleFilter("Low")}>
        Low Priority
      </button>
    </div>
  );
}
export default Filter;
