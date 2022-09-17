import {useSelector} from "react-redux";
import {AppReducerState} from "../../reducers/app.reducer";

export function useApp(): AppReducerState {
    return useSelector(({app}: { app: AppReducerState }) => app);
}

export function useAppInitializing(): boolean {
    return useSelector(({app}: { app: AppReducerState }) => app.appInitializing);
}
