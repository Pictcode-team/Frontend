import React, { useState }  from 'react';
import { WorkspaceModal } from '../WorkspaceModal/index';
import { QRModal } from '../QRModal';
import './styles.scss';

export const Home = (initialState = {}) => {
  const [values, setValues] = useState(initialState)
  const [openModals, setOpenModals] = useState(true)
  const [openModal, setOpenModal] = useState(true)
  const [generatedQR, setGeneratedQR] = useState(true)

  const handleCloseModal = (e:any) => {
    setOpenModal(false);
    setOpenModals(false);
  }
  const handleCloseQRModal = (e:any) => {
    setGeneratedQR(false)
  }


  return (
    <section className="upload">
      <div className="upload__form">
        <input className="upload__files" type="file" />
        <div className="modals">
          <WorkspaceModal  isOpen={openModal} onClose={handleCloseModal}/>
          <QRModal isOpen={generatedQR} onClose={handleCloseQRModal} GeneratedUrl="sample"/>
        </div>
      </div>
      <p>Only jpg, png, gif, svg</p>
    </section>
  )
}
