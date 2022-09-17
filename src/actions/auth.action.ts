import axios from 'axios';
import AuthStorageService from "../services/auth-storage.service";
import { AuthTypes} from "../types/app-types";

export default class AppAction {

    public static initAuth():any {
        return async (dispatch: any) => {
            const token = await AuthStorageService.getSecret();
            dispatch({
                type:AuthTypes.INIT_AUTH,
                payload:{}
            })

        };
    }
    public static login(authResponseModel: any): any {
        return async (dispatch: any) => {
            await AuthStorageService.setSecret(authResponseModel.token);
            dispatch({
                type:AuthTypes.USER_SIGNED_IN,
                payload:authResponseModel
            })
        };
    }

    public static signOut() :any{
        return async (dispatch: any) => {
            delete axios.defaults.headers.common["wauthorization"];
            await AuthStorageService.clearSecret();
            dispatch({
                type:AuthTypes.USER_SIGNED_OUT,
                payload: {}
            })
        };
    }
}

