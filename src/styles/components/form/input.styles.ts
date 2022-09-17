import {StyleSheet} from "react-native";
import Sizes from "../../abstract/sizes";
import Colors from "../../abstract/colors";

export const inputStyles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: Colors.borderColor,
        borderRadius:Sizes.borderRadius
    },

    focusInput:{
        borderColor: Colors.turquoise,
    },
    invalidInput:{
        borderColor: Colors.error,
    }

});
