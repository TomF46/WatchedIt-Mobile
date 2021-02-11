import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import ViewFilm from './ViewFilm';


const HomeStackScreen = () => {
    const HomeStack = createStackNavigator();
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="Home" component={Home} />
            <HomeStack.Screen name="ViewFilm" component={ViewFilm} />
        </HomeStack.Navigator>
    );
}

export default HomeStackScreen;