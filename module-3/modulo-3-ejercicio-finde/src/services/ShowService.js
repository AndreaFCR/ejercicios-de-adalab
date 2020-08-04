const getDataFromApi = (nameFilter) => {
  const ENDPOINT = `http://api.tvmaze.com/search/shows?q=${nameFilter}`;
  return fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      // console.log(
      //   "datos del api, es un array",
      //   data,
      //   "--> lo que queremos guardar, recorrer!",
      //   data[0].show
      // );
      return data.map((show) => {
        return {
          id: show.show.id,
          image: show.show.image,
          name: show.show.name,
          score: show.show.rating.average,
          status: show.show.status,
        };
      });
    });
};

export default getDataFromApi;
