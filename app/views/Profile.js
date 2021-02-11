import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import theme from '../config/theme';

const Profile = () => {
    return (
        <>
            <View style={theme.Body}>
                <Text style={theme.Text}>
                    Profile
                </Text>
            </View>
        </>
    );
};


export default Profile;
