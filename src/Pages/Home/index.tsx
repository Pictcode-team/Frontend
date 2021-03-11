import React, { useState } from 'react';
import { useUpload } from '../../UploadContext'
import { WorkspaceModal } from '../../components/WorkspaceModal/index';
import { QRModal } from '../../components/QRModal';
import './styles.scss'

export const Home = () => {
  const { setSelectedFiles, selectedFiles, showModal, handleCloseModal, generatedQR,  handleOpenQRModal, setShowModal, setOpenModal }: any = useUpload();

  const [images, setImages] = useState<any>([])

  const readAll = async (files, output) => {
    for await (let num of files) {
      const reader: any = new FileReader();
      reader.readAsDataURL(num);
      reader.onload = () => {
        output.push(reader.result)
      }
    }
  }

  const upload = async (event:any) => {
    const output: string[] = [];
    const files = event.target.files;
    readAll(files, output)
      .then(() => {
        setImages(output)
        setSelectedFiles(images)
      })
  }

  const handleUpload = async (e) => {
    await upload(e);
    await setShowModal(true);
    await setOpenModal(true);
  }

  return (
    <section className="upload">
      <div className="upload__form">
        <input
          accept="image/*"
          className="upload__files"
          multiple
          onChange={handleUpload}
          type="file"
        />
        { showModal &&
          <div className="modal fadeIn" >
            
            <WorkspaceModal
              isOpen={handleUpload}
              onClose={handleCloseModal}
              handleEvent={handleOpenQRModal}
              files = {images}
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
