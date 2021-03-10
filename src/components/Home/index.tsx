import React from 'react';
import { useUpload } from '../../UploadContext/'
import { WorkspaceModal } from '../WorkspaceModal/index';
import { QRModal } from '../QRModal';
import './styles.scss'

export const Home = () => {
  const {  upload, showModal, handleCloseModal, generatedQR,  handleOpenQRModal  }: any = useUpload()

  return (
    <section className="upload">
      <div className="upload__form">
        <input
          accept="image/*"
          className="upload__files"
          multiple
          onChange={upload}
          type="file"
        />
        { showModal &&
          <div className="modal fadeIn" >
            <WorkspaceModal
              isOpen={upload}
              onClose={handleCloseModal}
              handleEvent={handleOpenQRModal}
            />
            { generatedQR === true && (
              <QRModal
                isOpen={generatedQR}
                GeneratedUrl="here must be the url"
              />
            )}
          </div>
        }
        {/* <button onClick={e => handleOpenModal(true)}>abrir modal</button> */}
      </div>
      <p>Only jpg, png, gif, svg</p>
    </section>
  )
}
