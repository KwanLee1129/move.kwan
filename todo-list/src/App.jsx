import { useState, useEffect } from "react";
import TodoInput from "./components/todo/TodoInput";
import TodoList from "./components/todo/TodoList";
import Alert from "./components/common/Alert";
import "./App.css";

function App() {
  // Load initial data from localStorage
  // 로컬 스토리지에서 초기 데이터 로드
  const [todos, setTodos] = useState(() => {
    try {
      const saved = localStorage.getItem("todos");
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error("Failed to load todos:", error);
      return [];
    }
  });

  // Alert state for user feedback
  // 사용자 피드백을 위한 알림 상태
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    type: "",
  });

  // Update localStorage when todos change
  // todos가 변경될 때 로컬 스토리지 업데이트
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Add new todo
  // 새로운 할 일 추가
  const handleAddTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTodos((prev) => [...prev, newTodo]);

    // Show success feedback
    // 성공 피드백 표시
    setAlert({
      show: true,
      message: "Task added successfully",
      type: "success",
    });

    // Hide alert after 3 seconds
    // 3초 후 알림 숨김
    setTimeout(() => {
      setAlert((prev) => ({ ...prev, show: false }));
    }, 3000);
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      {alert.show && (
        <Alert {...alert} onClose={() => setAlert({ ...alert, show: false })} />
      )}
      <TodoInput onAdd={handleAddTodo} />
      <TodoList
        todos={todos}
        onToggle={(id) => {
          /* Toggle logic */
        }}
        onUpdate={(id, text) => {
          /* Update logic */
        }}
        onDelete={(id) => {
          /* Delete logic */
        }}
      />
    </div>
  );
}

export default App;
