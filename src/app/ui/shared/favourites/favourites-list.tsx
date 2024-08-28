"use client";

import { useFavourites } from "@/lib/contexts/favourites-context";
import Podcast from "../../Podcast";

export const FavouritesList = () => {
  const { favourites } = useFavourites();
  console.log(favourites, "favourites");

  return (
    <section className="">
      <h1 className="font-semibold text-2xl my-4">Your saved podcasts</h1>
      <p className="mb-6">A collection of your favourite podcasts</p>
      <p>{favourites.length} podcasts </p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 justify-items-center md:justify-items-start mt-12">
        {favourites.map((item) => (
          <Podcast key={item.id} podcast={item} isListItem={true} />
        ))}
      </div>
    </section>
  );
};

export default FavouritesList;
