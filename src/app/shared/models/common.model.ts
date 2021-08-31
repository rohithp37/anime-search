export interface animeDataConfig {
    mal_id?:number;
    url?:string;
    image_url?:string;
    title?:string;
    airing?:boolean;
    synopsis?:string;
    type?:string;
    episodes?: number;
    score?:number;
    start_date?:string;
    end_date: string;
    members?: number;
    rated?:string;
}

export interface paramsConfig {
    q: string;
    limit: number;
    page: number;
}