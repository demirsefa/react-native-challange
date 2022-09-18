export interface MovieRequestModel {
    id?:number,
    title: string,
    category: string,
    rate?:number,
    poster?: string,
    description: string,
    relateDate?:string,
    actors?:string,
    director?:string,
    country?:string,
    language?:string,
}