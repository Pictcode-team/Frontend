import React, { createContext, useContext, useState } from 'react'

const UploadContext = createContext({})

export const UploadProvider  = ({ children }) => {
  const [selectedFiles, setSelectedFiles] = useState<any>(undefined);

  const [showModal, setShowModal] = useState<boolean>(false)
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [generatedQR, setGeneratedQR] = useState<boolean>(false)

  const upload = (e:any) => {
    const files = e.target.files;

    const output: string[] = [];
      for (let i = 0, f:any; f = files[i]; i++) {
        const reader: any = new FileReader()
        reader.readAsDataURL(f);
        reader.onload =()=> {
          output.push(reader.result)
        }
        setSelectedFiles(output)
        setShowModal(true);
        setOpenModal(true);
      }
  }

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
      upload,
      showModal,
      openModal,
      handleCloseModal,
      generatedQR,
      handleOpenQRModal}}>
      {children}
    </UploadContext.Provider>
  )
}

export const useUpload = () => useContext(UploadContext)
