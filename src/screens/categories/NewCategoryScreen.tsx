import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RoutesParamList } from '@/navigation/AppNavigaton';
import { useNavigation } from '@react-navigation/native';

type newCategoryScreenProp = NativeStackNavigationProp<RoutesParamList, "NewCategory">;

export default function NewCategoryScreen() {
    const navigation = useNavigation<newCategoryScreenProp>();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>New Category Screen</Text>
      <Button
        title="Go back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}