import { IPodcast } from "@/models/IPodcast";
import Image from "next/image";
import Link from "next/link";

interface PodcastProps {
  podcast: IPodcast;
  isListItem: boolean;
}

export const Podcast = ({ podcast, isListItem }: PodcastProps) => {
  return (
    <article
      className={
        isListItem
          ? `max-w-sm rounded overflow-hidden shadow-lg w-full mx-auto`
          : `bg-white grid grid-cols-1 md:grid-cols-2 w-[90%] mx-auto mt-[30px]`
      }
    >
      <div className="w-full flex justify-center">
        <Image
          src={podcast.programimage}
          alt={podcast.name}
          width={560}
          height={620}
          className={isListItem ? `w-full` : `rounded`}
        />
      </div>
      <div>
        <Link href={`/podcasts/${podcast.programslug}`}>
          <p className="font-bold text-xl mb-2 mt-4 mx-2">{podcast.name}</p>
        </Link>
        <p className="text-gray-700 text-base mx-2 mb-4">
          {podcast.description}
        </p>
        {!isListItem && <p>{podcast.programurl}</p>}
      </div>
    </article>
  );
};

export default Podcast;
