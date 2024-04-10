"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Modal = ({ title, text, status }) => {
    const modalRef = (0, react_1.useRef)(null);
    const closeModal = () => {
        if (modalRef.current) {
            modalRef.current.style.display = 'none';
        }
    };
    return (react_1.default.createElement("div", { className: "modal", style: styles.modal, ref: modalRef },
        react_1.default.createElement("div", { className: "modal-content", style: styles.content },
            react_1.default.createElement("span", { className: "close", style: styles.close, onClick: closeModal }, "\u00D7"),
            react_1.default.createElement("div", null,
                react_1.default.createElement("h2", null, title),
                react_1.default.createElement("p", null, text)))));
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
exports.default = Modal;
//# sourceMappingURL=index.js.map