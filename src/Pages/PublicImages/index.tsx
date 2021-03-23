import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useImages } from '../../utils/customHooks/useImages';

interface localParams {
	uid: string;
}
const PublicImages = (props: any) => {
	const { download } = useImages();
	let { uid } = useParams<localParams>();

	useEffect(() => {
		download(uid);
	}, []);

	return (
		<div className='gallery'>
			<h2>finall gallery</h2>
		</div>
	);
};

export default PublicImages;
