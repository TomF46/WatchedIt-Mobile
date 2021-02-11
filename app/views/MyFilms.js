import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import theme from '../config/theme';

const MyFilms = () => {
    return (
        <>
            <View style={theme.Body}>
                <Text style={theme.Text}>
                    My Films
                </Text>
            </View>
        </>
    );
};


export default MyFilms;
