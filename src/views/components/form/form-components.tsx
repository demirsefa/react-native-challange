import React from "react";
import { StyleSheet, TouchableOpacity, View, ViewStyle} from "react-native";
import Text from "../text";
import {useFormSubmit} from "./form-inner.context";
import Sizes from "../../../styles/abstract/sizes";

const styles = StyleSheet.create({
    formBox: {
        marginVertical: 7,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    label: {
        marginLeft: 10
    },
    formButtonContainer: {
        alignItems: "center",
    },
    submit:{
        minWidth:100,
        padding:10,
        borderRadius:Sizes.buttonBorderRadius,
      backgroundColor:"#0e68a8"
    },
    submitText: {
        fontSize:Sizes.standardButtonSize,
        textAlign:"center",
        color:"#FFF"
    }
});


export function FormBox({children, style}: { children: any, style?: ViewStyle }) {
    return <View style={[styles.formBox, style]}>{children}</View>;
}

export function Label({children}: { children: string }) {
    return <Text style={styles.label}>{children}</Text>
}

export function FormButtonContainer({children, style}: any) {
    return <View style={[styles.formButtonContainer, style]}>{children}</View>;
}

export function Submit({children}: { children: string }) {
    const onSubmit = useFormSubmit();
    return <TouchableOpacity style={styles.submit} onPress={onSubmit}>
        <Text style={styles.submitText}>{children}</Text>
    </TouchableOpacity>
}
