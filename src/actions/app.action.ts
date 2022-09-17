import {AppTypes} from "../types/app-types";

export default class AppAction {

    public static initApp(): any {
        return async (dispatch: any) => {
            dispatch({
                type: AppTypes.INIT_APP
            });
        };
    }

    public static endSplashAnimation(): any {
        return async (dispatch: any) => {
            dispatch({
                type: AppTypes.END_SPLASH_ANIMATION
            });
        };
    }


}

