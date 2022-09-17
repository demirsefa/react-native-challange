import Config from "react-native-config";
export default class AppContext{

    static isProduction(){
        return Config.REACT_APP_ENV==="production";
    }
    static isNotProduction(){
        return Config.REACT_APP_ENV!=="production";
    }


    static getAuthStorageKey() {
        return Config.REACT_APP_AUTH_STORAGE_KEY;
    }

}