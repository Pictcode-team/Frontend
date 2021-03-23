import React, { useContext, useEffect } from 'react';
import { uploadImages, downloadImages } from '../api/images';
import { imagesContext } from '../context/imagesContext.jsx';
import { useNotification } from './useNotification';

export const useImages = () => {
	const { rawData, setImages, generatedQR, setUid, setIsLoading } = useContext(
		imagesContext,
	);
	const { successNotification } = useNotification();

	const readAll = (files: any) => {
		return [...files].map(
			(file) =>
				new Promise((resolve) => {
					const reader: any = new FileReader();
					reader.readAsDataURL(file);
					reader.onload = () => resolve(reader.result);
				}),
		);
	};

	const upload = async () =>
		await Promise.all(readAll(rawData)).then((images) => setImages(images));

	const deleteItem = (entryUrl: string): void => {
		setImages((prevState: any) =>
			prevState.filter((url: string) => url !== entryUrl),
		);
	};

	const download = (uid: string) => downloadImages(uid);

	useEffect(() => {
		upload();
	}, [rawData]);

	useEffect(() => {
		const getData = async () => {
			const data = await uploadImages(rawData);
			const { uuid } = data;
			setUid(`http://localhost:3000/public/${uuid}`);
			successNotification('Images uploaded correctly');
			setIsLoading(false);
		};

		if (generatedQR) {
			getData();
		}
	}, [generatedQR]);

	return { upload, deleteItem, download };
};
