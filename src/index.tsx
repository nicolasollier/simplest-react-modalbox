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
    close: {
      position: 'absolute',
      top: '6px',
      right: '16px',
      fontSize: '1.5rem',
      cursor: 'pointer',
    },
  };

  const mergedStyles = {
    modal: {...customStyles?.modal},
    content: {...customStyles?.content, position: 'relative'},
    close: {...defaultStyles.close, ...customStyles?.close},
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
