import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useTodoContext } from "../../context/TodoContext";

const { Search } = Input;

const SearchBar = () => {
  const { searchText, setSearchText } = useTodoContext();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "20px 0",
      }}
    >
      <Search
        placeholder="Search tasks..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        style={{ maxWidth: "400px", width: "100%" }}
        prefix={<SearchOutlined />}
        allowClear
      />
    </div>
  );
};

export default SearchBar;
