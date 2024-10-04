import React from "react";
import Toast from "react-bootstrap/Toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faExclamationTriangle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

const ToastNotification = ({ showToast, toggleToast, message, variant }) => {
  const iconConfig = {
    success: { icon: faCircleCheck, color: "#28a745" },
    danger: { icon: faTimesCircle, color: "#dc3545" },
    warning: { icon: faExclamationTriangle, color: "#ffc107" },
  };

  const { icon, color } = iconConfig[variant] || iconConfig.success;

  return (
    <Toast
      show={showToast}
      onClose={toggleToast}
      delay={3000}
      autohide
      className="position-fixed m-0 m-sm-4 toast-full-width"
    >
      <Toast.Header closeButton>
        <strong className={`me-auto text-${variant} fs-6`}>Notification</strong>
      </Toast.Header>
      <Toast.Body className="my-2">
        <FontAwesomeIcon icon={icon} className="me-2" style={{ color }} />
        {message}
      </Toast.Body>
    </Toast>
  );
};

export default ToastNotification;
