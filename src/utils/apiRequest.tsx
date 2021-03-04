import axios from "axios";


const http = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-type": "application/json"
  }
});

export const UploadFilesService = (file, onUploadProgress) => {
    let formData = new FormData();

    formData.append("file", file);

    return http.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  }

 export const getFiles = () => {
    return http.get("/files");
  }