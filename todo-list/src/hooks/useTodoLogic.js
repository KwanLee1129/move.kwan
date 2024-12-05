import { useState, useEffect } from "react";

const useTodoLogic = () => {
  const [todos, setTodos] = useState(() => {
    try {
      const saved = localStorage.getItem("todos");
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error("Error loading todos:", error);
      return [];
    }
  });

  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem("todos", JSON.stringify(todos));
    } catch (err) {
      setError("Failed to save todos");
      console.error("Save error:", err);
    }
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTodos((prev) => [...prev, newTodo]);
    return newTodo;
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const updateTodo = (id, text) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return {
    todos,
    error,
    addTodo,
    toggleTodo,
    updateTodo,
    deleteTodo,
  };
};

export default useTodoLogic;
