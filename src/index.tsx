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

  return (
    <div
      className="modal"
      style={customStyles.modal}
      ref={modalRef}>
      <div
        className="modal-content"
        style={customStyles.content}>
        <span
          className="close"
          style={customStyles.close}
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
