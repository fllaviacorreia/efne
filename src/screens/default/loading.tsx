import { Spinner } from '@ui-kitten/components';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Loading: React.FC = () => {
    return (
        <View style={styles.container}>
            <Spinner size='medium'/>
            <Text style={styles.text}>Carregando...</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginLeft: 10,
    },
});

export default Loading;