import {StyleSheet} from "react-native";
import Sizes from "../abstract/sizes";
import Colors from "../abstract/colors";

export const BottomInnerLayoutStyles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor:Colors.backgroundWhite,
        maxHeight:Sizes.screenHeight-(Sizes.bottomMenuHeight+Sizes.statusBarHeight)
    },

});
