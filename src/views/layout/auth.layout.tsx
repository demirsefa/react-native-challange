import {View, ViewProps} from "react-native";
import React from "react";
import {authLayoutStyles} from "../../styles/layout/auth.layout.styles";
import Text from "../components/text";
import {EscapeScrollView} from "../components/ui/escape-scroll.view";

interface SimpleLayoutProps extends ViewProps {
    withTitle?: boolean
}

export default function AuthLayout({withTitle = false, children, ...props}: SimpleLayoutProps) {

    return   <EscapeScrollView  >
        <View  {...props} style={[authLayoutStyles.mainInner, props.style]}>
            <View style={authLayoutStyles.circle1}/>
            {withTitle && <View style={authLayoutStyles.titleContainer}>
                <Text style={authLayoutStyles.title}>
                    Tribe
                </Text>
                <Text style={authLayoutStyles.title}>
                    Challenge
                </Text>
            </View>}
            {children}
        </View>
    </EscapeScrollView>

}