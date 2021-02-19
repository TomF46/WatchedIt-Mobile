import React from 'react';
import theme from '../config/theme';
import {
    Text,
    View,
} from 'react-native';
import FilmCard from './FilmCard';

const HomepageDisplaySection = ({ section }) => {
    return (
        <View>
            <Text style={theme.TextHeading}>{section.title}</Text>
            <View>
                {section.data.map((film, i) => {
                    return (
                        <FilmCard key={film.id} film={film} />
                    )
                })}
            </View>
        </View>
    );
};



export default HomepageDisplaySection;
