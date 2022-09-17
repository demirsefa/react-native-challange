import React, {useEffect} from "react";
import {NavigationContainer} from '@react-navigation/native';
import {RouteEnum} from "./app-context/route.enum";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useApp} from "./hooks/redux-hooks/app.hooks";
import {useAuth} from "./hooks/redux-hooks/auth.hooks";
import SplashScreen from "./views/screens/splash.screen";
import MainLayout from "./views/layout/main.layout";
import LoginScreen from "./views/screens/login.screen";
import {store} from "./store/store";
import AppAction from "./actions/app.action";
import AuthAction from "./actions/auth.action";
import BottomScreen from "./views/screens/bottom.screen";

const Stack = createNativeStackNavigator();

export default function AppInner() {
    const {appInitializing, splashAnimate} = useApp();
    const {authInitializing, userModel} = useAuth();
    console.log("userModel",userModel);
    useEffect(() => {
        store.dispatch(AppAction.initApp());
        store.dispatch(AuthAction.initAuth());
    }, []);

    if (appInitializing || authInitializing || splashAnimate) {
        return <SplashScreen/>
    }
    return <MainLayout>
        <NavigationContainer>
            <Stack.Navigator initialRouteName={!!userModel ? RouteEnum.bottomLayout : RouteEnum.login}>
                <Stack.Screen name={RouteEnum.login}
                              options={{
                                  headerShown: false,
                                  statusBarHidden:true
                              }}
                              component={LoginScreen}/>
                <Stack.Screen name={RouteEnum.bottomLayout}
                              options={{
                                  headerShown: false,
                                  statusBarHidden:true
                              }}
                              component={BottomScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    </MainLayout>
}