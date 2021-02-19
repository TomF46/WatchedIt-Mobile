import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import theme from './config/theme';
import HomeStackScreen from './views/HomeStackScreen';
import ExploreStackScreen from './views/ExploreStackScreen';
import MyFilmsStackScreen from './views/MyFilmsStackScreen';
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
                    };


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
            <Tab.Screen name="Explore" component={ExploreStackScreen} />
            <Tab.Screen name="My Films" component={MyFilmsStackScreen} />

        </Tab.Navigator>
    )
}

export default Router;
