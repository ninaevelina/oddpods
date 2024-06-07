export interface IPodcast {
  id: number;
  name: string;
  programurl: string;
  programimage: string;
  description: string;
  programslug: string;
  listened: boolean;
}

export interface IApiResponse {
  programs: IPodcast[];
}
