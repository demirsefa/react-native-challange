import React, {useCallback, useEffect, useRef} from 'react';
import {Animated} from "react-native";
import AuthLayout from "../layout/auth.layout";
import {loginScreenStyles} from "../../styles/screens/login.screen.styles";
import Sizes from "../../styles/abstract/sizes";
import GeneralProps from "../../props/general.props";
import Form from "../components/form/form";
import {FormBox, FormButtonContainer, Label, Submit} from "../components/form/form-components";
import {InputError} from "../components/form/input-error";
import Input from "../components/form/input";
import Text from "../components/text";
import AuthService from "../../services/auth.service";
import {LoginRequestModel} from "../../models/login.request.model";
import {useNavService} from "../../services/nav.service";
import {store} from "../../store/store";
import AuthAction from "../../actions/auth.action";
import {UserModel} from "../../models/user.model";

function LoginContainer({children}: GeneralProps) {
    const transformAnim = useRef(new Animated.Value(Sizes.screenHeight)).current  // Initial value for opacity: 0
    useEffect(() => {
        Animated.timing(
            transformAnim,
            {
                toValue: 0,
                duration: 1500,
                useNativeDriver: true,
                delay: 0
            }
        ).start();
    }, [transformAnim]);

    return (
        <Animated.View
            style={[loginScreenStyles.container, {
                zIndex: 100,
                transform: [{translateY: transformAnim}]
            }]}>
            {children}
        </Animated.View>
    );
}

export default function LoginScreen() {
    const navService=useNavService();

    const onSubmit = useCallback((requestModel:LoginRequestModel) => {
        return AuthService.login(requestModel).then((responseModel:UserModel)=>{
            store.dispatch(AuthAction.login(responseModel)).then(()=>{
                navService.landList();
            });
        });
    }, [navService]);

    return <AuthLayout withTitle >
        <LoginContainer>
            <Form<LoginRequestModel> onSubmit={onSubmit}>
                    <FormBox>
                        <Label>Username</Label>
                        <Input name={"username"}/>
                        <InputError name={"username"}/>
                    </FormBox>
                    <FormBox>
                        <Label>Password</Label>
                        <Input secureTextEntry={true} name={"password"}/>
                        <InputError name={"password"}/>
                    </FormBox>
                <FormButtonContainer>
                    <Submit>Login</Submit>
                </FormButtonContainer>

            </Form>
        </LoginContainer>
    </AuthLayout>
}