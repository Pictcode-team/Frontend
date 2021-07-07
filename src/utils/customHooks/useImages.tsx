import React, { useContext, useEffect, useState } from 'react';
import { uploadImages, downloadImages } from '../api/images';
import { imagesContext } from '../context/imagesContext.jsx';
import { useNotification } from './useNotification';

export const useImages = () => {
	const [canGetData, setCanGetData] = useState(true);
	const {
		rawData,
		setImages,
		generatedQR,
		setUid,
		setIsLoading,
		setRawData,
	} = useContext(imagesContext);
	const { successNotification, errorNotification } = useNotification();

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

	const download = (uid: string) => {
		const getData = async () => {
			const data = await downloadImages(uid);
			const { images } = data;
			if (images) {
				setImages(images);
				successNotification('Images downloaded successfully');
			} else {
				errorNotification('Your url expired ');
			}
		};

		getData();
	};

	useEffect(() => {
		if (rawData.length <= 10) {
			upload();
		} else {
			errorNotification('You can only upload 10 images at the time');
			setRawData([]);
		}
	}, [rawData]);

	useEffect(() => {
		const getData = async () => {
			const data = await uploadImages(rawData);
			const { uuid } = data;
			setUid(`https://pictcode-2021.web.app/public/${uuid}`);
			setIsLoading(false);
			console.log(`https://pictcode-2021.web.app/${uuid}`);
		};

		if (generatedQR && canGetData === true) {
			getData();
			setCanGetData(false);
			successNotification('Images uploaded correctly');
		}
	}, [generatedQR]);

	return { upload, deleteItem, download };
};
