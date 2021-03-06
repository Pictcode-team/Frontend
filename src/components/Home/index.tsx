import React, { useEffect, useState }  from 'react';
import { WorkspaceModal } from '../WorkspaceModal/index';
import { QRModal } from '../QRModal';
import './styles.scss'

export const Home = (initialState = {}) => {
  // const [values, setValues] = useState(initialState)
  const [showModal, setShowModal] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [generatedQR, setGeneratedQR] = useState(false)

  const handleOpenModal = (e:any) => {
    setShowModal(true);
    setOpenModal(true);
  }
  const handleCloseModal = (e:any) => {
    setShowModal(false);
    setOpenModal(false);
    setGeneratedQR(false);
  }
  const handleOpenQRModal = (e:any) => {
    setGeneratedQR(true)
  }

  return (
    <section className="upload">
      <div className="upload__form">
        <input className="upload__files" type="file" />
        { showModal &&
          <div className="modal fadeIn" >
            <WorkspaceModal
              isOpen={openModal}
              onClose={handleCloseModal}
              handleEvent={handleOpenQRModal}
            />
            { generatedQR === true && (
              <QRModal
                isOpen={generatedQR}
                // onClose={handleCloseQRModal}
                GeneratedUrl="here must be the url"
              />
            )}
          </div>
        }
        <button onClick={e => handleOpenModal(true)}>abrir modal</button>
      </div>
      <p>Only jpg, png, gif, svg</p>
    </section>
  )
}
