import React, { useState } from 'react';
import { Text, View } from 'react-native';
import styles from './header.style';

const Header: () => React$Node = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Insomnia Bot</Text>
        </View>
    )
}

export default Header;