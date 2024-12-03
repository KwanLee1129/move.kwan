// Alert component for user feedback
// 사용자 피드백을 위한 알림 컴포넌트
const Alert = ({ message, type, onClose }) => (
  <div className={`alert alert-${type}`}>
    <span>{message}</span>
    <button onClick={onClose} className="alert-close">
      &times;
    </button>
  </div>
);

export default Alert;
