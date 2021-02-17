import React from 'react';
import theme from '../config/theme';
import {
    Image,
    Text,
    View,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import { Card, ListItem, Button, Icon, Divider } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';

const FilmCard = ({ film }) => {
    const navigation = useNavigation();
    let width = Dimensions.get('window').width;

    return (
        <TouchableOpacity onPress={() => navigation.push('ViewFilm', { filmId: film.id })}>
            <View style={theme.Card.Container}>
                <View>
                    <Image
                        source={{ uri: film.headerImage }}
                        style={{ width: width, height: 200 }}
                    />
                </View>
                <View style={theme.ContentNoBackground}>
                    <Text style={theme.Card.Title}>{film.title}</Text>
                    <Divider style={{ backgroundColor: 'gray' }} />
                    <Text style={theme.Text}>{film.description}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};



export default FilmCard;
