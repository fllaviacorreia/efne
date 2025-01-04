import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RoutesParamList } from '@/navigation/AppNavigaton';
import { useNavigation } from '@react-navigation/native';

type newFrequencyScreenProp = NativeStackNavigationProp<RoutesParamList, "NewFrequency">;

export default function NewFrequencyScreen() {
    const navigation = useNavigation<newFrequencyScreenProp>();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>New Frequency Screen</Text>
      <Button
        title="Go back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}