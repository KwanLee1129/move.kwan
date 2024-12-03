import { createContext, useContext } from "react";
import useTodoLogic from "../hooks/useTodoLogic";

// Create Todo Context
// Todo Context 생성
const TodoContext = createContext(null);

// Todo Provider component
// Todo Provider 컴포넌트
export const TodoProvider = ({ children }) => {
  const todoLogic = useTodoLogic();

  return (
    <TodoContext.Provider value={todoLogic}>{children}</TodoContext.Provider>
  );
};

// Custom hook to use todo context
// todo context를 사용하기 위한 커스텀 훅
export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
};

export default TodoContext;
