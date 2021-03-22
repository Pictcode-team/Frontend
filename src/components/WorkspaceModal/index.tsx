import React, { useContext, useEffect, useState } from 'react';

import GalleryItem from '../GalleryItem/index';

import folder from '../../assets/img/folder.svg';
import logo from '../../assets/img/logo-pictcode.png';
import plus from '../../assets/img/plus.svg';
import './styles.scss';
import { imagesContext } from '../../utils/context/imagesContext.jsx';
import { useImages } from '../../utils/customHooks/useImages';

interface localImageInterface {
	image: undefined | string;
}

const WorkspaceModal = (props: any) => {
	const [localImage, setLocalImage] = useState<localImageInterface>({
		image: undefined,
	});
	const { images, setRawData, generatedQR } = useContext(imagesContext);

	const { deleteItem } = useImages();

	const setImage = (entryUrl: string) => {
		setLocalImage({ image: entryUrl });
	};

	const backToModal = () => {
		setLocalImage({ image: undefined });
	};

	const handleUpload = (e: any) => {
		const files: never[] = Array.from(e.target.files);
		setRawData((prevState: any) => [...prevState, ...files]);
	};

	let { image } = localImage;

	return (
		<div className='workspace'>
			{image ? (
				<>
					<header className='workspace_header__image'>
						<div>
							<button
								onClick={backToModal}
								className='workspace_header__image--close'>
								<img src={plus} alt='' />
							</button>
						</div>
					</header>
					<figure className='workspace_figure'>
						<img src={localImage.image} alt='full size image' />
					</figure>
				</>
			) : (
				<>
					<header className='workspace_header'>
						<div className='workspace_header__left'>
							<div className='workspace_header__left--name' />
							<img
								src={folder}
								alt='folder'
								className='workspace_header__left--folder'
							/>
						</div>
						<div className='workspace_header__right'>
							<div className='workspace_header__right--add'>
								{generatedQR === false && (
									<>
										<span>Add</span>
										<input
											name='add_file'
											className='workspace_header__right--input'
											accept='image/*'
											multiple
											onChange={handleUpload}
											type='file'
										/>
									</>
								)}
							</div>
							<button
								onClick={props.onClose}
								className='workspace_header__right--close'>
								<img src={plus} alt='' />
							</button>
						</div>
					</header>
					<div className='workspace_gallery'>
						{images &&
							images.map((item: any, index: any) => (
								<GalleryItem
									deleteItem={deleteItem}
									setImage={setImage}
									key={index}
									ImageUrl={item}
								/>
							))}
					</div>
					<button
						className='workspace_footer'
						onClick={(e) => props.handleEvent(true)}>
						<span>Get your</span>
						<img src={logo} alt='' />
					</button>
				</>
			)}
		</div>
	);
};

export default WorkspaceModal;
