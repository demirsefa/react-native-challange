import {View} from "react-native";
import GeneralProps from "../../props/general.props";

export default function BottomLayout({children}:GeneralProps){

    return <View>
        {children}
    </View>
}