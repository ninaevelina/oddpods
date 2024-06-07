import axios from "axios";
import { IApiResponse, IPodcast } from "@/models/IPodcast";

const API_BASE_URL =
  // "https://api.sr.se/api/v2/programs/index?programcategoryid=133&format=json";
  "https://api.sr.se/v2/programs/index?programcategoryid=133&programslug=&format=json&totalhits=34&pagination=false";

const client = axios.create({
  baseURL: API_BASE_URL,
});

export const getPodcasts = async () => {
  try {
    const response = await client.get<IApiResponse>(API_BASE_URL);
    console.log(response.data.programs);
    console.log("podcast data test");
    return response.data.programs;
  } catch {
    throw new Error("Could not get podcast data from SR API.");
  }
};

export const getPodcastBySlug = async (
  programslug: string
): Promise<IPodcast | null> => {
  try {
    const response = await axios.get<IApiResponse>(API_BASE_URL);
    const podcasts: IPodcast[] = response.data.programs;
    const foundPodcast = podcasts.find(
      (podcast) => podcast.programslug === programslug
    );
    if (foundPodcast) {
      return foundPodcast;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error getting podcast data:", error);
    throw new Error("Could not get podcast data");
  }
};
