const colors = {
    background: '#1F2833',
    primary: '#353D47'
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
        activeTintColor: '#eee',
        inactiveTintColor: '#bbb',
        borderTopColor: "transparent"
    },
    Body: {
        backgroundColor: colors.background,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        border: 0
    },
    Text: {
        color: '#fff'
    }
}

export default theme;