import { Layout, Text } from '@/components';
import { Spinner } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet } from 'react-native';

const Loading: React.FC = () => {
    return (
        <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
            <Spinner size='medium'/>
            <Text variant='h4'>Carregando...</Text>
        </Layout>
    );
};

export default Loading;