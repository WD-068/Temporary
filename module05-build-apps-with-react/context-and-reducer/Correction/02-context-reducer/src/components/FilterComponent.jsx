import { useContext } from "react";
import { TodosContext } from "../context/TodosProvider";

const FilterComponent = () => {
  const { dispatch, state } = useContext(TodosContext);

  return (
    <div className="mb-4 flex space-x-2">
      {["all", "active", "completed"].map((filter, i) => (
        <button
          key={i}
          onClick={() => dispatch({ type: "SET_FILTER", payload: filter })}
          className={`bg-gray-200 px-3 py-1 rounded capitalize ${
            state.filter === filter ? "bg-gray-400" : ""
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterComponent;
