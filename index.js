import {AppRegistry, Platform} from 'react-native';
import App from './src/app';

//son anda farkettim ufak bir patch
AppRegistry.registerComponent(Platform.select({
    android:"react-native-challenge",
    ios:"react_native_challenge"
}), () => App);
