import {StyleSheet} from "react-native";
import Colors from "../abstract/colors";
import Sizes from "../abstract/sizes";
export const filterScreenStyles = StyleSheet.create({
    filter:{
        padding:10
    },
    label: {
        fontWeight:"bold",
        color:"black",
        marginLeft:5,
        marginBottom:3
    },
    start: {
        fontSize:40,
        color:"#FDCC0D"
    },
    starButton: {
        flexDirection:"row",
        alignItems:"center"
    },
    selectedText: {
        color:"black"
    },

    sortContainer: {
        flexDirection:"row",
    },
    sortButton: {
        padding:15,
        margin:5,
        backgroundColor:"#ffffff",
        borderWidth:1,
        borderColor:Colors.borderColor,
        borderRadius:Sizes.borderRadius
    }

});
