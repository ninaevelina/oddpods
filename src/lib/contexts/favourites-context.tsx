"use client";

import { IPodcast } from "@/models/IPodcast";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface FavouritesContextProps {
  favourites: IPodcast[];
  addToFavourites: (podcast: IPodcast) => void;
  removeFromFavourites: (podcast: IPodcast) => void;
  isInFavourites: (podcast: IPodcast) => boolean;
}

interface FavouritesProviderProps {
  children: ReactNode;
}

const FavouritesContext = createContext<FavouritesContextProps | undefined>(
  undefined
);

export const FavouritesProvider = ({ children }: FavouritesProviderProps) => {
  const [favourites, setFavourites] = useState<IPodcast[]>([]);

  const addToFavourites = (podcast: IPodcast) => {
    setFavourites((prevFavourites) => [...prevFavourites, podcast]);
    console.log(podcast, "podcast");
  };

  const removeFromFavourites = (podcast: IPodcast) => {
    setFavourites((prevFavourites) =>
      prevFavourites.filter((item) => item.id !== podcast.id)
    );
  };

  const isInFavourites = (podcast: IPodcast) => {
    return favourites.some((item) => item.id === podcast.id);
  };

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        isInFavourites,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

export const useFavourites = () => {
  const context = useContext(FavouritesContext);
  if (!context) {
    throw new Error("useFavourites must be used within the FavouritesProvider");
  }
  return context;
};
