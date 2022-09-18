import AppContext from "../app-context/app.context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {MovieModel} from "../models/movie.model";
import {dynamicSort} from "../helpers/dynamic-sort";
import {MovieRequestModel} from "../models/movie.request.model";
import {store} from "../store/store";
import AppAction from "../actions/app.action";
import {FilterModel} from "../models/filter.model";




const moviesSecret: string = AppContext.getMoviesStorageKey();
export default class MoviesStorageService {

    public static async getList(filterModel?:FilterModel): Promise<MovieModel[] | []> {
        let list:MovieModel[] = await AsyncStorage.getItem(moviesSecret).then((data) => data ? JSON.parse(data) : []).catch(() => []);
        if(filterModel){
            if(filterModel.category){
                list=list.filter((movie:MovieModel)=>(movie.category&&typeof movie.category==="string"&&movie.category.includes)?(movie.category.toLowerCase()).includes(filterModel.category.toLowerCase()):false);
            }
            if(filterModel.rate){
                list=list.filter((movie:MovieModel)=>movie.rate===filterModel.rate);
            }
            if(filterModel.sort){
                const sortSymbol=filterModel.sortType==="asc"?"":"-";
                list=list.sort(dynamicSort(sortSymbol+filterModel.sort));
            }
        }

        return list;
    }

    public static async get(movieModelId:number): Promise<MovieModel> {
        let list:MovieModel[] = await AsyncStorage.getItem(moviesSecret).then((data) => data ? JSON.parse(data) : []).catch(() => []);
        const getMovie=list.filter((movie:MovieModel)=>movie.id===movieModelId)[0];
        if(!getMovie) throw new Error("[MoviesStorageService.get] movieModel should exist")
        return getMovie;
    }
    public static async insert(movieModel: MovieRequestModel): Promise<boolean> {
        let list:MovieModel[] = await AsyncStorage.getItem(moviesSecret).then((data) => data ? JSON.parse(data) : []).catch(() => []);
        list.push({
            ...movieModel,
            rate:0,
            createDate:new Date(),
            id:list[list.length-1]?list[list.length-1].id+1:1,
        });
        return await AsyncStorage.setItem(moviesSecret,JSON.stringify(list)).then(() => true).catch(() => false);
    }

    public static async modify(movieModel: MovieRequestModel): Promise<boolean> {
        let list:MovieModel[] = await AsyncStorage.getItem(moviesSecret).then((data) => data ? JSON.parse(data) : []).catch(() => []);
        const modifiedMovie=list.filter((movie:MovieModel)=>movie.id===movieModel.id)[0];
        if(!modifiedMovie) throw new Error("[MoviesStorageService.modify] movieModel should exist");
        const newMovie={
            ...modifiedMovie,
            ...movieModel
        };
        list[list.indexOf(modifiedMovie)]=newMovie

        return await AsyncStorage.setItem(moviesSecret,JSON.stringify(list)).then(() => true).catch(() => false).then((result)=>{
            return store.dispatch(AppAction.updateMovie(newMovie)).then(()=>result);
        });
    }

    public static async remove(movieModelId: number): Promise<boolean> {
        let list: MovieModel[] = await AsyncStorage.getItem(moviesSecret).then((data) => data ? JSON.parse(data) : []).catch(() => []);
        const getMovie = list.filter((movie: MovieModel) => movie.id === movieModelId)[0];
        if (!getMovie) throw new Error("[MoviesStorageService.get] movieModel should exist");
        list.splice(list.indexOf(getMovie),1);
        return await AsyncStorage.setItem(moviesSecret,JSON.stringify(list)).then(() => true).catch(() => false);
    }

}
