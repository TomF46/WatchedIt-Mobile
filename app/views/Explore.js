import React from 'react';
import {
    Text,
    View
} from 'react-native';
import theme from '../config/theme'

const Explore = () => {
    return (
        <>
            <View style={theme.Body}>
                <Text style={theme.Text}>
                    Explore
                </Text>
            </View>
        </>
    );
};

export default Explore;
