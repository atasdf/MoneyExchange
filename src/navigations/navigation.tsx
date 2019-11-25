import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import SelectionScreen from '../screens/SelectionScreen';

const AppNavigator = createStackNavigator(
    {
        HOME_STACK: {
            screen: HomeScreen
        },
        SELECTION_STACK: {
            screen: SelectionScreen
        }
    },
    {
        initialRouteName: 'HOME_STACK',
        headerMode: 'none'
    }
);

const Navigator = createAppContainer(AppNavigator);

export default Navigator;
