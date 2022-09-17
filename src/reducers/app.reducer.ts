import {AppTypes} from "../types/app-types";

export interface AppReducerState {
    appInitializing: boolean;

}

const defaultAppReducerState: AppReducerState = {
    appInitializing: true,
};

export function AppReducer(state: AppReducerState = defaultAppReducerState, action: { type: AppTypes, payload: any }): AppReducerState {
    switch (action.type) {
        case AppTypes.INIT_APP:
            return {
                ...state,
                appInitializing: false,
            };
    }

    return state;
}
