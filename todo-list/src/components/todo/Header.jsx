import React from "react";
import { Typography, Button, Tooltip, Badge } from "antd";
import { useTodoContext } from "../../context/TodoContext";

const { Title } = Typography;

const Header = () => {
  const { activeFilter, setActiveFilter, getFilterCounts } = useTodoContext();
  const counts = getFilterCounts();

  const filters = [
    { key: "all", label: "All", tooltip: "View all tasks" },
    { key: "active", label: "Active", tooltip: "View uncompleted tasks" },
    { key: "completed", label: "Completed", tooltip: "View completed tasks" },
  ];

  return (
    <div className="header">
      <Title level={2}>Task Manager</Title>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          marginTop: "16px",
        }}
      >
        {filters.map(({ key, label, tooltip }) => (
          <Tooltip key={key} title={tooltip}>
            <Badge count={counts[key]} offset={[-10, 0]}>
              <Button
                type={activeFilter === key ? "primary" : "default"}
                onClick={() => setActiveFilter(key)}
                style={{ minWidth: "120px" }}
              >
                {label}
              </Button>
            </Badge>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default Header;
