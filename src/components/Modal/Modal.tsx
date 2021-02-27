import React from 'react';
import ReactDOM from 'react-dom';
import { ModalItem } from '../ModalItem/ModalItem'
import './styles.scss'

export const Modal = (props: any) => {
  const portalDiv = document.getElementById("modal")
  portalDiv ? ReactDOM.createPortal : null;

  if (!props.isOpen) {
    return null;
  }
  return portalDiv ? ReactDOM.createPortal(
    <div className="modal">
      <div className="modal__container">
        <button onClick={props.onClose} className="modal__close">X</button>
        <div className="modal__gallery">
          <ModalItem/>
          {/* <ModalItem ImageUrl='1'/>
          <ModalItem ImageUrl='2'/>
          <ModalItem ImageUrl='3'/>
          <ModalItem ImageUrl='4'/>
          <ModalItem ImageUrl='5'/>
          <ModalItem ImageUrl='6'/>
          <ModalItem ImageUrl='7'/>
          <ModalItem ImageUrl='8'/>
          <ModalItem ImageUrl='9'/>
          <ModalItem ImageUrl='10'/> */}
        </div>
      </div>
    </div>
    , portalDiv) : null;
}