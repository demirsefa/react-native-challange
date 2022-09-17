import React, {useState} from "react";
import {Controller, useFormContext} from "react-hook-form";
import {TextInput as NativeTextInput, TextInputProps,} from "react-native";
import {inputStyles} from "../../../styles/components/form/input.styles";

interface InputProps extends TextInputProps {
    name: string
}

export default function Input({name, ...props}: InputProps) {
    const {control} = useFormContext();
    const [focus,setFocus]=useState(false);

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
                style={[
                    inputStyles.input,
                    focus?inputStyles.focusInput:undefined,
                    invalid?inputStyles.invalidInput:undefined,
                    props.style]}
            />;

        }}
        name={name}
        control={control}
        rules={{
            required: true,
        }}
    />;
}