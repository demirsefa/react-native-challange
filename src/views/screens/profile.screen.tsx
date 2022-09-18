import {TouchableOpacity, View} from "react-native";
import BottomInnerLayout from "../layout/bottom-inner.layout";
import Text from "../components/text";
import React from "react";
import {profileScreenStyles} from "../../styles/screens/profile.screen.styles";
import {useUser} from "../../hooks/redux-hooks/auth.hooks";
import {store} from "../../store/store";
import AuthAction from "../../actions/auth.action";
import {useNavService} from "../../services/nav.service";

export default function ProfileScreen() {
    const user = useUser();
    const navService = useNavService();
    return <BottomInnerLayout>
        <View style={profileScreenStyles.main}>
            <View style={profileScreenStyles.mainBox}>
                <Text style={profileScreenStyles.bold} >
                    Username
                </Text>
                <Text>{user?.username}</Text>
            </View>
            <View style={profileScreenStyles.mainBox}>
                <Text style={profileScreenStyles.bold} >
                    Name
                </Text>
                <Text>{user?.name}</Text>
            </View>
            <View style={profileScreenStyles.mainBox}>
                <TouchableOpacity onPress={()=>{
                    store.dispatch(AuthAction.signOut()).then(()=>{
                        navService.resetAndGoToLogin()
                    });
                }}>
                    <Text>Logout</Text>
                </TouchableOpacity>
            </View>

        </View>
    </BottomInnerLayout>
}