Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

const Modal = ({ title, text, onClick, customStyles }) => {
    const modalRef = React.useRef(null);
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
        modal: Object.assign(Object.assign({}, defaultStyles.modal), ((customStyles === null || customStyles === void 0 ? void 0 : customStyles.modal) || {})),
        content: Object.assign(Object.assign({}, defaultStyles.content), ((customStyles === null || customStyles === void 0 ? void 0 : customStyles.content) || {})),
        close: Object.assign(Object.assign({}, defaultStyles.close), ((customStyles === null || customStyles === void 0 ? void 0 : customStyles.close) || {})),
    };
    return (React.createElement("div", { className: "modal", style: mergedStyles.modal, ref: modalRef },
        React.createElement("div", { className: "modal-content", style: mergedStyles.content },
            React.createElement("span", { className: "close", style: mergedStyles.close, onClick: onClick }, "\u00D7"),
            React.createElement("div", null,
                React.createElement("h2", null, title),
                React.createElement("p", null, text)))));
};

exports.default = Modal;
//# sourceMappingURL=index.cjs.map
