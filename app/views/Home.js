import React from 'react';
import {
    Text,
    View,
    SectionList,
} from 'react-native';
import FilmListItem from '../components/FilmListItem';
import theme from '../config/theme';
import { HomePageData } from '../data/filmData';

const Home = ({ navigation }) => {
    return (
        <>
            <View style={theme.Content}>
                <SectionList
                    sections={HomePageData}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => <FilmListItem film={item} />}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={theme.TextHeading}>{title}</Text>
                    )}
                />
            </View>
        </>
    );
};

export default Home;
