import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#ffffff',
        padding: 30
    },
    chatItemBotContainer: {
        justifyContent: 'flex-start'
    },
    chatItemMeContainer: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    textBot: {
        fontSize: 20
    },
    textYou: {
        fontSize: 20,
        color: '#649ffc'
    },
    textChat: {
        fontSize: 16,
        color: '#444444'
    }
})

export default styles;