import {View} from "react-native";
import GeneralProps from "../../props/general.props";

export default function simpleLayout({children}:GeneralProps){

    return <View>
        {children}
    </View>
}