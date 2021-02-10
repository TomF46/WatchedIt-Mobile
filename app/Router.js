import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './views/Home';
import Explore from './views/Explore';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Router = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = "home-outline";
                    } else if (route.name === 'Explore') {
                        iconName = 'search-outline';
                    }


                    return <Icon name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'blue',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Explore" component={Explore} />

        </Tab.Navigator>
    )
}

export default Router;
