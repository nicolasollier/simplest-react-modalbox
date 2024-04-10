import React, { useRef } from 'react';

interface ModalProps {
  title: string;
  text: string;
  status: string;
}

const Modal: React.FC<ModalProps> = ({ title, text, status }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.style.display = 'none';
    }
  };

  return (
    <div className="modal" style={styles.modal} ref={modalRef}>
      <div className="modal-content" style={styles.content}>
        <span className="close" style={styles.close} onClick={closeModal}>
          &times;
        </span>
        <div>
          <h2>{title}</h2>
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
