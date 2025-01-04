import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RoutesParamList } from '@/navigation/AppNavigaton';
import { useNavigation } from '@react-navigation/native';

type listCategoriesScreenProp = NativeStackNavigationProp<RoutesParamList, "ListCategories">;

export default function ListCategoriesScreen() {
    const navigation = useNavigation<listCategoriesScreenProp>();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Categories Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('DetailsCategory')}
      />
    </View>
  );
}