import React from "react";
import { Checkbox, Button, Tag, Space } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useTodoContext } from "../../context/TodoContext";
import moment from "moment";

const TodoItem = ({ todo }) => {
  const { toggleTodo, deleteTodo } = useTodoContext();

  const getStatusTag = () => {
    const due = moment(todo.dueDate);
    const today = moment();

    if (due.isSame(today, "day")) return { text: "Today", color: "blue" };
    if (due.isSame(today.clone().add(7, "days"), "week"))
      return { text: "This Week", color: "green" };
    return { text: "Upcoming", color: "purple" };
  };

  const status = getStatusTag();

  return (
    <div
      className="todo-item"
      style={{
        display: "flex",
        alignItems: "center",
        padding: "12px",
        borderBottom: "1px solid #f0f0f0",
        backgroundColor: todo.completed ? "#fafafa" : "white",
      }}
    >
      <Checkbox checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
      <div
        style={{
          flex: 1,
          marginLeft: "12px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div>
          <Space size={4}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                color: todo.completed ? "#888" : "#000",
              }}
            >
              {todo.text}
            </span>
            <Tag
              color={
                todo.priority === "Daily"
                  ? "red"
                  : todo.priority === "Weekly"
                  ? "orange"
                  : "green"
              }
            >
              {todo.priority}
            </Tag>
            <Tag color="blue">{todo.category}</Tag>
            <Tag color={status.color}>{status.text}</Tag>
          </Space>
        </div>
        <span style={{ fontSize: "12px", color: "#888", marginTop: "4px" }}>
          {moment(todo.dueDate).format("MMM D, YYYY")}
        </span>
      </div>
      <Button
        type="text"
        danger
        icon={<DeleteOutlined />}
        onClick={() => deleteTodo(todo.id)}
      />
    </div>
  );
};

export default TodoItem;
