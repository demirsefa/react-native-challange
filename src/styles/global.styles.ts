import {StyleSheet} from "react-native";
import Sizes from "./abstract/sizes";

export const globalStyles = StyleSheet.create({
    flexLarge: {
        flex: 1,
    },
    flexLarge1: {
        flex:1,
        minHeight:Sizes.windowHeight,
    },
});
