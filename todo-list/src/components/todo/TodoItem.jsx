import { useState } from "react";

const TodoItem = ({ todo, onToggle, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleUpdate = () => {
    if (editText.trim() && editText !== todo.text) {
      onUpdate(todo.id, editText);
    }
    setIsEditing(false);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="todo-checkbox"
        />

        {isEditing ? (
          <div className="edit-mode">
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="edit-input"
              autoFocus
            />
            <button onClick={handleUpdate} className="save-btn">
              Save
            </button>
            <button
              onClick={() => {
                setIsEditing(false);
                setEditText(todo.text);
              }}
              className="cancel-btn"
            >
              Cancel
            </button>
          </div>
        ) : (
          <div className="todo-display">
            <span className="todo-text">{todo.text}</span>
            <div className="todo-actions">
              <button onClick={() => setIsEditing(true)} className="edit-btn">
                Edit
              </button>
              <button onClick={() => onDelete(todo.id)} className="delete-btn">
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
      <small className="todo-date">Created: {formatDate(todo.createdAt)}</small>
    </div>
  );
};

export default TodoItem;
