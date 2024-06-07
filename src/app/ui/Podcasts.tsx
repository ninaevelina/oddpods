"use client";
import { useEffect, useState } from "react";
import { IApiResponse, IPodcast } from "@/models/IPodcast";
import { getPodcasts } from "@/lib/actions";
import Podcast from "@/app/ui/Podcast";
export const Podcasts = () => {
  const [podcasts, setPodcasts] = useState<IPodcast[]>([]);

  useEffect(() => {
    const getData = async () => {
      const podcastData = await getPodcasts();
      setPodcasts(podcastData);
      console.log("podcasts", podcastData);
    };
    getData();
  }, []);

  return (
    <section className="max-w-screen-xl w-full bg-white py-10">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 justify-items-center md:justify-items-start">
        {podcasts.map((podcast) => (
          <Podcast podcast={podcast} key={podcast.id} isListItem={true} />
        ))}
      </div>
    </section>
  );
};

export default Podcasts;
