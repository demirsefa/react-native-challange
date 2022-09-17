import {Dimensions, StatusBar} from "react-native";

const STATUS_BAR = StatusBar.currentHeight || 24;
let {height, width} = Dimensions.get("window");
let screenSizes = Dimensions.get("screen");

const Sizes = {
    windowWidth: width,
    windowHeight: height,
    header: STATUS_BAR,
    screenHeight: screenSizes.height,
    titleFontSize: 20,
    standardFontSize: 14,
    standardButtonSize: 18,
    borderRadius: 8,
    buttonBorderRadius: 16,
};
export default Sizes;
