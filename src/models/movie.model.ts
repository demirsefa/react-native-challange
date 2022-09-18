export interface MovieModel {
    id:number,
    title: string,
    category: string,
    rate:number,
    poster?: string,
    description: string,
    releaseDate?:string,
    actors?:string,
    director?:string,
    country?:string,
    language?:string,
    createDate:Date
}