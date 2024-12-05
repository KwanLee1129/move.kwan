const Alert = ({ message, type, onClose }) => (
  <div className={`alert alert-${type}`}>
    <span>{message}</span>
    <button onClick={onClose} className="alert-close">
      &times;
    </button>
  </div>
);

export default Alert;
