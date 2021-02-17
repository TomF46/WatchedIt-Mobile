import React from 'react';
import theme from '../config/theme';
import { ListItem, Image } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';

const DetailedFilmListItem = ({ film }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.push('ViewFilm', { filmId: film.id })}>
            <View style={theme.DetailedListItem.Container}>
                <View style={{ flex: 2, flexDirection: 'row' }}>
                    <View style={{ flex: 1.25 }}>
                        <Text style={theme.FilmDetail.Title}>{film.title} ({film.releaseDate})</Text>
                        <Text style={theme.FilmDetail.Text}>Director: {film.director}</Text>
                        <Text style={theme.FilmDetail.Text}>Release year: {film.releaseDate}</Text>
                        <Text style={theme.FilmDetail.Text}>{`${film.rating} / 10`}</Text>
                    </View>
                    <View style={{ flex: 0.75 }}>
                        <Image
                            source={{ uri: film.coverImage }}
                            style={{ width: 100, height: 120 }}
                            resizeMode="contain"
                        />
                    </View>
                    <ListItem.Chevron />
                </View>
            </View>
        </TouchableOpacity >
    );
};



export default DetailedFilmListItem;
