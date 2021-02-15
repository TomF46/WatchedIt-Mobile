import React from 'react';
import { useState } from 'react';
import {
    Text,
    View,
    Dimensions
} from 'react-native';
import { Image, BottomSheet, ListItem, Button, Icon } from 'react-native-elements';
import theme from '../config/theme';


const FilmDetail = ({ film }) => {
    let width = Dimensions.get('window').width;
    const [isVisible, setIsVisible] = useState(false);
    const list = [
        {
            title: 'Set watched',
            onPress: () => alert("Functionality to be added"),
        },
        {
            title: 'Cancel',
            containerStyle: { backgroundColor: 'red' },
            titleStyle: { color: 'white' },
            onPress: () => setIsVisible(false),
        },
    ];

    return (
        <>
            <View>
                <Image
                    source={{ uri: film.headerImage }}
                    style={{ width: width, height: 200 }}
                />
            </View>
            <View style={theme.Content}>
                <View style={{ flex: 2, flexDirection: 'row' }}>
                    <View style={{ flex: 1.25 }}>
                        <Text style={theme.FilmDetail.Title}>{film.title}</Text>
                        <Text style={theme.FilmDetail.Text}>Director: {film.director}</Text>
                        <Text style={theme.FilmDetail.Text}>Release year: {film.releaseDate}</Text>
                        <Text style={theme.FilmDetail.Text}>{`${film.rating} / 10`}</Text>
                    </View>
                    <View style={{ flex: 0.75 }}>
                        <Image
                            source={{ uri: film.coverImage }}
                            style={{ width: 100, height: 120 }}
                            resizeMode="contain"
                        />
                    </View>
                </View>
            </View>
            <View style={theme.Content}>
                <View style={{ flex: 1 }}>
                    <Text style={theme.FilmDetail.Text}>{`Description: ${film.description}`}</Text>
                    <Button
                        title="Actions"
                        color={theme.Colors.black}
                        buttonStyle={theme.FilmDetail.ActionButton}
                        onPress={() => setIsVisible(true)}
                    />
                </View>
            </View>
            <BottomSheet
                isVisible={isVisible}
                containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)' }}
            >
                {list.map((l, i) => (
                    <ListItem key={i} containerStyle={l.containerStyle} onPress={l.onPress}>
                        <ListItem.Content>
                            <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                ))}
            </BottomSheet>
        </>
    );
};



export default FilmDetail;
