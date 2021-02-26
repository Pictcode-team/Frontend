import React from 'react';
import ReactDOM from 'react-dom';

export const Modal = (props: any) => {
  const portalDiv =document.getElementById("modal")
  portalDiv ? ReactDOM.createPortal : null;

  if (!props.isOpen) {
    return null;
  }
  return portalDiv ? ReactDOM.createPortal(
    <div className="modal">
      <div className="modal__container">
        <button onClick={props.onClose} className="modal__close">X</button>
      <div className="modal__gallery">
        <div className="modal__gallery-item">1</div>
        <div className="modal__gallery-item">2</div>
        <div className="modal__gallery-item">3</div>
        <div className="modal__gallery-item">4</div>
        <div className="modal__gallery-item">5</div>
        <div className="modal__gallery-item">6</div>
        <div className="modal__gallery-item">7</div>
        <div className="modal__gallery-item">8</div>
        <div className="modal__gallery-item">9</div>
        <div className="modal__gallery-item">10</div>
      </div>
      </div>
    </div>
    , portalDiv) : null;
}