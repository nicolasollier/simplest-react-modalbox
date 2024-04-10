import React, { useRef } from 'react';

interface ModalProps {
  title: string;
  text: string;
  isOpen: boolean;
  customStyles?: {
    modal?: React.CSSProperties;
    content?: React.CSSProperties;
    close?: React.CSSProperties;
  };
}

const Modal: React.FC<ModalProps> = ({ title, text, isOpen, customStyles }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.style.display = 'none';
    }
  }

  return (
    <div
      className="modal"
      style={{
        ...customStyles?.modal,
        display: isOpen ? 'block' : 'none',
      }}
      ref={modalRef}
    >
      <div
        className="modal-content"
        style={customStyles?.content}
      >
        <span
          className="close"
          style={customStyles?.close}
          onClick={closeModal}
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
