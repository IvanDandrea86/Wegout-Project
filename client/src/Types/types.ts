export interface Video {
    id: number;
    width: number;
    height: number;
    url: string;
    image: string;
    full_res: unknown;
    tags: unknown[];
    duration: number;
    user: {
      id: number;
      name: string;
      url: string;
    };
    video_files: {
      id: number;
      quality: "hd" | "sd" | "hls"; // TODO: find out all types
      file_type: "string";
      width: number | null;
      height: number | null;
      link: string;
    }[];
    video_pictures: {
      id: number;
      picture: string;
      nr: number;
    }[];
  }
  export type Videos = PaginationObject & {
    total_results: number;
    videos: Video[];
  };
 interface PaginationObject {
    url?: string;
    page: number;
    per_page: number;
    next_page: number;
  }

 export interface IImgageData{
    urls:{raw:string,
      full:string}
  }

  export interface IImage{
    ratio:string;
    url:string;
    width:number;
    }
    
    export interface IDetails {
      images: Array<IImage>;
      name: string;
      id:string;
      _embedded:{
        venues:[{
          name:string;
        }]
      };
      dates:{
        start:{
        localDate:string
      }
      }
    }

 