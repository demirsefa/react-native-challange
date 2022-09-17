import React from "react";
import {StyleSheet, Text, View} from "react-native";

const styles = StyleSheet.create({
    errorScreen: {
        height: "100%",
    },
    errorTitle: {},
    errorText: {},
});

export default class MainErrorBoundary extends React.Component {
    state: any;

    constructor(props: any) {
        super(props);
        this.state = {hasError: false, error: ""};
    }

    static getDerivedStateFromError(error: any) {
        // Update state so the next render will show the fallback UI.
        return {hasError: true, error};
    }

    render() {
        // @ts-ignore
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <View style={styles.errorScreen}>
                <Text>
                    {JSON.stringify(this.state.error)}
                </Text>
            </View>;
        }
        // @ts-ignore
        return this.props.children;
    }
}