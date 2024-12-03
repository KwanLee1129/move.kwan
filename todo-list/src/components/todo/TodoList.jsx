import React from "react";
import TodoItem from "./TodoItem";

// TodoList component: Renders the list of todos
// TodoList 컴포넌트: 할 일 목록을 렌더링
const TodoList = ({ todos, onToggle, onUpdate, onDelete }) => {
  // If there are no todos, show empty state message
  // 할 일이 없을 경우 빈 상태 메시지 표시
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
        {/* Display total tasks count */}
        {/* 전체 할 일 개수 표시 */}
        <small>{todos.length} tasks total</small>
      </div>
    </div>
  );
};

export default TodoList;
