import { View} from "react-native";
import {BottomInnerLayoutStyles} from "../../styles/layout/bottom-inner.layout.styles";

export default function BottomInnerLayout({children}: { children:any }) {

    return <View style={BottomInnerLayoutStyles.main}>
            {children}
    </View>
}