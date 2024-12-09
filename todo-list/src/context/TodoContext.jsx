import React, { createContext, useContext, useState, useCallback } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchKeyword, setSearchKeyword] = useState("");

  const addTodo = useCallback((text) => {
    const newTodo = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
      timestamp: new Date().toISOString(),
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

  const updateTodo = useCallback((id, text) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, text: text.trim() } : todo
      )
    );
  }, []);

  const deleteTodo = useCallback((id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  const getFilterCounts = useCallback(() => {
    return {
      all: todos.length,
      active: todos.filter((todo) => !todo.completed).length,
      completed: todos.filter((todo) => todo.completed).length,
    };
  }, [todos]);

  const filteredTodos = todos.filter((todo) => {
    const matchesFilter =
      activeFilter === "all" ||
      (activeFilter === "active" && !todo.completed) ||
      (activeFilter === "completed" && todo.completed);

    const matchesSearch = todo.text
      .toLowerCase()
      .includes(searchKeyword.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const value = {
    todos,
    filteredTodos,
    activeFilter,
    setActiveFilter,
    searchKeyword,
    setSearchKeyword,
    addTodo,
    toggleTodo,
    updateTodo,
    deleteTodo,
    getFilterCounts,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodoContext must be used within a TodoProvider");
  }
  return context;
};
