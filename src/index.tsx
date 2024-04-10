import React, { useRef } from 'react';

interface ModalProps {
  title: string;
  text: string;
  status: 'success' | 'error' | 'warning' | 'info';
  onClick: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, text, status, onClick }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success':
        return '#5cb85c';
      case 'error':
        return '#d9534f';
      case 'warning':
        return '#f0ad4e';
      case 'info':
        return '#5bc0de';
      default:
        return '#333';
    }
  };

  return (
    <div className="modal" style={{ ...styles.modal, backgroundColor: getStatusColor(status) }} ref={modalRef}>
      <div className="modal-content" style={styles.content}>
        <span className="close" style={styles.close} onClick={onClick}>
          &times;
        </span>
        <div>
          <h2 style={{ color: getStatusColor(status) }}>{title}</h2>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    position: 'relative',
    width: '60%',
    maxWidth: '500px',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '5px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
  },
  close: {
    position: 'absolute',
    top: '8px',
    right: '8px',
    fontSize: '1.5rem',
    cursor: 'pointer',
  },
};

export default Modal;
