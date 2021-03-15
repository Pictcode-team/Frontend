import React, { useState, useEffect } from 'react';
import { useUpload } from '../../UploadContext'
import { WorkspaceModal } from '../../components/WorkspaceModal/index';
import { QRModal } from '../../components/QRModal';
import './styles.scss'
import { resolvePreset } from '@babel/core';

export const Home = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [generatedQR, setGeneratedQR] = useState<boolean>(false);
  const [images, setImages] = useState<any>([]);

  const readAll = (files) => {
    return [...files].map(file => new Promise((resolve, reject) => {
      const reader: any = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result)
    }))
  }

  const upload = (e:any) => {
    const files = e.target.files;
    return Promise.all(readAll(files))
      .then((images) => setImages(images))
  }

  const handleUpload = async (e:any) => {
    await setShowModal(true);
    await upload(e);
  }

  const handleCloseModal = (e:boolean) => {
    setShowModal(false);
    setGeneratedQR(false);
    // console.log(images);
    // setImages(images.splice(0, images.length))
    // console.log(images);
  }
  const handleOpenQRModal = (e:boolean) => {
    setGeneratedQR(true)
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
