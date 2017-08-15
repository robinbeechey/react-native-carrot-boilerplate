import { Navigation } from 'react-native-navigation';
import Home from './Home';
import Themes from './Themes';


export function registerScreens(store, Provider) {
	Navigation.registerComponent('Home', () => Home, store, Provider);
	Navigation.registerComponent('Themes', () => Themes, store, Provider);
}

