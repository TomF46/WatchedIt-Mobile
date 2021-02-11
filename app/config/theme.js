const colors = {
    background: '#1F2833',
    primary: '#353D47',
    offWhite: '#eee',
}

const theme = {
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
        activeTintColor: colors.offWhite,
        inactiveTintColor: '#bbb',
        borderTopColor: "transparent"
    },
    Body: {
        backgroundColor: colors.background,
        flex: 1,
        padding: 10,
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
    }
}

export default theme;