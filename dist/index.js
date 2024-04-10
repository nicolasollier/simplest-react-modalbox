import React, { useRef } from 'react';
const Modal = ({ title, text, onClick, customStyles }) => {
    const modalRef = useRef(null);
    return (React.createElement("div", { className: "modal", style: customStyles.modal, ref: modalRef },
        React.createElement("div", { className: "modal-content", style: customStyles.content },
            React.createElement("span", { className: "close", style: customStyles.close, onClick: onClick }, "\u00D7"),
            React.createElement("div", null,
                React.createElement("h2", null, title),
                React.createElement("p", null, text)))));
};
export default Modal;
//# sourceMappingURL=index.js.map