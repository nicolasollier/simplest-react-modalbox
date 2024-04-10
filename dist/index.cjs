Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

const Modal = ({ title, text, onClick, customStyles }) => {
    const modalRef = React.useRef(null);
    return (React.createElement("div", { className: "modal", style: customStyles.modal, ref: modalRef },
        React.createElement("div", { className: "modal-content", style: customStyles.content },
            React.createElement("span", { className: "close", style: customStyles.close, onClick: onClick }, "\u00D7"),
            React.createElement("div", null,
                React.createElement("h2", null, title),
                React.createElement("p", null, text)))));
};

exports.default = Modal;
//# sourceMappingURL=index.cjs.map
