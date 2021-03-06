import React from 'react';
// import ReactDOM from 'react-dom';
import QRCode from 'qrcode.react';
import './styles.scss';

export const QRModal = (props : any) => {
  return (
    <div className="qrModal fadeIn">
      <h3 className='qrModal_title'>Share with this:</h3>
      <QRCode
        className="qrModal_code"
        renderAs='svg'
        size={250}
        value={props.GeneratedUrl}
      />
    </div>
  )
}