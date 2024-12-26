// NAVIGATORS
import DetailsScreen from "@/screens/details/DetailsScreen";
import HomeScreen from "@/screens/athetes/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Icon } from '@ui-kitten/components';

// TEXT TO BOTTOM
import { Text } from "@ui-kitten/components";

const TabIcon = (props: any) => <Icon {...props} name={props.name} />;

const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
      <HomeStack.Screen name="NewAthlete" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}
// rest of stacks screens

export function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          height: 70,
          borderTopWidth: 0,
          backgroundColor: '#fff',
          elevation: 10,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Athletes') {
            iconName = 'people-outline';
          } else if (route.name === 'Categories') {
            iconName = 'grid-outline';
          } else if (route.name === 'Financial') {
            iconName = 'credit-card-outline';
          } else if (route.name === 'Frequencies') {
            iconName = 'calendar-outline';
          } else if (route.name === 'Settings') {
            iconName = 'settings-outline';
          }

          return (
            <TabIcon
              name={iconName}
              color={focused ? '#0a7ea4' : '#687076'}
              size={24}
            />
          );
        },
        tabBarActiveTintColor: '#0a7ea4',
        tabBarInactiveTintColor: '#687076',
      })}
    >
      <Tab.Screen
        name="Athletes"
        component={HomeStackScreen}
        options={{
          tabBarLabel: ({ color }) =>
            <Text style={{ fontSize: 12, color: color }}>Atletas </Text>
        }}
      />
    </Tab.Navigator>
  )
}