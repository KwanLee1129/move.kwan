// components/todo/SearchBar.jsx
import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useTodoContext } from "../../context/TodoContext";

const { Search } = Input;

const SearchBar = () => {
  const { setSearchKeyword } = useTodoContext();

  return (
    <div
      className="search-bar"
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "16px",
        background: "#fafafa",
        borderTop: "1px solid #f0f0f0",
        marginTop: "20px",
      }}
    >
      <Search
        placeholder="Search tasks..."
        onChange={(e) => setSearchKeyword(e.target.value)}
        style={{
          width: "100%",
          maxWidth: "400px",
        }}
        prefix={<SearchOutlined />}
        allowClear
      />
    </div>
  );
};

export default SearchBar;
