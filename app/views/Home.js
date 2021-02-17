import React from 'react';
import {
    Text,
    ScrollView,
    SectionList,
} from 'react-native';
import FilmListItem from '../components/FilmListItem';
import HomepageDisplaySection from '../components/HomepageDisplaySection';
import theme from '../config/theme';
import { HomePageData } from '../data/filmData';

const Home = ({ navigation }) => {
    return (
        <>
            <ScrollView style={theme.Content}>
                {/* <SectionList
                    sections={HomePageData}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => <FilmListItem film={item} />}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={theme.TextHeading}>{title}</Text>
                    )}
                /> */}
                {HomePageData.sections.map((section, i) => {
                    return (
                        <HomepageDisplaySection key={i} section={section} />
                    )
                })}
            </ScrollView>
        </>
    );
};

export default Home;
