import React from 'react';
import {Provider} from "react-redux";
import {enableScreens} from "react-native-screens";
import {store} from "./store/store";
import {UIManager} from "react-native";
import AppInner from "./app-inner";
import MainErrorBoundary from "./views/error-boundries/main-error-boundry";


enableScreens();
UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);

export default function App() {
    return (
        <Provider store={store}>
            <MainErrorBoundary>
                <AppInner/>
            </MainErrorBoundary>
        </Provider>
    );
}
