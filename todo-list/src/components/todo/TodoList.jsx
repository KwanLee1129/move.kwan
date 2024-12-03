// TodoList component: Manages the list of todos
// TodoList 컴포넌트: 할 일 목록 관리
import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onToggle, onUpdate, onDelete }) => {
  if (!todos.length) {
    return (
      <div className="empty-state">
        <p>No tasks yet. Start by adding a new task!</p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
      <div className="task-counter">
        <small>
          {todos.length} task{todos.length !== 1 ? "s" : ""} total
        </small>
      </div>
    </div>
  );
};

export default TodoList;
