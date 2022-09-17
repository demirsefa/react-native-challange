import {LoginRequestModel} from "../models/login.request.model";
import FakeBackendAuthService from "./backend-fake-services/fake-backend-auth.service";
import {UserModel} from "../models/user.model";

export default class AuthService {
    public static login(requestModel: LoginRequestModel):Promise<UserModel> {
        //normalde axios request olmalı. Fakat case durumunda fake backend kullandım.
        return FakeBackendAuthService.login(requestModel);
    }
}
