import {MovieModel} from "../../../models/movie.model";
import {Image, ToastAndroid, TouchableOpacity, View} from "react-native";
import React from "react";
import {movieItemStyles} from "../../../styles/components/screens/movie-item.styles";
import Text from "../text";
import AppContext from "../../../app-context/app.context";
import {useNavService} from "../../../services/nav.service";
import { Rating } from 'react-native-ratings';
import MoviesStorageService from "../../../services/movies-storage.service";
import {useMovieItem} from "../../../hooks/redux-hooks/app.hooks";

const notFoundImage=require("../../../assets/images/film.png");

export default function MovieItem({movieModel ,index}:{movieModel:MovieModel,index:number}) {
    const navService=useNavService();
    movieModel=useMovieItem(movieModel);

    return <TouchableOpacity onPress={()=>{navService.goToDetails(movieModel)}}
                             style={[movieItemStyles.container,index!==0?movieItemStyles.noFirstItem:movieItemStyles.firstItem]}>
        <View style={movieItemStyles.innerContainer}>
            <View style={movieItemStyles.imageContainer}>
                {!movieModel.poster? <Image style={movieItemStyles.notFoundImage} source={notFoundImage}/>:
                    <Image
                        style={movieItemStyles.image}
                        source={{uri:movieModel.poster,cache:AppContext.isProduction()?"force-cache":"reload"}} defaultSource={notFoundImage}/>}
            </View>
            <View style={movieItemStyles.mainContainer}>
                <Text>{movieModel.title}</Text>
                <Text>{movieModel.category}</Text>
                <Rating   onFinishRating={(rate:number)=>{
                    MoviesStorageService.modify({
                        ...movieModel,
                        rate:Number(rate)
                    })
                }}   imageSize={20} style={movieItemStyles.rating} startingValue={movieModel.rate}/>
            </View>
        </View>
        <View style={movieItemStyles.descContainer}>
            <Text numberOfLines={4} lineBreakMode={"tail"}>{movieModel.description}</Text>
        </View>
    </TouchableOpacity>
}
