import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RoutesParamList } from '@/navigation/AppNavigaton';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '@/context/AuthContext';

type settingsScreenProp = NativeStackNavigationProp<RoutesParamList, "Settings">;

export default function SettingsScreen() {
  const navigation = useNavigation<settingsScreenProp>();

  const { logout } = useAuth()

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
      <Button
        title="Log Out"
        onPress={() => logout()}
      />
    </View>
  );
}