import React, { useContext, useEffect } from 'react';
import { uploadImages } from '../api/images';
import { imagesContext } from '../context/imagesContext.jsx';
import { useNotification } from './useNotification';

export const useImages = () => {
  const { rawData, setImages, generatedQR, setUid, setIsLoading } = useContext(
    imagesContext
  );
  const { successNotification } = useNotification();

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

  useEffect(() => {
    const getData = async () => {
      const data = await uploadImages(rawData);
      const { uuid } = data;
      setUid(`/public/${uuid}`);
      successNotification('Images uploaded correctly');
      setIsLoading(false);
    };

    if (generatedQR) {
      getData();
    }
  }, [generatedQR]);

  return { upload, deleteItem };
};
