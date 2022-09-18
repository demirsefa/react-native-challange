import {StyleSheet} from "react-native";
import Sizes from "../abstract/sizes";

export const authLayoutStyles = StyleSheet.create({
    main: {
        flex: 1,
    },
    mainInner: {
        flex:1,
        height:"100%",
        backgroundColor: "#d3d3d3",
        alignItems: "center",
        justifyContent: "flex-end"
    },
    circle1: {
        position: "absolute",
        top: -Sizes.windowWidth / 3,
        width: Sizes.windowWidth * 2,
        height: Sizes.screenHeight - Sizes.screenHeight / 8,
        borderRadius: Sizes.windowWidth - Sizes.windowWidth / 4,
        backgroundColor: "#ad4848",
    },
    titleContainer: {
        zIndex: 120,
        marginBottom: 20
    },
    title: {
        fontSize: 50,
        textAlign: "center",
        letterSpacing: 1,
        color: "#ffffff",
        fontWeight: "bold",
    }
});
