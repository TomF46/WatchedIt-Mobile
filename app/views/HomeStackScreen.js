import * as React from 'react';
import {
    View
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import ViewFilm from './ViewFilm';
import theme from '../config/theme';


const HomeStackScreen = () => {
    const HomeStack = createStackNavigator();
    return (
        <View style={theme.Container}>
            <HomeStack.Navigator screenOptions={{ headerShown: false }}>
                <HomeStack.Screen name="Home" component={Home} />
                <HomeStack.Screen name="ViewFilm" component={ViewFilm} />
            </HomeStack.Navigator>
        </View>
    );
}

export default HomeStackScreen;