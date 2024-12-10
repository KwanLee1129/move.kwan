// App.jsx
import React from "react";
import { ConfigProvider } from "antd";
import { TodoProvider } from "./context/TodoContext";
import Header from "./components/todo/Header";
import TodoInput from "./components/todo/TodoInput";
import TodoList from "./components/todo/TodoList";
import "./App.css";

const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#1890ff",
          borderRadius: 8,
        },
      }}
    >
      <TodoProvider>
        <div className="app-wrapper">
          <div className="app-container">
            <Header />
            <TodoInput />
            <TodoList />
          </div>
        </div>
      </TodoProvider>
    </ConfigProvider>
  );
};

export default App;
