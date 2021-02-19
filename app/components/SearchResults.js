import React from 'react';
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
