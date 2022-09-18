import {AppTypes} from "../types/app-types";
import {MovieModel} from "../models/movie.model";

export interface AppReducerState {
    appInitializing: boolean;
    splashAnimate: boolean;
    clipboard:string|null,
    movieList:Record<number,MovieModel>,
    refreshNumber:number

}

const defaultAppReducerState: AppReducerState = {
    appInitializing: true,
    splashAnimate: true,
    clipboard:null,
    movieList:{},
    refreshNumber:0
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
        case AppTypes.CHANGE_CLIPBOARD_IMDB:
            return{
                ...state,
                clipboard:action.payload
            };
        case AppTypes.REFRESH_LIST:
            return {
                ...state,
                refreshNumber:state.refreshNumber+1
            }
        case AppTypes.UPDATE_MOVIE_MODEL:
            state.movieList[action.payload.id]=action.payload;
            console.log("state.movieList[action.payload.id]",state.movieList[action.payload.id]);
            return state;
    }

    return state;
}
