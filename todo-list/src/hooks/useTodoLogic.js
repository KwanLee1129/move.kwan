import { useState, useCallback } from "react";

const useTodoLogic = () => {
  const [todos, setTodos] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

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

  const getFilteredTodos = useCallback(() => {
    return todos.filter((todo) => {
      const matchesFilter =
        activeFilter === "all" ||
        (activeFilter === "active" && !todo.completed) ||
        (activeFilter === "completed" && todo.completed);

      const matchesSearch = todo.text
        .toLowerCase()
        .includes(searchKeyword.toLowerCase());

      return matchesFilter && matchesSearch;
    });
  }, [todos, activeFilter, searchKeyword]);

  return {
    todos,
    searchKeyword,
    setSearchKeyword,
    activeFilter,
    setActiveFilter,
    addTodo,
    toggleTodo,
    updateTodo,
    deleteTodo,
    getFilteredTodos,
  };
};

export default useTodoLogic;
