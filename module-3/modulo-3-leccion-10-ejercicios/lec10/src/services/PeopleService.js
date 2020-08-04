const getDataFromApi = () => {
  const ENDPOINT = "https://randomuser.me/api/?results=50";
  fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      console.log("datos del api", data);
    });
};

export default getDataFromApi;
