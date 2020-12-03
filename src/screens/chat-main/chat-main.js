import React, { useState, useEffect } from 'react';
import Sender from '../../components/sender';
import axios from "axios";
import { Text, View } from 'react-native';
import Header from '../../components/header';
import MainPanel from '../../components/main-panel';
import styles from './chat-main.style';

const CHAT_ITEM_TYPE_QUESTION = 'CHAT_ITEM_TYPE_QUESTION';
const CHAT_ITEM_TYPE_ANSWER = 'CHAT_ITEM_TYPE_ANSWER';
const WORKFLOW_URL = "https://gist.githubusercontent.com/pcperini/97fe41fc42ac1c610548cbfebb0a4b88/raw/cc07f09753ad8fefb308f5adae15bf82c7fffb72/cerebral_challenge.json";

const ChatMainScreen: () => React$Node = () => {
    const [ workFlow, setWorkFlow ] = useState([]);
    const [ currentQuestion, setCurrentQuestion ] = useState(null);
    const [ chatHistory, setChatHistory ] = useState([]);

    useEffect(() => {
        handleLoadWorkFlow();
    }, [])

    const handleLoadWorkFlow = async () => {
        try {
            let result = await axios.get(WORKFLOW_URL);
            let workFlowData = result.status === 200 && result.data? result.data: [];
            handleWorkFlow(workFlowData)
        } catch (error) {

        }
    }

    const handleWorkFlow = (workFlowData) => {
        let chatHistoryUpdate = [...chatHistory];
        chatHistoryUpdate.push({
            type: CHAT_ITEM_TYPE_QUESTION,
            message: workFlowData[1].question
        });
        setWorkFlow(workFlowData);
        setChatHistory(chatHistoryUpdate);
        setCurrentQuestion(workFlowData[1]);
    }

    const handleAnswer = (anwserText) => {
        let chatHistoryUpdate = [...chatHistory];
        chatHistoryUpdate.push({
            type: CHAT_ITEM_TYPE_ANSWER,
            message: anwserText
        });

        let nextQuestionId = -1
        if(typeof currentQuestion.paths === 'object') {
            nextQuestionId = currentQuestion.paths[anwserText.toLowerCase()];
        } else if(typeof currentQuestion.paths === 'number') {
            nextQuestionId = currentQuestion.paths;
        }
        if(nextQuestionId && nextQuestionId > 0) {
            let nextQuestion = workFlow.find(question => question.id === nextQuestionId);
            chatHistoryUpdate.push({
                type: CHAT_ITEM_TYPE_QUESTION,
                message: nextQuestion.question
            })
            setCurrentQuestion(nextQuestion);
        }
        setChatHistory(chatHistoryUpdate);
    }

    return (
        <View style={styles.container}>
            <Header />
            <MainPanel chatHistory={chatHistory} />
            <Sender currentQuestion={currentQuestion} sendText={handleAnswer}  />
        </View>
    )
}

export default ChatMainScreen;