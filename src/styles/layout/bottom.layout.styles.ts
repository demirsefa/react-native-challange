import {StyleSheet} from "react-native";
import Sizes from "../abstract/sizes";
import Colors from "../abstract/colors";

export const bottomLayoutStyles = StyleSheet.create({
    main: {
        flex: 1,
    },
    screen:{
        flex:1
    },
    bottomMenu:{
        height:Sizes.bottomMenuHeight,
        backgroundColor:"#FCFCFC",
        alignItems:"center"
    },
    bottomMenuImage:{
      resizeMode:"contain",
      width:40
    },
    bottomMenuInner: {
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center",
        height:Sizes.bottomMenuHeight,
        maxWidth:360,
        width:"100%",
        borderTopColor:Colors.borderColor,
        borderTopWidth:1,
    }


});
