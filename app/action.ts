"use server";

// page is a paramater
// number is the TYPE of the parameter (typescript)
export const fetchAnime = async (page: number) => {
  //Make a call to the API and return the data
  // FETCH is a built-in JS function to fetch data from APIs
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=10&order=popularity`
  );

  // To test
  // Whenever using FETCH we need to use .json() to extract the data from it

  const data = await response.json();
  console.log(data);
  return data;
};
