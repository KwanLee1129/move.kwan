// Main application component
// 메인 애플리케이션 컴포넌트
import { useState, useEffect } from "react";
import TodoInput from "./components/todo/TodoInput";
import TodoList from "./components/todo/TodoList";
import Alert from "./components/common/Alert";
import "./App.css";

function App() {
  // Initialize todos from localStorage
  // localStorage에서 todos 초기화
  const [todos, setTodos] = useState(() => {
    try {
      const saved = localStorage.getItem("todos");
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error("Failed to load todos:", error);
      return [];
    }
  });

  // Alert state for feedback
  // 피드백을 위한 알림 상태
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });

  // Persist todos to localStorage
  // localStorage에 todos 유지
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Add new todo
  // 새 할 일 추가
  const handleAddTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTodos((prev) => [...prev, newTodo]);
    showAlert("Task added successfully", "success");
  };

  // Toggle todo completion
  // 할 일 완료 상태 토글
  const handleToggle = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Update todo text
  // 할 일 텍스트 업데이트
  const handleUpdate = (id, newText) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
    showAlert("Task updated successfully", "success");
  };

  // Delete todo
  // 할 일 삭제
  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
    showAlert("Task deleted successfully", "success");
  };

  // Show alert message
  // 알림 메시지 표시
  const showAlert = (message, type = "success") => {
    setAlert({ show: true, message, type });
    setTimeout(() => {
      setAlert({ show: false, message: "", type: "" });
    }, 3000);
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      {alert.show && (
        <Alert {...alert} onClose={() => setAlert({ show: false })} />
      )}
      <TodoInput onAdd={handleAddTodo} />
      <TodoList
        todos={todos}
        onToggle={handleToggle}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
