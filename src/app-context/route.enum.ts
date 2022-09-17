export enum RouteEnum {
    login = "login",
    bottomLayout = "bottomLayout",
}

export enum BottomLayoutRouteEnum {
    profile = "profile",
    movies = "movies",
    moviesDetails = "moviesDetails",
    moviesForm = "moviesForm",
}

export type RouteStackParamList = {
    bottomLayout: { screen: BottomLayoutRouteEnum, params?: any }
    login: undefined,
    profile: undefined,
    movies: undefined,
    moviesDetails: undefined,
    moviesForm: undefined,
}
