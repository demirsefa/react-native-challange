import {View, ViewProps} from "react-native";
import React from "react";
import {simpleLayoutStyles} from "../../styles/layout/simple.layout.styles";
import Text from "../components/text";
import {EscapeScrollView} from "../components/ui/escape-scroll.view";

interface SimpleLayoutProps extends ViewProps {
    withTitle?: boolean
}

export default function SimpleLayout({withTitle = false, children, ...props}: SimpleLayoutProps) {

    return   <EscapeScrollView  >
        <View  {...props} style={[simpleLayoutStyles.mainInner, props.style]}>
            <View style={simpleLayoutStyles.circle1}/>
            {withTitle && <View style={simpleLayoutStyles.titleContainer}>
                <Text style={simpleLayoutStyles.title}>
                    Tribe
                </Text>
                <Text style={simpleLayoutStyles.title}>
                    Challenge
                </Text>
            </View>}
            {children}
        </View>
    </EscapeScrollView>

}