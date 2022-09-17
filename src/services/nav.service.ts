import {NavigationProp} from "@react-navigation/core/lib/typescript/src/types";
import {BottomLayoutRouteEnum, RouteEnum, RouteStackParamList} from "../app-context/route.enum";
import {useNavigation} from "@react-navigation/native";
import {useMemo} from "react";

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

}

export function useNavService() {
    const navigation = useNavigation<NavigationProp<RouteStackParamList>>();
    return useMemo(() => new NavService(navigation), [navigation]);
}