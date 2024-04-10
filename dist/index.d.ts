import React from 'react';
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
declare const Modal: React.FC<ModalProps>;
export default Modal;
