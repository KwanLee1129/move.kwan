import React from "react";
import { Empty } from "antd";
import { useTodoContext } from "../../context/TodoContext";
import Header from "./Header";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import SearchBar from "./SearchBar";

const TodoList = () => {
  const { filteredTodos } = useTodoContext();

  return (
    <div className="main-content">
      <Header />
      <TodoInput />
      {filteredTodos.length === 0 ? (
        <Empty description="No tasks found" />
      ) : (
        <div className="todo-list">
          {filteredTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
      )}
      <SearchBar />
    </div>
  );
};

export default TodoList;
