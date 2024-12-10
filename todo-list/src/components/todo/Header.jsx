import React from "react";
import { Typography, Radio, Badge } from "antd";
import { useTodoContext } from "../../context/TodoContext";

const { Title } = Typography;

const Header = () => {
  const { filter, setFilter, todos } = useTodoContext();

  const getCounts = () => ({
    all: todos.length,
    active: todos.filter((todo) => !todo.completed).length,
    completed: todos.filter((todo) => todo.completed).length,
  });

  const counts = getCounts();

  return (
    <div className="header">
      <Title level={2}>Task Manager</Title>
      <div className="filter-group">
        <Radio.Group
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          buttonStyle="solid"
        >
          {[
            { key: "all", label: "All" },
            { key: "active", label: "Active" },
            { key: "completed", label: "Completed" },
          ].map(({ key, label }) => (
            <Radio.Button key={key} value={key}>
              {label}
              <Badge
                count={counts[key]}
                className="status-badge"
                size="small"
              />
            </Radio.Button>
          ))}
        </Radio.Group>
      </div>
    </div>
  );
};

export default Header;
