Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

const Modal = ({ title, text, onClick, customStyles, isOpen }) => {
    const modalRef = React.useRef(null);
    return (React.createElement("div", { className: "modal", style: Object.assign(Object.assign({}, customStyles === null || customStyles === void 0 ? void 0 : customStyles.modal), { display: isOpen ? 'block' : 'none' }), ref: modalRef },
        React.createElement("div", { className: "modal-content", style: customStyles === null || customStyles === void 0 ? void 0 : customStyles.content },
            React.createElement("span", { className: "close", style: customStyles === null || customStyles === void 0 ? void 0 : customStyles.close, onClick: onClick }, "\u00D7"),
            React.createElement("div", null,
                React.createElement("h2", null, title),
                React.createElement("p", null, text)))));
};

exports.default = Modal;
//# sourceMappingURL=index.cjs.map
