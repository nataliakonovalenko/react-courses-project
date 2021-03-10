import React from "react";
import ReactDOM from "react-dom";
import "./modal.scss";

class Modal extends React.Component {
    constructor( props ) {
        super( props );

        this.container = document.getElementById('modal-container');

        if (!this.container) {
            this.container = document.createElement('div');
            this.container.id = 'modal-container';
            document.body.appendChild(this.container);
        }
    }

    componentWillUnmount() {
       document.body.removeChild(this.container);
    }

    handleClose = () => {
        this.props.onClose();
    };

    render() {
        if (!this.props.isOpen) {
            return null;
        }

        const modal = (
            <div className="modal">
                <div className="modal-container">
                    <div className="modal-content">
                        {this.props.children}
                        <button
                            className="modal-close"
                            onClick={this.handleClose}
                        >X</button>
                    </div>
                </div>
            </div>
        );

        return ReactDOM.createPortal(modal, this.container);
    }
}

export default Modal;
