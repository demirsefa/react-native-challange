    import EncryptedStorage from "react-native-encrypted-storage";
    import AppContext from "../app-context/app.context";

const authSecret: string = AppContext.getAuthStorageKey();
export default class AuthStorageService {

    public static getSecret(): Promise<string|null> {
        return EncryptedStorage.getItem(authSecret).then((r) => r).catch(() => null);
    }

    public static setSecret(secret:string): Promise<boolean> {
        return EncryptedStorage.setItem(authSecret, secret).then(() => true).catch(() => false);
    }

    public static clearSecret(): Promise<boolean> {
        return EncryptedStorage.removeItem(authSecret).then(() => true).catch(() => false);
    }

}
