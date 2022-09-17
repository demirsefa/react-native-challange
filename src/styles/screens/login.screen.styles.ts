import {StyleSheet} from "react-native";
import Sizes from "../abstract/sizes";

export const loginScreenStyles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        width: Sizes.windowWidth - 40,
        marginHorizontal: 20,
        marginVertical: 20,
        height: Sizes.screenHeight / 2,
        borderRadius: 16,
    },

});
