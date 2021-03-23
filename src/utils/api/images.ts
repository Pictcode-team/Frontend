export const uploadImages = async (rawData: any) => {
	const formdata = new FormData();
	rawData.forEach((element: any) => {
		formdata.append('images', element,'name');
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

	fetch(`https://pictocode.xyz/api/v1/images/${uid}`, {
		method: 'POST',
		body: formdata,
		redirect: 'follow',
	})
		.then((response) => response.text())
		.then((result) => console.log(result))
		.catch((error) => console.log('error', error));

	// return response;
};
