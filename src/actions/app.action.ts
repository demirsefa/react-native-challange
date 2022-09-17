import {AppTypes} from "../types/app-types";

export default class AppAction {

    static initApp(): any {
        return async (dispatch: any) => {
            try {
                dispatch({
                    type: AppTypes.INIT_APP
                });

            } catch (e) {
                //log it
            }
        };
    }


}

