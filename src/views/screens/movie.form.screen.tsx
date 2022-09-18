import React, {useCallback,  useState} from "react";
import BottomInnerLayout from "../layout/bottom-inner.layout";
import {useNavService} from "../../services/nav.service";
import Form from "../components/form/form";
import {FormBox, FormButtonContainer, Label, Submit} from "../components/form/form-components";
import Input from "../components/form/input";
import {InputError} from "../components/form/input-error";
import {MovieRequestModel} from "../../models/movie.request.model";
import MoviesStorageService from "../../services/movies-storage.service";
import {EscapeScrollView} from "../components/ui/escape-scroll.view";
import {useClipboardImdb} from "../../hooks/redux-hooks/app.hooks";
import {FlatList, Modal,  TouchableHighlight, TouchableOpacity, View} from "react-native";
import Text from "../components/text";
import {store} from "../../store/store";
import AppAction from "../../actions/app.action";
import OmdbService from "../../services/omdb.service";
import {RouteProp, useRoute} from "@react-navigation/native";
import {BottomLayoutRouteEnum, RouteStackParamList} from "../../app-context/route.enum";
import {movieFormScreenStyles} from "../../styles/screens/movie-form.screen.styles";
import useAsyncEffect from "../../hooks/use-async-effect";
import SwapiService from "../../services/swapi.service";
import {MovieModel} from "../../models/movie.model";
import {useFormContext} from "react-hook-form";
function ImdbClipBoardButton({setData}:{setData:(movieRequestModel:MovieRequestModel)=>void}) {
    const imdbKey=useClipboardImdb();
    if(!imdbKey) return null;
    return <TouchableOpacity
        onPress={()=>{
            OmdbService.get(imdbKey).then((data:Record<string,string>)=>{
                store.dispatch(AppAction.changeClipboardImdb(null)).then(()=>{
                    setData({
                        title:data["Title"],
                        category:data["Genre"],
                        description:data["Plot"],
                        poster:data["Poster"],
                        relateDate:data["Released"],
                        actors:data["Actors"],
                        director:data["Director"],
                        country:data["Country"],
                        language:data["Language"],
                    })
                });
            });
        }}
        style={{
        backgroundColor:"#d97503",
        height:50,
        justifyContent:"center"
    }}>
        <Text style={{color:"white",textAlign:"center"}}>Imdb Id detected. Press to fill the form</Text>
    </TouchableOpacity>
}

function FetchModalItem({movieModel,setModal}:{movieModel:Partial<MovieModel>,setModal:(b:boolean)=>void}) {
    const { reset}=useFormContext();
    return <TouchableOpacity onPress={()=>{
        setModal(false);
        reset(movieModel,{
            keepDefaultValues: false,
        });
    }} style={movieFormScreenStyles.fetchModelItem}>
        <Text style={movieFormScreenStyles.borderBottomLine}>{movieModel.title}</Text>
        <Text style={movieFormScreenStyles.borderBottomLine}numberOfLines={3} lineBreakMode={"tail"}>{movieModel.description}</Text>
        <Text style={movieFormScreenStyles.borderBottomLine}>{movieModel.director}</Text>
        <Text>{movieModel.releaseDate}</Text>
    </TouchableOpacity>
}

function FetchModal({setModal,modal}:{setModal:(m:boolean)=>void,modal:boolean}) {
    const [data,setData]=useState<Partial<MovieModel>[]|null>(null);
    useAsyncEffect(()=>{
        return SwapiService.getList().then(swapiData=>{
            setData(swapiData.results.map((record:any)=>({
                title:record.title,
                description:record.opening_crawl,
                director:record.director,
                releaseDate:record.release_date
            })))
        })
    },[])
    return <Modal
        animationType="slide"
        onDismiss={()=>setModal(false)}
        transparent={true}
        onRequestClose={()=>setModal(false)} visible={modal}>
        <View style={movieFormScreenStyles.container}>
            <TouchableHighlight underlayColor={"#FFFFFF05"} onPress={()=>setModal(false)} style={movieFormScreenStyles.modalBg}>
                <View/>
            </TouchableHighlight>
            <View style={movieFormScreenStyles.modal}>
                <FlatList data={data} renderItem={(listRenderItemInfo)=>
                <FetchModalItem setModal={setModal} movieModel={listRenderItemInfo.item}/>}/>
            </View>

        </View>
    </Modal>;
}

export default function MovieFormScreen() {
    const navService=useNavService();
    const [data,setData]=useState<MovieRequestModel|null>(null);
    const [modal,setModal]=useState(false);
    const route = useRoute<RouteProp<RouteStackParamList, BottomLayoutRouteEnum.moviesForm>>();
    let params=route.params;
    const movieModel=params?params.movieModel:undefined;


    const onSubmit = useCallback((requestModel:MovieRequestModel) => {
        if(movieModel){
            return MoviesStorageService.modify(requestModel).then(()=>{
                return store.dispatch(AppAction.refreshList()).then(()=>{
                    navService.goToMovies();
                });
            });
        }else{
            return MoviesStorageService.insert(requestModel).then(()=>{
                return store.dispatch(AppAction.refreshList()).then(()=>{
                    navService.goToMovies();
                });
            });
        }
    }, [navService]);

    return <BottomInnerLayout>
        <EscapeScrollView>
            <Form<MovieRequestModel> data={{...movieModel,...(data?data:{})}} onSubmit={onSubmit}>
                {!movieModel&&<View>
                    <ImdbClipBoardButton setData={(d)=>setData(d)}/>
                    <TouchableOpacity  style={movieFormScreenStyles.fetchButton} onPress={()=>{
                        setModal(true);
                    }}>
                        <Text>Fetch From Api</Text>
                    </TouchableOpacity>
                </View>}
                <FormBox>
                    <Label required>Title</Label>
                    <Input required name={"title"}/>
                    <InputError name={"title"}/>
                </FormBox>
                <FormBox>
                    <Label>Genre</Label>
                    <Input name={"category"}/>
                    <InputError name={"category"}/>
                </FormBox>
                <FormBox>
                    <Label>Poster</Label>
                    <Input name={"poster"}/>
                    <InputError name={"poster"}/>
                </FormBox>
                <FormBox>
                    <Label required>Description</Label>
                    <Input required textarea name={"description"}/>
                    <InputError name={"description"}/>
                </FormBox>
                <FormBox>
                    <Label>Release Date</Label>
                    <Input   name={"releaseDate"}/>
                    <InputError name={"releaseDate"}/>
                </FormBox>
                <FormBox>
                    <Label>Actors</Label>
                    <Input  textarea name={"actors"}/>
                    <InputError name={"actors"}/>
                </FormBox>
                <FormBox>
                    <Label>Director</Label>
                    <Input textarea  name={"director"}/>
                    <InputError name={"director"}/>
                </FormBox>
                <FormBox>
                    <Label>Country</Label>
                    <Input   name={"country"}/>
                    <InputError name={"country"}/>
                </FormBox>
                <FormBox>
                    <Label>Director</Label>
                    <Input   name={"director"}/>
                    <InputError name={"director"}/>
                </FormBox>
                <FormBox>
                    <Label >Language</Label>
                    <Input   name={"language"}/>
                    <InputError name={"language"}/>
                </FormBox>
                <FormButtonContainer>
                    <Submit>{movieModel?"Modify":"Insert"}</Submit>
                </FormButtonContainer>
                <FetchModal setModal={setModal} modal={modal}/>
            </Form>
        </EscapeScrollView>

    </BottomInnerLayout>;
}
