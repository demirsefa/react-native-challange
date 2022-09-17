import { combineReducers } from "redux";
import { AppReducer } from "./app.reducer";
import {AuthReducer} from "./auth.reducer";

const rootReducer = combineReducers({
    app: AppReducer,
    auth:AuthReducer
});

export default rootReducer;
