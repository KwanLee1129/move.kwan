import React from "react";
import { Layout, ConfigProvider } from "antd";
import TodoList from "./components/todo/TodoList";
import { TodoProvider } from "./context/TodoContext";
import "./App.css";

const { Content } = Layout;

const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#1890ff",
          borderRadius: 6,
        },
      }}
    >
      <TodoProvider>
        <Layout>
          <Content className="app-container">
            <TodoList />
          </Content>
        </Layout>
      </TodoProvider>
    </ConfigProvider>
  );
};

export default App;
