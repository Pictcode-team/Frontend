type PokemonData = {
  id: string;
  number: string;
  name: string;
  image: string;
  fetchedAt: string;
  attacks: {
    special: Array<{
      name: string;
      type: string;
      damage: number;
    }>;
  };
};

export const uploadImages = async (rawData) => {
  console.log(rawData);
  // const formdata = new FormData();
  // formdata.append('images', rawData[0]);

  // console.log(formdata);

  // const response = await fetch('https://www.pictocode.xyz/api/v1/images/', {
  //   method: 'POST',
  //   body: formdata,
  //   redirect: 'follow',
  // })
  //   .then((response) => response.text())
  //   .then((result) => console.log(result));

  // console.log(response);

  // return response;
};
