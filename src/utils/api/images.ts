export const uploadImages = async (rawData: any) => {
	const formdata = new FormData();
	rawData.forEach((element: any, index: number) => {
		formdata.append('images', element, `image-number-${index}`);
	});

	const response = await fetch('https://www.pictocode.xyz/api/v1/images/', {
		method: 'POST',
		body: formdata,
		redirect: 'follow',
	}).then((response) => response.json());

	return response;
};

export const downloadImages = async (uid: string) => {
	var formdata = new FormData();

	const response = fetch(`https://pictocode.xyz/api/v1/images/${uid}`, {
		method: 'POST',
		body: formdata,
		redirect: 'follow',
	}).then((response) => response.json());

	return response;
};
