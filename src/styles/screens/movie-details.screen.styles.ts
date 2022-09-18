import {StyleSheet} from "react-native";
import Colors from "../abstract/colors";
import Sizes from "../abstract/sizes";

export const movieDetailsScreenStyles = StyleSheet.create({

    poster: {
    },
    imageBackground:{
        position:"absolute",
        width:"100%",
        height:280,
        resizeMode:"cover",
        opacity:0.3
    },
    imageContainer: {
        marginTop:30,
        alignSelf:"center",
        backgroundColor:"#FFF",
        padding:3,
        width:200,
        justifyContent:"center",
        borderRadius:16,
        height:300,
        borderWidth:1,
        alignItems:"center",
        borderColor:Colors.borderColor,
    },
    image:{
        resizeMode: "cover",
        maxWidth:"100%",
        flex: 1,
        borderRadius:12,
        aspectRatio: 1 // Your aspect ratio
    },
    imagePlaceholder: {
        fontSize:30,
    },
    title: {
        fontSize:Sizes.titleFontSize,
        zIndex:100,
        fontWeight:"bold"
    },
    rating: {
        paddingVertical:10,
        alignItems:"flex-start"
    },
    desc: {
        padding:10,
    },
    bold: {
        fontWeight:"bold"
    },
    buttonContainer:{
        flexDirection:"row",
        paddingVertical:20,
    },
    editButton:{
        height:50,
        minWidth:75,
        marginHorizontal:20,
        justifyContent:"center",
        borderRadius:Sizes.borderRadius,
        backgroundColor:Colors.turquoise
    },
    deleteButton: {
        height:50,
        minWidth:75,
        marginHorizontal:20,
        justifyContent:"center",
        borderRadius:Sizes.borderRadius,
        backgroundColor:Colors.error
    },
    buttonText: {
        color:Colors.whiteText,
        textAlign:"center"
    }


});
