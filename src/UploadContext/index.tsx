import React, { createContext, useContext, useEffect, useState } from 'react'

const UploadContext = createContext({})

export const UploadProvider  = ({ children }) => {
  const [selectedFiles, setSelectedFiles] = useState<any>(undefined);

  const [showModal, setShowModal] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [generatedQR, setGeneratedQR] = useState<boolean>(false);

  const handleCloseModal = (e:boolean) => {
    setShowModal(false);
    setOpenModal(false);
    setGeneratedQR(false);
  }
  const handleOpenQRModal = (e:boolean) => {
    setGeneratedQR(true)
  }


  //console.log(selectedFiles)
  return (
    <UploadContext.Provider value = {{
        selectedFiles,
        setSelectedFiles,
        showModal,
        openModal,
        handleCloseModal,
        generatedQR,
        handleOpenQRModal,
        setShowModal,
        setOpenModal
      }}>
      {children}
    </UploadContext.Provider>
  )
}

export const useUpload = () => useContext(UploadContext)
