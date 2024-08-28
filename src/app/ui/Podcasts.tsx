"use client";
import { useEffect, useState } from "react";
import { IApiResponse, IPodcast } from "@/models/IPodcast";
import { getPodcasts } from "@/lib/actions";
import Podcast from "@/app/ui/Podcast";
import { useSearchParams } from "next/navigation";
export const Podcasts = () => {
  const [podcasts, setPodcasts] = useState<IPodcast[]>([]);
  const searchParams = useSearchParams();
  const query = searchParams?.get("query")?.toLowerCase() || "";

  useEffect(() => {
    const getData = async () => {
      const podcastData = await getPodcasts();
      setPodcasts(podcastData);
      console.log("podcasts", podcastData);
    };
    getData();
  }, []);

  const searchedPodcasts = podcasts.filter((podcast) =>
    podcast.name.toLowerCase().includes(query)
  );

  return (
    <section className="max-w-screen-xl w-full bg-white py-10">
      <p className="mb-[50px]">{searchedPodcasts.length} PODCASTS</p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 justify-items-center md:justify-items-start">
        {searchedPodcasts.map((podcast) => (
          <Podcast podcast={podcast} key={podcast.id} isListItem={true} />
        ))}
      </div>
    </section>
  );
};

export default Podcasts;
