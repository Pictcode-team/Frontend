export const uploadImages = async (rawData: any) => {
	const formdata = new FormData();
	rawData.forEach((element: any) => {
		formdata.append('images', element);
	});

	const response = await fetch('https://www.pictocode.xyz/api/v1/images/', {
		method: 'POST',
		body: formdata,
		redirect: 'follow',
	}).then((response) => response.json());

	return response;
};

export const downloadImages = async (uid: string) => {
	fetch(`https://www.pictocode.xyz/api/v1/images/${uid}`, {
		method: 'GET',
		redirect: 'follow',
	})
		.then((response) => response.text())
		.then((result) => console.log(result))
		.catch((error) => console.log('error', error));

	// const response = await fetch(
	// 	`https://www.pictocode.xyz/api/v1/images/${uid}`,
	// ).then((response) => console.log(response.json()));

	// return response;
};
