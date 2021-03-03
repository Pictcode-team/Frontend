import React, { useState }  from 'react';
import { Modal } from '../Modal/Modal'
import {QRModal} from '../QRModal/QRModal'

export const Home = (initialState = {}) => {
  const [values, setValues] = useState(initialState)
  const [openModal, setOpenModal] = useState(true)

  const handleCloseModal = (e:any) => {
    setOpenModal(false)
  }


  return (
    <section className="upload">
      <div className="upload__form">
        <input className="upload__files" type="file" />
        <Modal isOpen={openModal} onClose={handleCloseModal}/>
        <QRModal/>
      </div>
      <p>Only jpg, png, gif, svg</p>
    </section>
  )
}
