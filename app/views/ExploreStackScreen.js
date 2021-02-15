import * as React from 'react';
import {
    View
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Explore from './Explore';
import ViewFilm from './ViewFilm';
import theme from '../config/theme';


const ExploreStackScreen = () => {
    const ExploreStack = createStackNavigator();
    return (
        <View style={theme.Container}>
            <ExploreStack.Navigator screenOptions={{ headerShown: false }}>
                <ExploreStack.Screen name="Explore" component={Explore} />
                <ExploreStack.Screen name="ViewFilm" component={ViewFilm} />
            </ExploreStack.Navigator>
        </View>
    );
}

export default ExploreStackScreen;