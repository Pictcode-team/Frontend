import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { imagesContext } from '../../utils/context/imagesContext';
import { useImages } from '../../utils/customHooks/useImages';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import './styles.css';

interface localParams {
	uid: string;
}

interface image {
	url: string;
}

const PublicImages = (props: any) => {
	const { download } = useImages();
	const { images } = useContext(imagesContext);
	let { uid } = useParams<localParams>();

	useEffect(() => {
		download(uid);
	}, []);

	return (
		<div className='gallery'>
			<ResponsiveMasonry columnsCountBreakPoints={{ 480: 1, 700: 2, 1000: 3 }}>
				<Masonry gutter='20px'>
					{images.map((image: image, index: number) => (
						<figure>
							<img
								className='image'
								src={image.url}
								alt={`content number ${index}`}
							/>
						</figure>
					))}
				</Masonry>
			</ResponsiveMasonry>
		</div>
	);
};

export default PublicImages;
