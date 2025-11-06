import { createContext, useReducer, useEffect } from "react";

export const TodosContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return {
        ...state,
        todos: [
          { id: Date.now(), text: action.payload, completed: false },
          ...state.todos,
        ],
      };
    }
    case "TOGGLE_TODO": {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    }
    case "SET_FILTER": {
      return {
        ...state,
        filter: action.payload,
      };
    }
    default:
      return state;
  }
};

const getTodosFromLocalStorage = (initialState) => {
  try {
    const todos = localStorage.getItem("todoState");
    return todos ? JSON.parse(todos) : initialState;
  } catch (error) {
    console.error("Could not parse local storage:", error);
    return initialState;
  }
};

const TodosProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    reducer,
    { filter: "all", todos: [] },
    getTodosFromLocalStorage
  );

  useEffect(() => {
    try {
      localStorage.setItem("todoState", JSON.stringify(state));
    } catch (error) {
      console.error("Could not save to local storage:", error);
    }
  }, [state]);

  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosProvider;
