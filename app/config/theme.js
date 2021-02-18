const colors = {
    background: '#1F2833',
    primary: '#353D47',
    offWhite: '#eee',
    secondary: '#66e2fc',
    black: '#000'
}

const theme = {
    Colors: colors,
    StatusBar: {
        backgroundColor: colors.primary
    },
    Header: {
        backgroundColor: colors.primary,
        justifyContent: 'space-around',
        border: 0,
        borderBottomWidth: 0,
    },
    Toast: {
        backgroundColor: colors.secondary,
        paddingTop: 4,
        paddingBottom: 4,
        with: 400
    },
    Tabs: {
        backgroundColor: colors.primary,
        activeTintColor: colors.secondary,
        inactiveTintColor: '#bbb',
        borderTopColor: "transparent"
    },
    Container: {
        backgroundColor: colors.background,
        flex: 1,
    },
    Body: {
        backgroundColor: colors.background,
        flex: 1,
        border: 0
    },
    Content: {
        backgroundColor: colors.background,
        padding: 10,
        flex: 1,
        border: 0
    },
    ContentNoBackground: {
        padding: 10,
        flex: 1,
        border: 0
    },
    Text: {
        color: colors.offWhite
    },
    TextHeading: {
        color: colors.offWhite,
        fontSize: 32,
        paddingVertical: 4
    },
    ListItem: {
        backgroundColor: colors.primary,
        color: colors.offWhite
    },
    FilmDetail: {
        ControlsContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 8,
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: colors.primary
        },
        Title: {
            color: colors.offWhite,
            fontSize: 18,
        },
        Text: {
            color: colors.offWhite,
            fontSize: 14
        },
        ActionButton: {
            backgroundColor: colors.secondary,
            color: '#000',
            marginVertical: 20
        }
    },
    MyFilms: {
        Title: {
            color: colors.offWhite,
            fontSize: 24,
            textAlign: 'center'

        }
    },
    Card: {
        Container: {
            backgroundColor: colors.primary,
            marginVertical: 10,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
        },
        Title: {
            color: colors.offWhite,
            fontSize: 22,
            textAlign: 'center',
            paddingVertical: 4
        }
    },
    DetailedListItem: {
        Container: {
            backgroundColor: colors.primary,
            marginVertical: 10,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            padding: 8
        }
    },
    Fab: {
        position: 'absolute',
        bottom: 10,
        right: 10,
    },
    Relative: {
        flex: 1,
        position: 'relative'
    }
}

export default theme;