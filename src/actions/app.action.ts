import {AppTypes} from "../types/app-types";
import {MovieModel} from "../models/movie.model";

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
    public static changeClipboardImdb(clipboard:string|null) :any{
        return async (dispatch: any) => {
            dispatch({
                type:AppTypes.CHANGE_CLIPBOARD_IMDB,
                payload:clipboard
            })
        };
    }
    public static updateMovie(movieModel:MovieModel) :any{
        return async (dispatch: any) => {
            dispatch({
                type:AppTypes.UPDATE_MOVIE_MODEL,
                payload:movieModel
            })
        };
    }
    public static refreshList() :any{
        return async (dispatch: any) => {
            dispatch({
                type:AppTypes.REFRESH_LIST,
            })
        };
    }

}

