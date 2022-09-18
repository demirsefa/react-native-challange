import {StyleSheet, View} from "react-native";
import Text from "./text";
import React from "react";
import Sizes from "../../styles/abstract/sizes";
import Colors from "../../styles/abstract/colors";

const styles = StyleSheet.create({
    loadingContainer: {
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
        height:Sizes.windowHeight,
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

});
export function LoadingContainer({loading, children}: { loading: boolean, children: any }) {
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