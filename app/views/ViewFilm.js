import React from 'react';
import {
    Text,
    View
} from 'react-native';

import theme from '../config/theme';

const ViewFilm = ({ route }) => {
    const { filmId } = route.params;
    return (
        <>
            <View style={theme.Body}>
                <Text style={theme.Text}>
                    View Film with ID {filmId}
                </Text>
            </View>
        </>
    );
};


export default ViewFilm;
