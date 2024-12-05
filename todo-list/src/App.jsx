import { useState, useEffect } from "react";
import TodoInput from "./components/todo/TodoInput";
import TodoList from "./components/todo/TodoList";
import Alert from "./components/common/Alert";
import "./App.css";

function App() {
  // Initialize todos from localStorage
  const [todos, setTodos] = useState(() => {
    try {
      const saved = localStorage.getItem("todos");
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error("Failed to load todos:", error);
      return [];
    }
  });

  const [alert, setAlert] = useState({ show: false, message: "", type: "" });

  // Save todos to localStorage when they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTodos((prev) => [...prev, newTodo]);
    setAlert({
      show: true,
      message: "Task added successfully",
      type: "success",
    });
    setTimeout(() => setAlert({ show: false, message: "", type: "" }), 3000);
  };

  const handleToggle = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleUpdate = (id, newText) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
    setAlert({
      show: true,
      message: "Task updated successfully",
      type: "success",
    });
    setTimeout(() => setAlert({ show: false, message: "", type: "" }), 3000);
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
    setAlert({
      show: true,
      message: "Task deleted successfully",
      type: "success",
    });
    setTimeout(() => setAlert({ show: false, message: "", type: "" }), 3000);
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
