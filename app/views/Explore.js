import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import theme from '../config/theme'

const Explore = () => {
    return (
        <>
            <View style={theme.Body}>
                <Text style={theme.Text}>
                    Home
                </Text>
            </View>
        </>
    );
};

export default Explore;
