import {StyleSheet} from "react-native";
import Colors from "../abstract/colors";
import Sizes from "../abstract/sizes";

export const movieFormScreenStyles = StyleSheet.create({
    modal: {
        zIndex:100,
        backgroundColor:"#dedede",
        margin:40,
        height:Sizes.screenHeight-100,
    },
    modalBg: {
        position:"absolute",
        top:0,right:0,bottom:0,left:0,
        zIndex:1,
        width:Sizes.windowWidth,
        height:Sizes.screenHeight,
        backgroundColor:"rgba(185,185,185,0.59)"

    },
    container:{
        position:"relative",
    },
    fetchButton:{
        height:50,
        paddingHorizontal:20,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"orange"
    },
    fetchModelItem: {
        marginBottom:10,
        backgroundColor:"white",
        padding:10,
    },
    borderBottomLine: {
        borderBottomColor:Colors.borderColor,
        borderBottomWidth:1,
    }

});
