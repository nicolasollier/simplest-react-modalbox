import React, { useRef } from 'react';
const Modal = ({ title, text, onClick, customStyles }) => {
    const modalRef = useRef(null);
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
        modal: Object.assign({}, customStyles === null || customStyles === void 0 ? void 0 : customStyles.modal),
        content: Object.assign(Object.assign({}, customStyles === null || customStyles === void 0 ? void 0 : customStyles.content), { position: 'relative' }),
        close: Object.assign(Object.assign({}, defaultStyles.close), customStyles === null || customStyles === void 0 ? void 0 : customStyles.close),
    };
    return (React.createElement("div", { className: "modal", style: mergedStyles.modal, ref: modalRef },
        React.createElement("div", { className: "modal-content", style: mergedStyles.content },
            React.createElement("span", { className: "close", style: mergedStyles.close, onClick: onClick }, "\u00D7"),
            React.createElement("div", null,
                React.createElement("h2", null, title),
                React.createElement("p", null, text)))));
};
export default Modal;
//# sourceMappingURL=index.js.map