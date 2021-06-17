import { createStackNavigator } from 'react-navigation-stack';
import Buy from '../Screens/Buy';
import Details from '../Screens/UserDetails';
import Barters from '../Screens/MyBarters';
import ADetails from '../Screens/AfterDetails';
import Notifications from '../Screens/Notification'

export const Stack = createStackNavigator({
    Buy: {
        screen: Buy,
    },
    userDetails: {
        screen: Details,
    },
    Notifications:{
        screen: Notifications,
    },
    Barter: {
        screen: Barters,
    },
    afterDetails: {
        screen: ADetails,
    },
});