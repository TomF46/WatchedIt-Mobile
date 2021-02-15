import React from 'react';
import { useState } from 'react';
import {
    Text,
    View
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import SearchResults from '../components/SearchResults';
import { AllFilmsData } from '../data/filmData';
import theme from '../config/theme'

const Explore = () => {
    const [searchTerm, setSearchTerm] = useState(null);

    updateSearch = (search) => {
        setSearchTerm(search);
    };

    return (
        <>
            <View style={theme.Content}>
                <SearchBar
                    placeholder="Search..."
                    onChangeText={updateSearch}
                    value={searchTerm}
                />
                <SearchResults results={AllFilmsData} />
            </View>
        </>
    );
};

export default Explore;
