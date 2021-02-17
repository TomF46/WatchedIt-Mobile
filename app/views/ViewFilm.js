import React from 'react';
import { useState, useEffect } from 'react';
import {
    Text,
    ScrollView
} from 'react-native';
import { AllFilmsData } from '../data/filmData';
import theme from '../config/theme';
import FilmDetail from '../components/FilmDetail';

const ViewFilm = ({ route }) => {
    const [film, setFilm] = useState(null);
    const { filmId } = route.params;


    useEffect(() => {
        const selectedFilm = AllFilmsData.find(film => film.id === filmId);
        setFilm(selectedFilm);
    });

    return (
        <>
            <ScrollView style={theme.Body}>
                {film == null ? (
                    <Text style={theme.Text}>
                        Loading film...
                    </Text>
                ) : (
                        <>
                            <FilmDetail film={film} />
                        </>
                    )}

            </ScrollView>
        </>
    );
};


export default ViewFilm;
