import React from 'react';
import theme from '../config/theme';
import { useNavigation } from '@react-navigation/native';
import FilmListItem from './FilmListItem';

const SearchResults = ({ results }) => {

    return (
        <>
            {results.map((result, i) => {
                return (
                    <FilmListItem key={i} film={result} />
                )
            })}
        </>
    );
};



export default SearchResults;
