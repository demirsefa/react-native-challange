import {StyleSheet} from "react-native";
import Colors from "../../abstract/colors";

export const movieItemStyles = StyleSheet.create({
    container: {
        maxHeight:300,
        marginTop:15,
    },
    innerContainer: {
        flexDirection:"row",
        minHeight:75,


    },
    imageContainer: {
        width:75,
        height:75,
        alignItems:"center",
        justifyContent:"flex-start",
    },
    mainContainer:{
        flex:1,
        padding:5,
    },
    notFoundImage: {
        resizeMode:"contain",
        height:75,
        width:50,
    },
    image: {
        resizeMode: 'contain',
        flex: 1,
        aspectRatio: 1 // Your aspect ratio
    },
    descContainer: {
        padding:10,
    },
    noFirstItem: {
        borderTopWidth:1,
        borderTopColor:Colors.borderColor,
        paddingTop:20,
    },
    rating:{
        alignItems:"flex-start",
        marginTop:5
    },
    firstItem: {
        }


});
