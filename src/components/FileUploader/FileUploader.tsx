import React, { useRef } from 'react'
//import { UploadFilesService } from 'utils/apiRequest';

export const FileUploader = (onFileSelect : any) => {

  const fileInput = useRef<any>(null)

  const handleFileInput = (e:any) => {
    // handle validations
    const file = e.target.files[0];
    console.log(file)

    if (file.size > 1024)
      ({ error: "File size cannot exceed more than 1MB" });
    else file;
  }
  return (
    <>
      <input accept="image/*" multiple onClick={e => fileInput.current && fileInput.current.click()} className="upload__files"  type="file" onChange={handleFileInput}/>
    </>
  )
}
