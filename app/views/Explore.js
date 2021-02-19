import React from 'react';
import { useState } from 'react';
import {
    ScrollView
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import SearchResults from '../components/SearchResults';
import { AllFilmsData } from '../data/filmData';
import { search } from "ss-search"
import theme from '../config/theme'

const Explore = () => {
    const [searchTerm, setSearchTerm] = useState(null);
    const [searchResults, setSearchResults] = useState(AllFilmsData);

    updateSearch = (userSearchTerm) => {
        setSearchTerm(userSearchTerm);
        let results = search(AllFilmsData, ['title', 'director', 'genres', 'starring'], userSearchTerm);
        setSearchResults(results);
    };

    return (
        <>
            <ScrollView style={theme.Content}>
                <SearchBar
                    placeholder="Title, Director, Actor, Genre"
                    onChangeText={updateSearch}
                    value={searchTerm}
                />
                <SearchResults results={searchResults} />
            </ScrollView>
        </>
    );
};

export default Explore;
