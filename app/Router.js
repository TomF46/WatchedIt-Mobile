import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import theme from './config/theme';

import HomeStackScreen from './views/HomeStackScreen';
import Explore from './views/Explore';
import MyFilms from './views/MyFilms';
import Profile from './views/Profile';



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
                    else if (route.name === 'My Films') {
                        iconName = 'videocam-outline';
                    }
                    else if (route.name === 'Profile') {
                        iconName = 'person-outline';
                    }


                    return <Icon name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: theme.Tabs.activeTintColor,
                inactiveTintColor: theme.Tabs.inactiveTintColor,
                style: {
                    backgroundColor: theme.Tabs.backgroundColor,
                    borderTopColor: "transparent",
                    borderTopWidth: 0
                }
            }}
        >
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="Explore" component={Explore} />
            <Tab.Screen name="My Films" component={MyFilms} />
            <Tab.Screen name="Profile" component={Profile} />

        </Tab.Navigator>
    )
}

export default Router;
