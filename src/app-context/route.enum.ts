import {MovieModel} from "../models/movie.model";
import {FilterModel} from "../models/filter.model";

export enum RouteEnum {
    login = "login",
    bottomLayout = "bottomLayout",
    filters="filters",
}

export enum BottomLayoutRouteEnum {
    profile = "profile",
    movies = "movies",
    moviesDetails = "moviesDetails",
    moviesForm = "moviesForm",
}

export type RouteStackParamList = {
    bottomLayout: { screen: BottomLayoutRouteEnum, params?: any }
    filters: undefined,
    login: undefined,
    profile: undefined,
    movies: { filterModel?:FilterModel },
    moviesDetails: { movieModel:MovieModel},
    moviesForm: { movieModel?:MovieModel},
}
