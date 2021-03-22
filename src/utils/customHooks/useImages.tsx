import React, { useContext, useEffect } from 'react';
import { uploadImages } from '../api/images';
import { imagesContext } from '../context/imagesContext.jsx';

export const useImages = () => {
  const { rawData, setImages } = useContext(imagesContext);

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

  const upload = async () =>
    await Promise.all(readAll(rawData)).then((images) => setImages(images));

  const deleteItem = (entryUrl: string): void => {
    setImages((prevState) => prevState.filter((url) => url !== entryUrl));
  };

  useEffect(() => {
    upload();
  }, [rawData]);

  const sendImages = (rawData) => uploadImages(rawData);

  return { upload, deleteItem };
};
