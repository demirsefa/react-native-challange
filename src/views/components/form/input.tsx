import React, {useCallback, useState} from "react";
import {Controller, useFormContext} from "react-hook-form";
import {TextInput as NativeTextInput, TextInputProps,} from "react-native";
import {inputStyles} from "../../../styles/components/form/input.styles";
import {useFocusEffect} from "@react-navigation/native";

interface InputProps extends TextInputProps {
    name: string,
    textarea?:boolean,
    required?:boolean
}

export default function Input({name,required=false,textarea=false, ...props}: InputProps) {
    const {control} = useFormContext();
    const [focus,setFocus]=useState(false);
    const [,rerender]=useState();
    useFocusEffect(useCallback(()=>{
        console.log("xxxaa1")

    },[]));
    return <Controller

        render={({
                     field: {onChange, value,onBlur},
                     fieldState: {invalid}
                 }) => {
            return <NativeTextInput
                value={value}
                onBlur={()=>{setFocus(false);onBlur();}}
                onFocus={()=>setFocus(true)}
                onChangeText={onChange}
                {...props}
                multiline={props.multiline!==undefined?props.multiline:textarea}
                numberOfLines={props.numberOfLines!==undefined?props.numberOfLines:(textarea?4:undefined)}
                style={[
                    inputStyles.input,
                    focus?inputStyles.focusInput:undefined,
                    invalid?inputStyles.invalidInput:undefined,
                    textarea?inputStyles.textAreaInput:undefined,
                    props.style]}
            />;

        }}
        name={name}
        shouldUnregister
        control={control}
        rules={{
            required,
        }}
    />;
}