import EncryptedStorage from "react-native-encrypted-storage";
import AppContext from "../app-context/app.context";
import {UserModel} from "../models/user.model";

const authSecret: string = AppContext.getAuthStorageKey();
export default class AuthStorageService {

    public static getUser(): Promise<UserModel | null> {
        return EncryptedStorage.getItem(authSecret).then((data) => data?JSON.parse(data):null).catch(() => null);
    }

    public static setUser(userModel: UserModel): Promise<boolean> {
        return EncryptedStorage.setItem(authSecret, JSON.stringify(userModel)).then(() => true).catch(() => false);
    }

    public static removeUser(): Promise<boolean> {
        return EncryptedStorage.removeItem(authSecret).then(() => true).catch(() => false);
    }

}
