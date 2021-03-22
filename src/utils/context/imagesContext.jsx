import React, { useState } from 'react';
const imagesContext = React.createContext();

function ImagesProvider({ children }) {
  const [generatedQR, setGeneratedQR] = useState(false);
  const [rawData, setRawData] = useState([]);
  const [images, setImages] = useState([]);

  return (
    <imagesContext.Provider value={{
      setImages,
      images,
      generatedQR,
      setGeneratedQR,
      rawData,
      setRawData
    }}
    >
      {children}
    </imagesContext.Provider>
  );
}
export { ImagesProvider, imagesContext };
