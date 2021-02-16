import * as React from 'react';
import {
    View
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import MyFilms from './MyFilms';
import ViewFilm from './ViewFilm';
import theme from '../config/theme';


const MyFilmsStackScreen = () => {
    const MyFilmsStack = createStackNavigator();
    return (
        <View style={theme.Container}>
            <MyFilmsStack.Navigator screenOptions={{ headerShown: false }}>
                <MyFilmsStack.Screen name="MyFilms" component={MyFilms} />
                <MyFilmsStack.Screen name="ViewFilm" component={ViewFilm} />
            </MyFilmsStack.Navigator>
        </View>
    );
}

export default MyFilmsStackScreen;