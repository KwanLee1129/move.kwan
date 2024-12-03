// Alert component: Displays feedback messages
// Alert 컴포넌트: 피드백 메시지 표시
import React from "react";

const Alert = ({ message, type, onClose }) => (
  <div className={`alert alert-${type}`}>
    <span>{message}</span>
    <button onClick={onClose} className="alert-close">
      &times;
    </button>
  </div>
);

export default Alert;
