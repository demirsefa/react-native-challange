import {AppTypes} from "../types/app-types";

export interface AppReducerState {
    appInitializing: boolean;
    splashAnimate: boolean;

}

const defaultAppReducerState: AppReducerState = {
    appInitializing: true,
    splashAnimate: true,
};

export function AppReducer(state: AppReducerState = defaultAppReducerState, action: { type: AppTypes, payload: any }): AppReducerState {
    switch (action.type) {
        case AppTypes.INIT_APP:
            return {
                ...state,
                appInitializing: false,
            };
        case AppTypes.END_SPLASH_ANIMATION:
            return {
                ...state,
                splashAnimate: false

            }
    }

    return state;
}
