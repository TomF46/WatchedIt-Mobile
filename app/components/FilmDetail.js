import React from 'react';
import { connect } from "react-redux";
import { useState, useEffect } from 'react';
import {
    Text,
    View,
    Dimensions
} from 'react-native';
import { Image, BottomSheet, ListItem, Button, Icon } from 'react-native-elements';
import theme from '../config/theme';
import { addWatchedFilm, removeWatchedFilm } from '../redux/actions/watchedFilmsActions'
import { saveState } from '../tools/localStorage';


const FilmDetail = ({ film, addWatchedFilm, removeWatchedFilm, watchedFilms, isWatched, state }) => {
    let width = Dimensions.get('window').width;
    const [isVisible, setIsVisible] = useState(false);
    const list = [
        {
            title: isWatched ? "Set unwatched" : "Set watched",
            onPress: () => {
                isWatched ? removeWatchedFilm(film.id) : addWatchedFilm(film.id)
                setIsVisible(false);
            },
        },
        {
            title: 'Cancel',
            containerStyle: { backgroundColor: 'red' },
            titleStyle: { color: 'white' },
            onPress: () => setIsVisible(false),
        },
    ];

    useEffect(() => {
        saveState(state);
    }, [watchedFilms]);

    const setFilmWatched = () => {
        addWatchedFilm(film.id)
    }


    return (
        <>
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
            <View style={theme.Content}>
                <View style={{ flex: 1 }}>
                    <Text style={theme.FilmDetail.Text}>{`Description: ${film.description}`}</Text>
                    <Button
                        title="Actions"
                        color={theme.Colors.black}
                        buttonStyle={theme.FilmDetail.ActionButton}
                        onPress={() => setIsVisible(true)}
                    />
                </View>
            </View>
            <BottomSheet
                isVisible={isVisible}
                containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)' }}
            >
                {list.map((l, i) => (
                    <ListItem key={i} containerStyle={l.containerStyle} onPress={l.onPress}>
                        <ListItem.Content>
                            <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                ))}
            </BottomSheet>
        </>
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
