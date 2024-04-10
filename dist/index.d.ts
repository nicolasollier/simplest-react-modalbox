import React from 'react';
interface ModalProps {
    title: string;
    text: string;
    status: 'success' | 'error' | 'warning' | 'info';
    onClick: () => void;
}
declare const Modal: React.FC<ModalProps>;
export default Modal;
