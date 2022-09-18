import BottomInnerLayout from "../layout/bottom-inner.layout";
import {BottomLayoutRouteEnum, RouteStackParamList} from "../../app-context/route.enum";
import {RouteProp, useRoute} from "@react-navigation/native";
import {Image, ImageBackground, ScrollView, ToastAndroid, TouchableOpacity, View} from "react-native";
import {movieDetailsScreenStyles} from "../../styles/screens/movie-details.screen.styles";
import Text from "../components/text";
import {useState} from "react";
import MoviesStorageService from "../../services/movies-storage.service";
import {useNavService} from "../../services/nav.service";
const notFoundImage=require("../../assets/images/film.png");
import { Rating } from 'react-native-ratings';
import {useMovieItem} from "../../hooks/redux-hooks/app.hooks";
import {store} from "../../store/store";
import AppAction from "../../actions/app.action";

export default function MovieDetailsScreen() {
    const route = useRoute<RouteProp<RouteStackParamList, BottomLayoutRouteEnum.moviesDetails>>();
    const navService=useNavService();
    let {movieModel}=route.params;
    movieModel=useMovieItem(movieModel);

    const [imageError,setImageError]=useState(false);
    return <BottomInnerLayout>
        <ScrollView>
            <View style={movieDetailsScreenStyles.poster}>
                <ImageBackground style={movieDetailsScreenStyles.imageBackground}
                                 source={imageError||!movieModel.poster?notFoundImage:{uri:movieModel.poster}}/>
                <View style={movieDetailsScreenStyles.imageContainer}>
                    {imageError||!movieModel.poster?<Text style={movieDetailsScreenStyles.imagePlaceholder}>Not Found</Text>:
                        <Image style={movieDetailsScreenStyles.image} onError={()=>setImageError(true)}
                               source={{uri:movieModel.poster}}/>}
                </View>
            </View>
            <View style={movieDetailsScreenStyles.desc}>
                <Text style={movieDetailsScreenStyles.title}>{movieModel.title}</Text>
                <Rating startingValue={movieModel.rate} onFinishRating={(rate:number)=>{
                    MoviesStorageService.modify({
                        ...movieModel,
                        rate:Number(rate)
                    })
                }} style={movieDetailsScreenStyles.rating}/>
                {movieModel.description&&<View>
                    <Text style={movieDetailsScreenStyles.bold}>Description</Text>
                    <Text>{movieModel.description}</Text>
                </View>}
                {movieModel.director&&<View>
                    <Text style={movieDetailsScreenStyles.bold}>Directors</Text>
                    <Text>{movieModel.director}</Text>
                </View>}
                {movieModel.actors&&<View>
                    <Text style={movieDetailsScreenStyles.bold}>Actors</Text>
                    <Text>{movieModel.actors}</Text>
                </View>}
                {movieModel.country&&<View>
                    <Text style={movieDetailsScreenStyles.bold}>Country</Text>
                    <Text>{movieModel.country}</Text>
                </View>}
                {movieModel.language&&<View>
                    <Text style={movieDetailsScreenStyles.bold}>Language</Text>
                    <Text>{movieModel.language}</Text>
                </View>}
                {movieModel.releaseDate&&<View>
                    <Text style={movieDetailsScreenStyles.bold}>ReleaseDate</Text>
                    <Text>{movieModel.releaseDate}</Text>
                </View>}
                <View style={movieDetailsScreenStyles.buttonContainer}>
                    <TouchableOpacity style={movieDetailsScreenStyles.editButton} onPress={()=>{
                        navService.goToMoviesForm(movieModel);
                    }}><Text style={movieDetailsScreenStyles.buttonText}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={movieDetailsScreenStyles.deleteButton} onPress={()=>{
                        MoviesStorageService.remove(movieModel.id).then(()=>{
                            return store.dispatch(AppAction.refreshList()).then(()=>{
                                navService.goToMovies();
                            });
                        })
                    }}><Text style={movieDetailsScreenStyles.buttonText}>Delete</Text></TouchableOpacity>

                </View>
            </View>
        </ScrollView>
    </BottomInnerLayout>
}