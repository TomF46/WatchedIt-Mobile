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
    Text: {
        color: colors.offWhite
    },
    TextHeading: {
        color: colors.offWhite,
        fontSize: 32
    },
    ListItem: {
        backgroundColor: colors.primary,
        color: colors.offWhite
    },
    FilmDetail: {
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
    }
}

export default theme;