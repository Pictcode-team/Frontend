import React, { useRef } from 'react'

export const FileUploader = (onFileSelect : any) => {

    const fileInput = useRef<any>(null)

    const handleFileInput = (e:any) => {
        // handle validations
            const file = e.target.files[0];
  

         if (file.size > 1024)
           ({ error: "File size cannot exceed more than 1MB" });
        else file; 
    }
      return (
        <>
          <input onClick={e => fileInput.current && fileInput.current.click()} className="upload__files"  type="file" onChange={handleFileInput}/>
        </>
      )
}
