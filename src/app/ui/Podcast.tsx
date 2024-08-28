"use client";

import { IPodcast } from "@/models/IPodcast";
import Image from "next/image";
import Link from "next/link";
import HeartIcon from "./shared/icons/heart-icon";
import { useFavourites } from "@/lib/contexts/favourites-context";

interface PodcastProps {
  podcast: IPodcast;
  isListItem: boolean;
}

export const Podcast = ({ podcast, isListItem }: PodcastProps) => {
  const { addToFavourites, removeFromFavourites, isInFavourites } =
    useFavourites();
  const toggleFavourites = () => {
    if (isInFavourites(podcast)) {
      removeFromFavourites(podcast);
    } else {
      addToFavourites(podcast);
    }
  };

  return (
    <article
      className={
        isListItem
          ? `rounded overflow-hidden shadow-lg w-full mx-auto`
          : `bg-white grid grid-cols-1 md:grid-cols-2 w-[90%] mx-auto mt-[30px]`
      }
    >
      <div className="w-full flex justify-center">
        <div className="relative">
          <div className="relative">
            <Image
              src={podcast.programimage}
              alt={podcast.name}
              width={560}
              height={620}
              className={isListItem ? `w-full` : `rounded`}
            />
          </div>
          <div className="absolute right-0 top-0 p-2">
            <HeartIcon
              isFilled={isInFavourites(podcast)}
              onClick={toggleFavourites}
            />
          </div>
        </div>
      </div>
      <div>
        <Link href={`/podcasts/${podcast.programslug}`}>
          <p className="font-bold text-xl mb-2 mt-4 mx-2">{podcast.name}</p>
        </Link>
        <p className="text-gray-700 text-base mx-2 mb-4">
          {podcast.description}
        </p>
        {!isListItem && (
          <Link
            href={podcast.programurl}
            className="mx-2 underline"
            target="_blank"
          >
            Listen to {podcast.name} at SR
          </Link>
        )}
      </div>
    </article>
  );
};

export default Podcast;
