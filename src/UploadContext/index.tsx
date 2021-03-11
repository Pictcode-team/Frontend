import React, { createContext, useContext, useEffect, useState } from 'react'

const UploadContext = createContext({})

export const UploadProvider  = ({ children }) => {
  const [selectedFiles, setSelectedFiles] = useState<any>(undefined);

  const [showModal, setShowModal] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [generatedQR, setGeneratedQR] = useState<boolean>(false);

  // const readAll = async (files, output) => {
  //   for await (let num of files) {
  //     const reader: any = new FileReader();
  //     reader.readAsDataURL(num);
  //     reader.onload = () => {
  //       output.push(reader.result)
  //     }
  //   }
  // }
  // const upload = async (event:any) => {
  //   const output: string[] = [];
  //   const files = event.target.files;
  //   readAll(files, output)
  //     .then(() => setSelectedFiles(output))
  //     .then(() => {
  //       setShowModal(true)
  //       setOpenModal(true)
  //     })
  // }
  // const upload = (e:any) => {
  //   const output: string[] = [];
  //   const files = e.target.files;
  //   const read = () => {
  //     for (let i = 0, f:any; f = files[i]; i++) {
  //       const reader: any = new FileReader();
  //       reader.readAsDataURL(f);
  //       reader.onload = ()=> {
  //         output.push(reader.result)
  //       }
  //     }
  //   }
  //   const promise = Promise.resolve(read())
  //   promise
  //     .then(()=> {
  //       setSelectedFiles(output);
  //     })
  //     .then(()=> {
  //       setShowModal(true);
  //       setOpenModal(true);
  //     })
  // }

  // const upload = (e:any) => {
  //   const files = e.target.files;
  //   const output: string[] = [];
  //   for (let i = 0, f:any; f = files[i]; i++) {
  //     const reader: any = new FileReader();
  //     reader.readAsDataURL(f);
  //     reader.onload =()=> {
  //       output.push(reader.result)
  //     }
  //   }
  //   setSelectedFiles(output);
  //   setShowModal(true);
  //   setOpenModal(true);
  // }
  // const upload = (e:any) => {
  //   const output: string[] = [];
  //   const files = e.target.files;
  //   for (let num of files) {
  //     console.log(num);
  //     console.log(files);
  //     const reader: any = new FileReader();
  //     reader.readAsDataURL(num);
  //     reader.onload =()=> {
  //       output.push(reader.result)
  //     }
  //   }
  //   setSelectedFiles(output);
  //   setShowModal(true);
  //   setOpenModal(true);
  // }
  // const output = files.map((item) => {
  //   const reader: any = new FileReader()
  //   reader.readAsDataURL(item);
  //   reader.onload =()=> {
  //     output.push(reader.result)
  //   }
  //   setSelectedFiles(output)
  //   setShowModal(true);
  //   setOpenModal(true);
  //   return reader.result
  // });

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
        // upload,
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
