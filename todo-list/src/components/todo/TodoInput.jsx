// TodoInput component: Handles new task input
// TodoInput 컴포넌트: 새 작업 입력 처리
import React, { useState } from "react";

const TodoInput = ({ onAdd }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) {
      setError("Please enter a task");
      return;
    }

    if (input.length > 50) {
      setError("Task cannot exceed 50 characters");
      return;
    }

    onAdd(input);
    setInput("");
    setError("");
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          setError("");
        }}
        placeholder="Enter a new task"
        className="input-field"
      />
      <button onClick={handleSubmit} className="add-button">
        Add Task
      </button>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default TodoInput;
