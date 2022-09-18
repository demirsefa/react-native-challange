import {NavigationProp} from "@react-navigation/core/lib/typescript/src/types";
import {BottomLayoutRouteEnum, RouteEnum, RouteStackParamList} from "../app-context/route.enum";
import {useNavigation} from "@react-navigation/native";
import {useMemo} from "react";
import {MovieModel} from "../models/movie.model";
import {FilterModel} from "../models/filter.model";

export default class NavService {
    constructor(public navigation: NavigationProp<RouteStackParamList>) {
    }

    public resetAndGoToLogin(loggedOut: boolean = false) {
        this.navigation.reset({
            index: 0,
            routes: [{ name: RouteEnum.login, params: { loggedOut } }]
        });
    }

    public landList() {
        this.navigation.reset({
            index: 0,
            routes: [{ name: RouteEnum.bottomLayout, params: { screen: BottomLayoutRouteEnum.movies } }]
        });
    }
    public goToMovies(filterModel?:FilterModel) {
        this.navigation.navigate(RouteEnum.bottomLayout, {
            screen: BottomLayoutRouteEnum.movies,
            params:{
                filterModel
            }
        });
    }
    public goToMoviesForm(movieModel?:MovieModel) {
        this.navigation.navigate(RouteEnum.bottomLayout, {
            screen: BottomLayoutRouteEnum.moviesForm,
            params:{
                movieModel,
            },
        });
    }
    public goToProfile() {
        this.navigation.navigate(RouteEnum.bottomLayout, {
            screen: BottomLayoutRouteEnum.profile,
        });
    }
    public goToDetails(movieModel:MovieModel){
        this.navigation.navigate(RouteEnum.bottomLayout, {
            screen: BottomLayoutRouteEnum.moviesDetails,
            params:{
                movieModel,
            }

        });

    }
    public goToFilters(){
        this.navigation.navigate(RouteEnum.filters);
    }

}

export function useNavService() {
    const navigation = useNavigation<NavigationProp<RouteStackParamList>>();
    return useMemo(() => new NavService(navigation), [navigation]);
}