import Config from "react-native-config";

export default class AppContext {

    public static isProduction() {
        return Config.REACT_APP_ENV === "production";
    }

    public static isNotProduction() {
        return Config.REACT_APP_ENV !== "production";
    }


    public static getAuthStorageKey() {
        return Config.REACT_APP_AUTH_STORAGE_KEY;
    }
    public static getMoviesStorageKey() {
        return Config.REACT_APP_MOVIE_STORAGE_KEY;
    }

}