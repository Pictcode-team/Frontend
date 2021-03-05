import React from 'react';
import QRCode from 'qrcode.react';
import './styles.scss';

export const QRModal = ({GeneratedUrl} : any) => {
  return(
    <section className="qrModal">
      <h3>Here is your Pictcode</h3>
      <QRCode value={GeneratedUrl}/>
    </section>
  )
}