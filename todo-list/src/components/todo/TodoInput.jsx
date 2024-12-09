import React, { useState } from "react";
import { Input, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useTodoContext } from "../../context/TodoContext";
import Alert from "../common/Alert";

const TodoInput = () => {
  const [inputText, setInputText] = useState("");
  const [error, setError] = useState("");
  const { addTodo } = useTodoContext();

  const handleSubmit = () => {
    if (!inputText.trim()) {
      setError("Please enter a task");
      return;
    }
    addTodo(inputText);
    setInputText("");
    setError("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <>
      {error && <Alert message={error} onClose={() => setError("")} />}
      <div className="todo-input">
        <Input
          placeholder="Add new task..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={handleKeyPress}
          size="large"
        />
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={handleSubmit}
          size="large"
        >
          Add Task
        </Button>
      </div>
    </>
  );
};

export default TodoInput;
