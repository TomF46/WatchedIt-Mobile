import React from 'react';
import {
    ScrollView
} from 'react-native';
import HomepageDisplaySection from '../components/HomepageDisplaySection';
import theme from '../config/theme';
import { HomePageData } from '../data/filmData';

const Home = () => {
    return (
        <>
            <ScrollView style={theme.Content}>
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
