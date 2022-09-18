import React, {useEffect, useRef, useState} from "react";
import {Animated} from "react-native";
import Text from "../components/text";
import Sizes from "../../styles/abstract/sizes";
import {store} from "../../store/store";
import AppAction from "../../actions/app.action";
import AuthLayout from "../layout/auth.layout";
import {authLayoutStyles} from "../../styles/layout/auth.layout.styles";

function SplashTitle(props: any) {
    const [animStatus, setAnimStatus] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setAnimStatus(true);
        }, 500);
        setTimeout(() => {
            store.dispatch(AppAction.endSplashAnimation())
        }, 2000);
    }, [])
    const transformAnim1 = useRef(new Animated.Value(Sizes.screenHeight)).current  // Initial value for opacity: 0
    const transformAnim2 = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

    useEffect(() => {
        Animated.timing(
            transformAnim1,
            {
                toValue: 0,
                duration: 500,
                //Tribe için: https://stackoverflow.com/a/66920360
                useNativeDriver: true,
                delay: 0
            }
        ).start();
    }, [transformAnim1]);
    useEffect(() => {
        Animated.timing(
            transformAnim2,
            {
                toValue: -Sizes.windowHeight,
                duration: 500,
                //Tribe için: https://stackoverflow.com/a/66920360
                useNativeDriver: true,
                delay: 1000
            }
        ).start();
    }, [transformAnim2])
    return (
        <Animated.View
            style={{
                ...props.style,
                zIndex: 100,
                transform: [{translateY: animStatus ? transformAnim2 : transformAnim1}]
            }}
        >
            <Text style={authLayoutStyles.title}>
                Tribe
            </Text>
            <Text style={authLayoutStyles.title}>
                Challenge
            </Text>
        </Animated.View>
    );
}

export default function SplashScreen() {

    return <AuthLayout style={{justifyContent:"center"}}>
        <SplashTitle/>
    </AuthLayout>
}