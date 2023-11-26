"use server";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

// page is a paramater
// number is the TYPE of the parameter (typescript)
export const fetchAnime = async (page: number) => {
  //Make a call to the API and return the data
  // FETCH is a built-in JS function to fetch data from APIs
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=4&order=popularity`
  );

  // To test
  // Whenever using FETCH we need to use .json() to extract the data from it

  const data = await response.json();
  
  // Needed to convert it to a TSX file because of the components call
  // Now returning the presentation of the data
  return data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
};
