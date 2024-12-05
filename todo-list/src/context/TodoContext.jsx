import { createContext, useContext } from "react";
import useTodoLogic from "../hooks/useTodoLogic";

const TodoContext = createContext(null);

export const TodoProvider = ({ children }) => {
  const todoLogic = useTodoLogic();

  return (
    <TodoContext.Provider value={todoLogic}>{children}</TodoContext.Provider>
  );
};

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
};

export default TodoContext;
