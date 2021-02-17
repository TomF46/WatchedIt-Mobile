import React from 'react';
import { connect } from "react-redux";
import {
    Text,
    ScrollView
} from 'react-native';


import theme from '../config/theme';
import FilmListItem from '../components/FilmListItem';
import DetailedFilmListItem from '../components/DetailedFilmListItem';

const MyFilms = ({ watchedFilms }) => {
    return (
        <>
            <ScrollView style={theme.Content}>
                <Text style={theme.TextHeading}>My Watched Films</Text>
                {watchedFilms != null && (
                    watchedFilms.map((film, i) => {
                        return (
                            // <FilmListItem key={i} film={film} />
                            <DetailedFilmListItem key={i} film={film} />
                        )
                    })
                )}
            </ScrollView>
        </>
    );
};

const mapStateToProps = (state, ownProps) => {
    let watchedFilms = state.watchedFilms;
    return {
        watchedFilms
    };
};


export default connect(mapStateToProps)(MyFilms);

