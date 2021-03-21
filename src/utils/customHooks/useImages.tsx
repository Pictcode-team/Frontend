import React, { useState } from 'react';

export const UseImages = () => {
  const [generatedQR, setGeneratedQR] = useState<boolean>(false);
  const [images, setImages] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  const readAll = (files) => {
    return [...files].map(
      (file) =>
        new Promise((resolve, reject) => {
          const reader: any = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
        })
    );
  };

  const upload = async (e: any) => {
    setIsLoading(true);
    const files = e.target.files;
    const result = await Promise.all(readAll(files)).then((images) =>
      setImages(images)
    );
    setIsLoading(false);
    return result;
  };

  return {
    generatedQR,
    setGeneratedQR,
    images,
    setImages,
    readAll,
    upload,
    isLoading,
    setIsLoading,
  };
};
