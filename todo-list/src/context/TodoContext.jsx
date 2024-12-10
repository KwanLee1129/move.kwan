import React, { createContext, useContext, useState, useCallback } from "react";
import { message } from "antd";

const TodoContext = createContext(null);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("todos")) || [];
    } catch {
      return [];
    }
  });

  const [filter, setFilter] = useState("all");
  const [searchText, setSearchText] = useState("");

  // localStorage 동기화
  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = useCallback((text, priority, category, dueDate) => {
    if (!text.trim() || !priority || !category || !dueDate) {
      message.error("All fields are required");
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
      priority,
      category,
      dueDate,
    };

    setTodos((prev) => [...prev, newTodo]);
    message.success("Task added successfully");
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
    message.success("Task deleted");
  }, []);

  const priorityOrder = {
    Daily: 3,
    Weekly: 2,
    Monthly: 1,
  };

  const filteredTodos = todos
    .filter((todo) => {
      // 필터링 로직
    })
    .sort((a, b) => {
      // 우선순위 비교
      const priorityDiff =
        priorityOrder[b.priority] - priorityOrder[a.priority];
      if (priorityDiff !== 0) return priorityDiff;

      // 우선순위가 같으면 날짜로 비교
      return new Date(a.dueDate) - new Date(b.dueDate);
    });

  const value = {
    todos,
    filter,
    setFilter,
    searchText,
    setSearchText,
    addTodo,
    toggleTodo,
    deleteTodo,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodoContext must be used within TodoProvider");
  }
  return context;
};
