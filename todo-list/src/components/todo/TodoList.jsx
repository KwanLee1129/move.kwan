import React from "react";
import { Empty } from "antd";
import TodoItem from "./TodoItem";
import SearchBar from "./SearchBar";
import { useTodoContext } from "../../context/TodoContext";

const TodoList = () => {
  const { todos, filter, searchText } = useTodoContext();

  const getFilteredTodos = () => {
    return todos.filter((todo) => {
      // 검색어 필터링
      if (
        searchText &&
        !todo.text.toLowerCase().includes(searchText.toLowerCase())
      ) {
        return false;
      }

      // 상태 필터링
      if (filter === "active") return !todo.completed;
      if (filter === "completed") return todo.completed;
      return true;
    });
  };

  const filteredTodos = getFilteredTodos();

  return (
    <div className="todo-list-container">
      <div className="todo-items" style={{ marginBottom: "24px" }}>
        {filteredTodos.length === 0 ? (
          <Empty description={`No ${filter} tasks found`} />
        ) : (
          filteredTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        )}
      </div>
      <SearchBar />
    </div>
  );
};

export default TodoList;
