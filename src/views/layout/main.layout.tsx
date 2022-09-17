import React from "react";
import {SafeAreaProvider} from "react-native-safe-area-context";
import GeneralProps from "../../props/general.props";
import {mainLayoutStyles} from "../../styles/layout/main.layout.styles";

export default function MainLayout({children}: GeneralProps) {

    return <SafeAreaProvider style={mainLayoutStyles.main}>
        {children}
    </SafeAreaProvider>
}