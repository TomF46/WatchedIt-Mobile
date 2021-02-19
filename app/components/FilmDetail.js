import React from 'react';
import { connect } from "react-redux";
import { useEffect } from 'react';
import {
    Text,
    ScrollView,
    View,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import { Image, Icon } from 'react-native-elements';
import theme from '../config/theme';
import { addWatchedFilm, removeWatchedFilm } from '../redux/actions/watchedFilmsActions'
import { saveState } from '../tools/localStorage';
import Toast from 'react-native-toast-native';
import { useNavigation } from '@react-navigation/native';


const FilmDetail = ({ film, addWatchedFilm, removeWatchedFilm, watchedFilms, isWatched, state }) => {
    let width = Dimensions.get('window').width;
    const navigation = useNavigation();

    useEffect(() => {
        saveState(state);
    }, [watchedFilms]);

    const toggleFilmWatched = () => {
        isWatched ? removeWatchedFilm(film.id) : addWatchedFilm(film.id)
        let toastText = isWatched ? "Film removed from watched list" : "Film added to watched list"
        Toast.show(toastText, Toast.SHORT, Toast.BOTTOM, theme.Toast);
    }


    return (
        <ScrollView style={theme.Relative}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <View style={theme.FilmDetail.BackContainer}>
                    <Icon
                        name='long-arrow-left'
                        type='font-awesome'
                        color={theme.Colors.primary}
                        size={26} />
                </View>
            </TouchableOpacity>
            <View>
                <Image
                    source={{ uri: film.headerImage }}
                    style={{ width: width, height: 200 }}
                />
            </View>
            <View style={theme.Content}>
                <View style={{ flex: 2, flexDirection: 'row' }}>
                    <View style={{ flex: 1.25 }}>
                        <Text style={theme.FilmDetail.Title}>{film.title}</Text>
                        <Text style={theme.FilmDetail.Text}>Director: {film.director}</Text>
                        <Text style={theme.FilmDetail.Text}>Release year: {film.releaseDate}</Text>
                        <Text style={theme.FilmDetail.Text}>Genere: {film.genres[0]}</Text>
                        <Text style={theme.FilmDetail.Text}>{`${film.rating} / 10`}</Text>
                    </View>
                    <View style={{ flex: 0.75 }}>
                        <Image
                            source={{ uri: film.coverImage }}
                            style={{ width: 100, height: 120 }}
                            resizeMode="contain"
                        />
                    </View>
                </View>
            </View>
            <View style={theme.FilmDetail.ControlsContainer}>
                <TouchableOpacity onPress={() => toggleFilmWatched()}>
                    <Icon
                        name={isWatched ? 'eye-slash' : 'eye'}
                        type='font-awesome'
                        color={theme.Colors.secondary}
                        size={46} />
                </TouchableOpacity>
            </View>
            <View style={theme.Content}>
                <View style={{ flex: 1 }}>
                    <Text style={theme.FilmDetail.TextSubHeading}>Description:</Text>
                    <Text style={theme.FilmDetail.Text}>{film.description}</Text>
                </View>
            </View>
            <View style={theme.Content}>
                <View style={{ flex: 1 }}>
                    <Text style={theme.FilmDetail.TextSubHeading}>Genres</Text>
                    {film.genres.map((genre, i) => {
                        return (
                            <Text key={i} style={theme.FilmDetail.Text}>{genre}</Text>
                        )
                    })}
                </View>
            </View>
            <View style={theme.Content}>
                <View style={{ flex: 1 }}>
                    <Text style={theme.FilmDetail.TextSubHeading}>Starring:</Text>
                    {film.starring.map((actor, i) => {
                        return (
                            <Text key={i} style={theme.FilmDetail.Text}>{actor}</Text>
                        )
                    })}
                </View>
            </View>
        </ScrollView>
    );
};

const mapDispatchToProps = {
    addWatchedFilm,
    removeWatchedFilm
};

const mapStateToProps = (state, ownProps) => {
    let watchedFilms = state.watchedFilms;
    let isWatched = watchedFilms.some(watchedFilm => watchedFilm.id === ownProps.film.id);
    return {
        watchedFilms,
        isWatched,
        state
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(FilmDetail);
