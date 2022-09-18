import {useSelector} from "react-redux";
import {AppReducerState} from "../../reducers/app.reducer";
import {MovieModel} from "../../models/movie.model";
import { useEffect, useState} from "react";

export function useApp(): AppReducerState {
    return useSelector(({app}: { app: AppReducerState }) => app);
}

export function useAppInitializing(): boolean {
    return useSelector(({app}: { app: AppReducerState }) => app.appInitializing);
}

export function useClipboardImdb():string|null{
    return useSelector(({app}: { app: AppReducerState }) => app.clipboard)
}

export function useMovieItem(movieModel:MovieModel):MovieModel{
    const [movie,setMovie]=useState(movieModel);

    const storeMovie = (useSelector(({app}: { app: AppReducerState }) => {
        return app.movieList[movieModel.id];
    }));
    useEffect(()=>{
        if(storeMovie){
            setMovie(storeMovie);
        }
    },[storeMovie]);
    return movie;
}

export function useRefreshNumber():number{
    return (useSelector(({app}: { app: AppReducerState }) => app.refreshNumber));
}

