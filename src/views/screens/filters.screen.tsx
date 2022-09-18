import {TouchableOpacity, View} from "react-native";
import Text from "../components/text";
import React, {useCallback, useEffect, useState} from "react";
import {filterScreenStyles} from "../../styles/screens/filter.screen.styles";
import Form from "../components/form/form";
import Input from "../components/form/input";
import {FormBox, FormButtonContainer, Submit} from "../components/form/form-components";
import {useFormContext} from "react-hook-form";
import {InputError} from "../components/form/input-error";
import {EscapeScrollView} from "../components/ui/escape-scroll.view";
import {FilterModel} from "../../models/filter.model";
import {useNavService} from "../../services/nav.service";

function Stars() {
    const {setValue,watch,register}=useFormContext();
    const rate=watch("rate");
    useEffect(()=>{
        register("rate")
    },[register]);
    return <View>
        <TouchableOpacity onPress={()=>rate===1?setValue("rate",undefined):setValue("rate",1)} style={filterScreenStyles.starButton}>
                <Text style={filterScreenStyles.start}>★</Text>
            <Text style={filterScreenStyles.selectedText}>{rate===1?"selected":""}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>rate===2?setValue("rate",undefined):setValue("rate",2)} style={filterScreenStyles.starButton}>
                <Text style={filterScreenStyles.start}>★</Text>
                <Text style={filterScreenStyles.start}>★</Text>
            <Text style={filterScreenStyles.selectedText}>{rate===2?"selected":""}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>rate===3?setValue("rate",undefined):setValue("rate",3)} style={filterScreenStyles.starButton}>
                <Text style={filterScreenStyles.start}>★</Text>
                <Text style={filterScreenStyles.start}>★</Text>
                <Text style={filterScreenStyles.start}>★</Text>
            <Text style={filterScreenStyles.selectedText}>{rate===3?"selected":""}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>rate===4?setValue("rate",undefined):setValue("rate",4)} style={filterScreenStyles.starButton}>
                <Text style={filterScreenStyles.start}>★</Text>
                <Text style={filterScreenStyles.start}>★</Text>
                <Text style={filterScreenStyles.start}>★</Text>
                <Text style={filterScreenStyles.start}>★</Text>
            <Text style={filterScreenStyles.selectedText}>{rate===4?"selected":""}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>rate===5?setValue("rate",undefined):setValue("rate",5)} style={filterScreenStyles.starButton}>
                <Text style={filterScreenStyles.start}>★</Text>
                <Text style={filterScreenStyles.start}>★</Text>
                <Text style={filterScreenStyles.start}>★</Text>
                <Text style={filterScreenStyles.start}>★</Text>
                <Text style={filterScreenStyles.start}>★</Text>
            <Text style={filterScreenStyles.selectedText}>{rate===5?"selected":""}</Text>
        </TouchableOpacity>

    </View>;
}

function Sorts() {
    const {setValue,watch,register}=useFormContext();
    const sortType=watch("sortType");
    const sort=watch("sort");
    useEffect(()=>{
        register("sortType");
        register("sort");
    },[register]);

    return <View style={filterScreenStyles.sortContainer}>
        <TouchableOpacity style={filterScreenStyles.sortButton} onPress={()=>{
            if(sort==="rate"){
                if(!sortType){
                    setValue("sort","rate");
                    setValue("sortType","desc");
                }else if(sortType==="desc"){
                    setValue("sortType","asc");
                }else{
                    setValue("sortType","desc");
                }
            }else{
                setValue("sort","rate");
                setValue("sortType","desc");
            }
        }} >
            <Text>Rate {sort==="rate"?sortType==="asc"?"▲":(sortType==="desc"?"▼":null):null}</Text>
        </TouchableOpacity>
    </View>;
}

export default function FiltersScreen() {
    const navService=useNavService();
    const onSubmit=useCallback((filterModel:FilterModel)=>{
        navService.goToMovies(filterModel);
    },[navService]);
    return <EscapeScrollView>
        <View style={filterScreenStyles.filter}>

        <Form<FilterModel> onSubmit={onSubmit}>
            <FormBox>
                <Text style={filterScreenStyles.label}>Sort:</Text>
                <Sorts/>
                <InputError name={"sort"}/>
                <InputError name={"sortType"}/>
            </FormBox>
            <FormBox>
                <Text style={filterScreenStyles.label}>Category:</Text>
                <Input name={"category"}/>
                <InputError name={"category"}/>
            </FormBox>
            <FormBox>
                <Text style={filterScreenStyles.label}>Rate:</Text>
                <Stars/>
                <InputError name={"rate"}/>
            </FormBox>
            <FormButtonContainer>
                <Submit>Filter</Submit>
            </FormButtonContainer>
        </Form>
    </View>
    </EscapeScrollView>

}