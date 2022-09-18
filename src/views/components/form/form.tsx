import React, {useCallback, useEffect, useState} from "react";
import {FormProvider, useForm} from "react-hook-form";
import {FormDataType, FormProps} from "../../../models/form.model";
import Text from "../text";
import {StyleSheet, View} from "react-native";
import Colors from "../../../styles/abstract/colors";
import Sizes from "../../../styles/abstract/sizes";

interface FormInnerContextValues {
    onSubmit: () => void,
}

const styles = StyleSheet.create({
    loadingContainer: {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        alignItems: "center",
        justifyContent: "center",
    },
    loadingBg: {
        opacity: 0.1
    },
    loadingText: {
        fontSize: 30,
        letterSpacing: 2,
        color:"red"
    },
    formError:{
      minHeight:50,
        margin:10,
      justifyContent:"center",
        borderTopStartRadius:Sizes.borderRadius,
        borderTopEndRadius:Sizes.borderRadius,
      borderColor:Colors.error,
        borderWidth:1
    },
    formErrorText: {
        textAlign:"center",
        color:Colors.blackText
    }

});

export const FormInnerContext = React.createContext<FormInnerContextValues | null>(null);

function LoadingContainer({loading, children}: { loading: boolean, children: any }) {
    return <>
        <View style={loading ? styles.loadingBg : null}>
            {children}
        </View>
        {loading && <View style={styles.loadingContainer}>
            {loading && <View>
                <Text style={styles.loadingText}>Loading</Text>
            </View>}
        </View>}
    </>;
}

export default function Form<T, K = any>({children,data, onSubmit}: FormProps<T, K>): any {
    const methods = useForm();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        if(data){
            methods.reset(data, {
                keepDefaultValues: false,
            });
        }
    }, [methods.reset, data]);
    const onFormSubmit = useCallback((data: FormDataType<T>) => {
        setLoading(true);
        setError(null);
        const promise = onSubmit(data);
        if (promise) {
            Promise.resolve(promise).finally(() => {
                setLoading(false);
            }).catch((e)=>{
                setError(e);
            });
        } else {
            setLoading(false);
        }
    }, []);

    const innerContextValue: FormInnerContextValues = {
        onSubmit: () => {
            methods.handleSubmit(onFormSubmit)();
        },
    };
    return <View pointerEvents={loading ? "none" : "auto"} style={[{...(loading ? {opacity: 1} : {        paddingBottom:20,
        })}]}>
        {error&&<View style={styles.formError}>
            {typeof error==="string"&&<Text style={styles.formErrorText}>{error}</Text>}
        </View>}
        <View>
            <FormProvider  {...methods}>
                <FormInnerContext.Provider value={innerContextValue}>
                    <LoadingContainer loading={loading}>
                        {children}
                    </LoadingContainer>
                </FormInnerContext.Provider>
            </FormProvider>
        </View>
    </View>;
}