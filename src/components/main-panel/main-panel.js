import React, { useState } from 'react';
import { TextInput, Button, Text, ScrollView, View } from 'react-native';
import styles from './main-panel.style';
const CHAT_ITEM_TYPE_QUESTION = 'CHAT_ITEM_TYPE_QUESTION';
const CHAT_ITEM_TYPE_ANSWER = 'CHAT_ITEM_TYPE_ANSWER';

const MainPanel: () => React$Node = ({chatHistory}) => {
    return (
        <ScrollView style={styles.container}>
            {chatHistory.map((chatItem, index) => {
                if(chatItem.type === CHAT_ITEM_TYPE_QUESTION) {
                    return (
                        <View key={'chat-history-item-' + index} style={styles.chatItemBotContainer}>
                            <Text style={styles.textBot}>Insomnia Bot</Text>
                            <Text style={styles.textChat}>{chatItem.message}</Text>
                        </View>
                    )
                } else {
                    return (
                        <View key={'chat-history-item-' + index} style={styles.chatItemMeContainer}>
                            <Text style={styles.textYou}>You</Text>
                            <Text style={styles.textChat}>{chatItem.message}</Text>
                        </View>
                    )
                }
            })}
            <View style={styles.footer}>

            </View>
        </ScrollView>
    )
}

export default MainPanel;