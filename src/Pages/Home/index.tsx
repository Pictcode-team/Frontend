import React, { useState, useEffect } from 'react';
import { useUpload } from '../../UploadContext'
import { WorkspaceModal } from '../../components/WorkspaceModal/index';
import { QRModal } from '../../components/QRModal';
import './styles.scss'

export const Home = () => {
  const { setSelectedFiles, selectedFiles, showModal, handleCloseModal, generatedQR,  handleOpenQRModal, setShowModal, setOpenModal }: any = useUpload();

  const [images, setImages] = useState<any>([]);

  const readAll = async (files, output) => {
    for (let num of files) {
      const reader: any = new FileReader();
      reader.readAsDataURL(num);
      reader.onload = () => {
        output.push(reader.result)
      }
    }
  }

  const upload = (e:any) => {
    const output: string[] = [];
    const files = e.target.files;
    readAll(files, output)
      .then(() => {
        setImages(output)
        setSelectedFiles(images)
      })
  }

  const handleUpload = async (e:any) => {
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
      </div>
      <p>Only jpg, png, gif, svg</p>
    </section>
  )
}
