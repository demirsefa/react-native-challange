import {Button, Image, Platform, TouchableOpacity, View} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {BottomLayoutRouteEnum} from "../../app-context/route.enum";
import React from "react";
import MovieListScreen from "./movie.list.screen";
import MovieFormScreen from "./movie.form.screen";
import MovieDetailsScreen from "./movie.details.screen";
import FetchListScreen from "./fetch.list.screen";
import BottomLayout from "../layout/bottom.layout";
import ProfileScreen from "./profile.screen";
import Colors from "../../styles/abstract/colors";
import {useNavService} from "../../services/nav.service";
const StackBottom = createNativeStackNavigator();

export default function BottomScreen() {
    const navService=useNavService();
    return <BottomLayout>
        <StackBottom.Navigator screenOptions={{
            headerStyle:{
                backgroundColor:Colors.orange
            },
            headerTitleStyle:{
                color:Colors.whiteText
            },
            headerTintColor: Colors.whiteText,
            statusBarColor:Platform.select({ios:undefined,android:Colors.orange}),
            statusBarStyle:Platform.select({ios:undefined,android:"dark"}),
            }} initialRouteName={BottomLayoutRouteEnum.movies}>
            <StackBottom.Screen name={BottomLayoutRouteEnum.movies}
                                options={{
                                    title:"Movies",
                                    animation:"slide_from_left",
                                    headerLeft: ()=>(
                                        <Image style={{marginRight:10}} source={require("../../assets/images/video-camera.png")}/>
                                    ),
                                    headerRight: () => (
                                        <TouchableOpacity onPress={()=>navService.goToFilters()}>
                                            <Image source={require("../../assets/images/filter.png")}/>
                                        </TouchableOpacity>
                                    )
                                }}
                                component={MovieListScreen}/>
            <StackBottom.Screen name={BottomLayoutRouteEnum.moviesForm}
                                options={(params)=>({
                                    // @ts-ignore
                                    title:params.route.params.movieModel?"Modify":"Insert",
                                    animation:"slide_from_bottom"
                                })}
                                component={MovieFormScreen}/>
            <StackBottom.Screen name={BottomLayoutRouteEnum.moviesDetails}
                                options={{
                                    title:"Details",
                                    animation:"slide_from_bottom"
                                }}
                                component={MovieDetailsScreen}/>
            <StackBottom.Screen name={BottomLayoutRouteEnum.profile}
                                options={{
                                    title:"Profile",
                                    animation:"slide_from_left"
                                }}
                                component={ProfileScreen}/>

        </StackBottom.Navigator>
    </BottomLayout>
}