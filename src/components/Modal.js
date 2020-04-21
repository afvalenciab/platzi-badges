import React from 'react';
import ReactDOM from 'react-dom';
import './styles/Modal.css';

function Modal(props) {

  if (!props.isOpen) {
    return null;
  }

  return (
    ReactDOM.createPortal(
      <div className="Modal">
        <div className="Modal-container">
          <div onClick={props.onClose} className="Modal-bottom_close">
            X
          </div>

          {props.children}
        </div>
      </div>
      , document.getElementById('modal'))
  );
}

export default Modal;
