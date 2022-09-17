import {KeyboardAvoidingView, Platform, ScrollView, View} from "react-native";
import React from "react";
import {globalStyles} from "../../../styles/global.styles";
import GeneralProps from "../../../props/general.props";

export function EscapeScrollView({children}:GeneralProps) {
    return <KeyboardAvoidingView keyboardVerticalOffset={-100} style={globalStyles.flexLarge}
                                 behavior= {(Platform.OS === 'ios')? "padding" : undefined}>
            <ScrollView keyboardShouldPersistTaps='handled' >
                <View style={globalStyles.flexLarge1}>
                    {children}
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
}
