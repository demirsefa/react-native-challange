import {Image, TouchableOpacity, View} from "react-native";
import GeneralProps from "../../props/general.props";
import {bottomLayoutStyles} from "../../styles/layout/bottom.layout.styles";
import Colors from "../../styles/abstract/colors";
import Sizes from "../../styles/abstract/sizes";
import {useNavService} from "../../services/nav.service";

const orangeMovie=require("../../assets/images/bottom/movie.png");
const orangeUser=require("../../assets/images/bottom/user.png");
const orangeAdd=require("../../assets/images/bottom/add.png");

function PlusButton({onPress}:{onPress:()=>void}) {
    return <View>
        <View style={{
            position:"absolute",
            flexDirection:"column-reverse",
            bottom:27.6,
            overflow:"hidden",
            left:-8,
            height:40,
            backgroundColor:Colors.backgroundWhite,
            width:80,
        }}>
            <View style={{
                borderColor:Colors.borderColor,
                borderRadius:160,
                borderWidth:1,
                height:80,
                width:80,
            }}/>
        </View>
        <TouchableOpacity onPress={onPress} style={{bottom:35}}>
            <Image source={orangeAdd} />
        </TouchableOpacity>
    </View>
}

export default function BottomLayout({children}: { children:any }) {
    const navService=useNavService();
    return <View style={bottomLayoutStyles.main}>
        <View style={bottomLayoutStyles.screen}>
            {children}
        </View>
        <View style={bottomLayoutStyles.bottomMenu}>
            <View style={bottomLayoutStyles.bottomMenuInner}>
                <TouchableOpacity onPress={()=>navService.goToMovies()} >
                    <Image style={bottomLayoutStyles.bottomMenuImage} source={orangeMovie} />
                </TouchableOpacity>
                <PlusButton onPress={()=>navService.goToMoviesForm()}/>
                <TouchableOpacity onPress={()=>navService.goToProfile()} >
                    <Image style={bottomLayoutStyles.bottomMenuImage} source={orangeUser} />
                </TouchableOpacity>

            </View>
        </View>
    </View>
}