import React, { useState } from "react";

// TodoItem component: Renders individual todo items
// TodoItem 컴포넌트: 개별 할 일 항목을 렌더링
const TodoItem = ({ todo, onToggle, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  // Handle edit submission
  // 수정 제출 처리
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editText.trim() && editText !== todo.text) {
      onUpdate(todo.id, editText);
    }
    setIsEditing(false);
  };

  // Format date to readable string
  // 날짜를 읽기 쉬운 형식으로 변환
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      {/* Checkbox for completing todo */}
      {/* 할 일 완료를 위한 체크박스 */}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="todo-checkbox"
      />

      {isEditing ? (
        // Edit mode
        // 수정 모드
        <form onSubmit={handleSubmit} className="edit-form">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="edit-input"
            autoFocus
          />
          <button type="submit" className="save-btn">
            Save
          </button>
          <button
            type="button"
            onClick={() => setIsEditing(false)}
            className="cancel-btn"
          >
            Cancel
          </button>
        </form>
      ) : (
        // Display mode
        // 표시 모드
        <div className="todo-content">
          <span className="todo-text">{todo.text}</span>
          <div className="todo-actions">
            <button onClick={() => setIsEditing(true)} className="edit-btn">
              Edit
            </button>
            <button onClick={() => onDelete(todo.id)} className="delete-btn">
              Delete
            </button>
          </div>
          {todo.createdAt && (
            <small className="todo-date">
              Created: {formatDate(todo.createdAt)}
            </small>
          )}
        </div>
      )}
    </div>
  );
};

export default TodoItem;
