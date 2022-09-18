import BottomInnerLayout from "../layout/bottom-inner.layout";
import React, {useCallback, useState} from "react";
import {FlatList, RefreshControl, View} from "react-native";
import {LoadingContainer} from "../components/loading-container";
import MoviesStorageService from "../../services/movies-storage.service";
import {MovieModel} from "../../models/movie.model";
import useAsyncEffect from "../../hooks/use-async-effect";
import MovieItem from "../components/screens/movie-item";
import {useMovieItem, useRefreshNumber} from "../../hooks/redux-hooks/app.hooks";
import {store} from "../../store/store";
import AppAction from "../../actions/app.action";
import {RouteProp, useFocusEffect, useRoute} from "@react-navigation/native";
import {BottomLayoutRouteEnum, RouteStackParamList} from "../../app-context/route.enum";

export default function MovieListScreen() {
    const [data,setData]=useState<MovieModel[]|null>(null);
    const [refreshing, setRefreshing] = useState(false);
    const refreshNumber=useRefreshNumber();
    const route = useRoute<RouteProp<RouteStackParamList, BottomLayoutRouteEnum.movies>>();
    let params=route.params;
    const filterModel=params?params.filterModel:undefined;
    const [,rerender]=useState(0);
    const onRefresh = useCallback(() => {
        return store.dispatch(AppAction.refreshList());
    },[]);
    useFocusEffect(useCallback(()=>{
        rerender(render=>render+1);
    },[]))
    useAsyncEffect(()=>{
        setRefreshing(true);
        return MoviesStorageService.getList(filterModel).then(movieList=>setData(movieList)).finally(()=>setRefreshing(false))
    },[refreshNumber,filterModel]);
    return <BottomInnerLayout>
        <LoadingContainer loading={!data||refreshing}>
            <FlatList<MovieModel>
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
                style={{height:"100%"}}
                data={data}
                renderItem={(data)=>
                    <MovieItem movieModel={data.item} index={data.index} key={data.index}/>}/>
        </LoadingContainer>
    </BottomInnerLayout>
}