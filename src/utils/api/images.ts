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
