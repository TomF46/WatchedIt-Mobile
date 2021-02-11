import React from 'react';
import theme from '../config/theme';
import { ListItem } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const FilmListItem = ({ film }) => {
    const navigation = useNavigation();

    return (
        <ListItem containerStyle={theme.ListItem} titleStyle={this.ListItem} bottomDivider onPress={() => navigation.push('ViewFilm', { filmId: film.id })}>
            <ListItem.Content>
                <ListItem.Title style={theme.ListItem}>{film.title} ({film.releaseDate})</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
        </ListItem>
    );
};



export default FilmListItem;
