import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RoutesParamList } from '@/navigation/AppNavigaton';
import { useNavigation } from '@react-navigation/native';

type listAthletesScreenProp = NativeStackNavigationProp<RoutesParamList, "ListAthletes">;

export default function ListAthletesScreen() {
    const navigation = useNavigation<listAthletesScreenProp>();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('DetailsAthlete')}
      />
    </View>
  );
}