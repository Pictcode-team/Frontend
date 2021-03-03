import React, { useState }  from 'react';
import { Modal } from '../Modal/Modal'
import { FileUploader } from '../FileUploader/FileUploader'

export const Home = ( ) => {
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [openModal, setOpenModal] = useState(true)
 

  const handleCloseModal = (e:any) => {
    setOpenModal(false)
  }

  const handleUploadFiles =(e:any) =>{
   setSelectedFile(e.target.files)
  }

  return (
    <section className="upload">
      <div className="upload__form">
        <FileUploader onClick ={handleUploadFiles} />
        <Modal isOpen={openModal} onClose={handleCloseModal}/>
      </div>
      <p>Only jpg, png, gif, svg</p>
    </section>
  )
}
