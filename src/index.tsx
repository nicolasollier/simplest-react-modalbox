import React, { useRef } from 'react';

interface ModalProps {
  title: string;
  text: string;
  onClick: () => void;
  customStyles?: {
    modal?: React.CSSProperties;
    content?: React.CSSProperties;
    close?: React.CSSProperties;
  };
}

const Modal: React.FC<ModalProps> = ({ title, text, onClick, customStyles }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const defaultStyles = {
    modal: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    content: {
      position: 'relative',
      width: '60%',
      maxWidth: '500px',
      padding: '20px',
      borderRadius: '5px',
      border: '2px solid',
      backgroundColor: 'white',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
    },
    close: {
      position: 'absolute',
      top: '6px',
      right: '16px',
      fontSize: '1.5rem',
      cursor: 'pointer',
    },
  };

  const mergedStyles = {
    modal: { ...defaultStyles.modal, ...(customStyles?.modal || {}) },
    content: { ...defaultStyles.content, ...(customStyles?.content || {}) },
    close: { ...defaultStyles.close, ...(customStyles?.close || {}) },
  };

  return (
    <div
      className="modal"
      style={mergedStyles.modal}
      ref={modalRef}>
      <div
        className="modal-content"
        style={mergedStyles.content}>
        <span
          className="close"
          style={mergedStyles.close}
          onClick={onClick}
        >
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

export default Modal;
