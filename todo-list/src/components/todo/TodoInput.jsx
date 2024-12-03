import { useState } from "react";

const TodoInput = ({ onAdd }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  // Handle form submission
  // 폼 제출 처리
  const handleSubmit = (e) => {
    e.preventDefault();

    // Input validation
    // 입력값 유효성 검사
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
    <form onSubmit={handleSubmit} className="input-container">
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
      <button type="submit" className="add-button">
        Add Task
      </button>
      {error && <div className="error-message">{error}</div>}
    </form>
  );
};

export default TodoInput;
