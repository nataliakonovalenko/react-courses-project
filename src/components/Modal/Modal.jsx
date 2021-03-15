import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./modal.scss";

const Modal = (props) => {
    const container = document.createElement('div');
    container.id = 'modal-container';

    useEffect(() => {
        document.body.appendChild(container);

        return () => {
            document.body.removeChild(container);
        }
    });

    const handleClose = () => {
        props.onClose();
    };

    const modal = (
        <div className="modal">
            <div className="modal-container">
                <div className="modal-content">
                    {props.children}
                    <button
                        className="modal-close"
                        onClick={handleClose}
                    >X</button>
                </div>
            </div>
        </div>
    );

    return ReactDOM.createPortal(modal, container);
};

export default Modal;
