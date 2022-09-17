import {useSelector} from "react-redux";
import {AppReducerState} from "../../reducers/app.reducer";
import {AuthReducerState} from "../../reducers/auth.reducer";
import {UserModel} from "../../models/user.model";

export function useAuth(): AuthReducerState {
    return useSelector(({auth}: { auth: AuthReducerState }) => auth);
}

export function useAuthInitializing(): boolean {
    return useSelector(({auth}: { auth: AuthReducerState }) => auth.authInitializing);
}

export function useUser(): UserModel|null {
    return useSelector(({auth}: { auth: AuthReducerState }) => auth.userModel);
}
