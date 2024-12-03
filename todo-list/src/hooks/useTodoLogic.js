import { useState, useEffect } from "react";
import { getTodos, saveTodos } from "../utils/localStorage";

// Custom hook for managing todo business logic
// Todo 비즈니스 로직 관리를 위한 커스텀 훅
const useTodoLogic = () => {
  // Initialize todos from localStorage
  // localStorage에서 todos 초기화
  const [todos, setTodos] = useState(() => getTodos());
  const [error, setError] = useState(null);

  // Save todos to localStorage whenever they change
  // todos가 변경될 때마다 localStorage에 저장
  useEffect(() => {
    try {
      saveTodos(todos);
    } catch (err) {
      setError("Failed to save todos");
      console.error("Save error:", err);
    }
  }, [todos]);

  // Add new todo
  // 새로운 todo 추가
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

  // Toggle todo completion status
  // todo 완료 상태 토글
  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Update todo text
  // todo 텍스트 업데이트
  const updateTodo = (id, newText) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, text: newText.trim() } : todo
      )
    );
  };

  // Delete todo
  // todo 삭제
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
