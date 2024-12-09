import React, { useState } from "react";
import { Button, Input, Typography, Checkbox } from "antd";
import { EditOutlined, DeleteOutlined, SaveOutlined } from "@ant-design/icons";
import { useTodoContext } from "../../context/TodoContext";

const { Text } = Typography;

const TodoItem = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const { toggleTodo, deleteTodo, updateTodo } = useTodoContext();

  const handleSave = () => {
    if (editText.trim()) {
      updateTodo(todo.id, editText);
      setIsEditing(false);
    }
  };

  return (
    <div
      className="todo-item"
      style={{
        display: "flex",
        alignItems: "center",
        padding: "12px",
        gap: "12px",
        borderBottom: "1px solid #f0f0f0",
      }}
    >
      <Checkbox checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flex: 1,
          gap: "12px",
        }}
      >
        <div style={{ flex: 1 }}>
          {isEditing ? (
            <Input
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onPressEnter={handleSave}
              onBlur={handleSave}
              autoFocus
            />
          ) : (
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Text
                style={{
                  fontSize: "16px",
                  textDecoration: todo.completed ? "line-through" : "none",
                  color: todo.completed ? "#8c8c8c" : "inherit",
                  marginRight: "8px",
                }}
              >
                {todo.text}
              </Text>
              <Text
                type="secondary"
                style={{ fontSize: "12px", whiteSpace: "nowrap" }}
              >
                {new Date(todo.timestamp).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </Text>
            </div>
          )}
        </div>
        <div style={{ display: "flex", gap: "4px", marginLeft: "auto" }}>
          <Button
            type="text"
            icon={isEditing ? <SaveOutlined /> : <EditOutlined />}
            onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
            title={isEditing ? "Save changes" : "Edit task"}
          />
          <Button
            type="text"
            danger
            icon={<DeleteOutlined />}
            onClick={() => deleteTodo(todo.id)}
            title="Delete task"
          />
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
