import React, { createContext, useContext, useEffect, useState } from 'react'

const UploadContext = createContext({})

export const UploadProvider  = ({ children }) => {
  const [selectedFiles, setSelectedFiles] = useState<any>(undefined);

  const [showModal, setShowModal] = useState<boolean>(false);
  const [generatedQR, setGeneratedQR] = useState<boolean>(false);

  const handleCloseModal = (e:boolean) => {
    setShowModal(false);
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
        handleCloseModal,
        generatedQR,
        handleOpenQRModal,
        setShowModal,
      }}>
      {children}
    </UploadContext.Provider>
  )
}

export const useUpload = () => useContext(UploadContext)
