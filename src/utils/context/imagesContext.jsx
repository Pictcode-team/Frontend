import React, { useState } from 'react';
const imagesContext = React.createContext();

function ImagesProvider({ children }) {
  const [generatedQR, setGeneratedQR] = useState(false);
  const [rawData, setRawData] = useState([]);
  const [images, setImages] = useState([]);
  const [uid, setUid] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  return (
    <imagesContext.Provider value={{
      setImages,
      images,
      generatedQR,
      setGeneratedQR,
      rawData,
      setRawData,
      uid,
      setUid,
      setIsLoading,
      isLoading
    }}
    >
      {children}
    </imagesContext.Provider>
  );
}
export { ImagesProvider, imagesContext };
