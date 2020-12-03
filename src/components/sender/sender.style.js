import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#e5f0f6',
        padding: 30
    },
    formWrapper: {
        flex: 1,
        flexDirection: 'row',
    },
    errorContainer: {
        position: 'relative'
    },
    errorMessage: {
        position: 'absolute',
        top: 0,
        left: 0,
        color: '#ff0000'
    },
    input: {
        height: 50,
        borderColor: '#d4e4f9',
        borderWidth: 1,
        paddingLeft: 12,
        paddingVertical: 12,
        color: '#000000',
        flex: 4,
        marginRight: 10
    },
    error: {
        borderColor: '#ff0000'
    },
    btnSubmit: {
        flex: 1,
        backgroundColor: '#4f93fe',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ffffff',
        padding: 20
    }
})

export default styles;