import Clipboard from "@react-native-clipboard/clipboard";
import {EmitterSubscription} from "react-native";
import {store} from "../store/store";
import AppAction from "../actions/app.action";

export default class NativeService {

    public static listenClipboard(): EmitterSubscription{
        return Clipboard.addListener( ()=>{
            Clipboard.hasString().then((check:boolean)=> {
                if (check) {
                    Clipboard.getString().then((value: string) => {
                        try{
                            if(/^ev\d{7}\/\d{4}(-\d)?$|^(ch|co|ev|nm|tt)\d{7}$/.test(value)){
                                store.dispatch(AppAction.changeClipboardImdb(value));
                            }
                        }catch (e){
                            console.log("[NativeService.listenClipboard] error",e);
                        }
                    });
                }
            });
        });
    }

    public static removeAllClipboardListeners(){
        Clipboard.removeAllListeners()
    }
}