import React, { useEffect, useState }  from 'react';
import { WorkspaceModal } from '../WorkspaceModal/index';
import { QRModal } from '../QRModal';

export const Home = (initialState = {}) => {
  // const [values, setValues] = useState(initialState)
  const [showModal, setShowModal] = useState(true)
  const [openModal, setOpenModal] = useState(true)
  const [generatedQR, setGeneratedQR] = useState(false)

  const handleCloseModal = (e:any) => {
    setOpenModal(false);
    setShowModal(false);
    setGeneratedQR(false);
  }
  const handleOpenQRModal = (e:any) => {
    setGeneratedQR(true)
  }
  const handleCloseQRModal = (e:any) => {
    setGeneratedQR(false)
  }


  return (
    <section className="upload">
      <div className="upload__form">
        <input className="upload__files" type="file" />
        { showModal &&
          <div className="modal" >
            <WorkspaceModal
              isOpen={openModal}
              onClose={handleCloseModal}
              handleEvent={handleOpenQRModal}
            />
            { generatedQR === true && (
              <QRModal
                isOpen={generatedQR}
                onClose={handleCloseQRModal}
                GeneratedUrl="here must be the url"
              />
            )}
          </div>
        }
      </div>
      <p>Only jpg, png, gif, svg</p>
    </section>
  )
}
