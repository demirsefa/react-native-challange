import React from "react";
import {StyleSheet} from "react-native";
import {useFormContext} from "react-hook-form";
import Text from "../text";
import errorTextHandler from "../../../helpers/error-text-handler";

const styles = StyleSheet.create({
    inputError: {
        bottom: 0,
        minHeight: 20,
        paddingLeft: 8
    }
});

export function InputError<T>(props: { name: string, style?: any }) {
    const {formState: {errors}} = useFormContext();
    if (!(errors && errors[props.name])) return null;

    return <Text style={styles.inputError}>
        {errorTextHandler(props.name, errors)}
    </Text>
}