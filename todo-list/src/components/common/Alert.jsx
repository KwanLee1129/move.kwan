import { Alert as AntAlert } from "antd";
import React from "react";

const Alert = ({ message, type = "error", onClose }) => {
  return (
    <AntAlert
      message={message}
      type={type}
      showIcon
      closable
      onClose={onClose}
      style={{
        marginBottom: "16px",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    />
  );
};

export default Alert;
