// NAVIGATORS
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Octicons from '@expo/vector-icons/Octicons';

// TEXT TO BOTTOM
import { Text } from "@ui-kitten/components";

// SCREENS
import HomeScreen from "@/screens/athetes/AthletesScreen";
import DetailsAthleteScreen from "@/screens/athetes/DetailsAthleteScreen";

const TabIcon = (props: any) => <Octicons {...props} name={props.name} />;

const Tab = createBottomTabNavigator();

const AthletesStack = createNativeStackNavigator();
const CategoriesStack = createNativeStackNavigator();
const FinancialStack = createNativeStackNavigator();
const FrequenciesStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();

function AthletesStackScreen() {
  return (
    <AthletesStack.Navigator screenOptions={{ headerShown: false }}>
      <AthletesStack.Screen name="Athletes" component={HomeScreen} key="ListAthletes"/>
      <AthletesStack.Screen name="Details" component={DetailsAthleteScreen} />
      <AthletesStack.Screen name="NewAthlete" component={HomeScreen} />
    </AthletesStack.Navigator>
  );
}

function CategoriesStackScreen() {
  return (
    <CategoriesStack.Navigator screenOptions={{headerShown: false}}>
      <CategoriesStack.Screen name="Categories" component={HomeScreen} options={{ headerShown: false }} key="ListCategories" />
      <CategoriesStack.Screen name="Details" component={HomeScreen} options={{ headerShown: false }} key="CategoriesDetails" />
      <CategoriesStack.Screen name="NewCategory" component={HomeScreen} options={{ headerShown: false }} key="NewCategory" />
    </CategoriesStack.Navigator>
  )
}

function FinancialStackScreen() {
  return (
    <FinancialStack.Navigator screenOptions={{headerShown: false}}>
      <FinancialStack.Screen name="Financials" component={HomeScreen} options={{ headerShown: false }} key="ListFinancials" />
      <FinancialStack.Screen name="Details" component={HomeScreen} options={{ headerShown: false }} key="CategoriesDetails" />
      <FinancialStack.Screen name="NewPayment" component={HomeScreen} options={{ headerShown: false }} key="NewPayment" />
    </FinancialStack.Navigator>
  )
}

function FrequenciesStackScreen() {
  return (
    <FrequenciesStack.Navigator screenOptions={{headerShown: false}}>
      <FrequenciesStack.Screen name="Frequencies" component={HomeScreen} options={{ headerShown: false }} key="ListFrequencies" />
      <FrequenciesStack.Screen name="Details" component={HomeScreen} options={{ headerShown: false }} key="CategoriesDetails" />
      <FrequenciesStack.Screen name="NewFrequency" component={HomeScreen} options={{ headerShown: false }} key="NewFrequency" />
    </FrequenciesStack.Navigator>
  )
}

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator screenOptions={{headerShown: false}}>
      <SettingsStack.Screen name="Settings" component={HomeScreen} options={{ headerShown: false }} key="Settings" />
    </SettingsStack.Navigator>
  )
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
            iconName = 'people';
          } else if (route.name === 'Categories') {
            iconName = 'tag';
          } else if (route.name === 'Financial') {
            iconName = 'book';
          } else if (route.name === 'Frequencies') {
            iconName = 'checklist';
          } else if (route.name === 'Settings') {
            iconName = 'gear';
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
        component={AthletesStackScreen}
        options={{
          tabBarLabel: ({ color }) =>
            <Text style={{ fontSize: 12, color: color }}>Atletas </Text>
        }}
      />
      <Tab.Screen
        name="Categories"
        component={CategoriesStackScreen}
        options={{
          tabBarLabel: ({ color }) =>
            <Text style={{ fontSize: 12, color: color }}>Categorias</Text>
        }}
      />
      <Tab.Screen
        name="Financial"
        component={FinancialStackScreen}
        options={{
          tabBarLabel: ({ color }) =>
            <Text style={{ fontSize: 12, color: color }}>Financiamentos</Text>
        }}
      />
      <Tab.Screen
        name="Frequencies"
        component={FrequenciesStackScreen}
        options={{
          tabBarLabel: ({ color }) =>
            <Text style={{ fontSize: 12, color: color }}>Frequencias</Text>
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStackScreen}
        options={{
          tabBarLabel: ({ color }) =>
            <Text style={{ fontSize: 12, color: color }}>Configurações</Text>
        }}
      />
    </Tab.Navigator>
  )
}