import React from "react";
import useTodoLogic from "./hooks/useTodoLogic";
import TodoInput from "./components/todo/TodoInput";
import TodoList from "./components/todo/TodoList";

const App = () => {
  const { todos, error, loading, addTodo, updateTodo, deleteTodo, toggleTodo } =
    useTodoLogic();

  if (loading) {
    return <div className="text-center">로딩중...</div>;
  }

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">할 일 목록</h1>

      {error && (
        <div className="mb-4 p-4 bg-red-50 text-red-500 rounded">{error}</div>
      )}

      <TodoInput onAdd={addTodo} />
      <TodoList
        todos={todos}
        onToggle={toggleTodo}
        onUpdate={updateTodo}
        onDelete={deleteTodo}
      />

      <div className="mt-4 text-sm text-gray-500">
        전체: {todos.length} | 완료: {todos.filter((t) => t.completed).length}
      </div>
    </div>
  );
};

export default App;
