import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RoutesParamList } from '@/navigation/AppNavigaton';
import { useNavigation } from '@react-navigation/native';

type detailsFrequencyScreenProp = NativeStackNavigationProp<RoutesParamList, "DetailsFrequency">;

export default function DetailsFrequencyScreen() {
    const navigation = useNavigation<detailsFrequencyScreenProp>();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Frequency Screen</Text>
      <Button
        title="Go back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}