import { useState, useCallback } from "react";

const useTodoLogic = () => {
  const [todos, setTodos] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("todos")) || [];
    } catch {
      return [];
    }
  });

  const [filter, setFilter] = useState("all");
  const [searchText, setSearchText] = useState("");

  const addTodo = useCallback((text, priority, category, dueDate) => {
    const newTodo = {
      id: Date.now(),
      text: text.trim(),
      priority,
      category,
      dueDate,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTodos((prev) => [...prev, newTodo]);
  }, []);

  const toggleTodo = useCallback((id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const deleteTodo = useCallback((id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  const getFilteredTodos = useCallback(() => {
    return todos
      .filter((todo) => {
        if (searchText) {
          const searchLower = searchText.toLowerCase();
          if (!todo.text.toLowerCase().includes(searchLower)) {
            return false;
          }
        }

        if (filter === "active") return !todo.completed;
        if (filter === "completed") return todo.completed;
        return true;
      })
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }, [todos, filter, searchText]);

  return {
    todos,
    filter,
    setFilter,
    searchText,
    setSearchText,
    addTodo,
    toggleTodo,
    deleteTodo,
    getFilteredTodos,
  };
};

export default useTodoLogic;
