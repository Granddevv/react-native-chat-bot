import React, { useState } from 'react';
import { TextInput, Button, Text, View } from 'react-native';
import styles from './sender.style';

const Sender: () => React$Node = ({currentQuestion, sendText}) => {
    const [ text, setText ] = useState('');
    const [ error, setError ] = useState('')

    const handleText = () => {
        if(typeof currentQuestion.validation === 'object') {
            if(Array.isArray(currentQuestion.validation)) {
                let availableAnswers = currentQuestion.validation;
                let matchedAnswer = availableAnswers.find(answer => answer === text.toLowerCase());
                if(matchedAnswer) {
                    sendText(text);
                    setText('');
                    return ;
                } else {
                    let errorMessage = 'You need to select one of these answers - ';
                    for(let anwser of availableAnswers) {
                        errorMessage = errorMessage + ' ' + anwser;
                    }
                    setError(errorMessage);
                    return ;
                }
            }
        } else if(typeof currentQuestion.validation === 'boolean') {
            if(currentQuestion.validation) {
                sendText(text);
                setText('');
                return ;
            } else {
                setText('')
            }
        } else if(typeof currentQuestion.validation === 'string') {
            if(text.match(currentQuestion.validation)) {
                sendText(text);
                setText('');
                return ;
            } else {
                setError('Validation Error');
                return ;
            }
        }
    }

    const onChangeText = (value) => {
        setText(value);
        setError('');
    }

    let textInputStyle = error.length > 0? {...styles.input, ...styles.error}: styles.input
    return (
        <View style={styles.container}>
            <View style={styles.formWrapper}>
                <TextInput
                    style={textInputStyle}
                    onChangeText={value => onChangeText(value)}
                    value={text}
                />
                <Button
                    style={styles.btnSubmit}
                    onPress={handleText}
                    title={'SEND'}
                />
            </View>
            <View style={styles.errorWrapper}>
                {error.length > 0 && <Text style={styles.errorMessage}>{error}</Text>}
            </View>
        </View>
    )
}

export default Sender;