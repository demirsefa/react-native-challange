import {UserModel} from "../models/user.model";
import {AuthTypes} from "../types/app-types";

export interface AuthReducerState{
    authInitializing: boolean;
    userModel:UserModel|null

}
const defaultAppReducerState: AuthReducerState = {
    authInitializing:true,
    userModel:null,
};

export function AuthReducer(state: AuthReducerState = defaultAppReducerState, action: { type: AuthTypes, payload: any }): AuthReducerState {
    switch (action.type) {
        case AuthTypes.INIT_AUTH:
            return {
                ...state,
                authInitializing:false,
                userModel:action.payload
            };

        case AuthTypes.USER_SIGNED_IN:
            return{
                ...state,
                userModel:action.payload
            };
        case AuthTypes.USER_SIGNED_OUT:
            return{
                ...state,
                userModel:null
            };
}

    return state;
}
