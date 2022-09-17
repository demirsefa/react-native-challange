import AuthStorageService from "../services/auth-storage.service";
import {AuthTypes} from "../types/app-types";
import {UserModel} from "../models/user.model";

export default class AuthAction {

    public static initAuth(): any {
        return async (dispatch: any) => {
            const userModel = await AuthStorageService.getUser();
            console.log("initAuth---",userModel);
            dispatch({
                type: AuthTypes.INIT_AUTH,
                payload: userModel
            })

        };
    }


    public static login(userModel: UserModel): any {
        return async (dispatch: any) => {
            console.log("login---",userModel);
            await AuthStorageService.setUser(userModel);
            dispatch({
                type: AuthTypes.USER_SIGNED_IN,
                payload: userModel
            })
        };
    }

    public static signOut(): any {
        return async (dispatch: any) => {
            await AuthStorageService.removeUser();
            dispatch({
                type: AuthTypes.USER_SIGNED_OUT
            })
        };
    }
}

