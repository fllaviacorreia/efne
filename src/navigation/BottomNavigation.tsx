// NAVIGATORS
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Octicons from '@expo/vector-icons/Octicons';

// TEXT TO BOTTOM
import { Text } from "@ui-kitten/components";

// SCREENS
import HomeScreen from "@/screens/athetes/AthletesScreen";
import DetailsAthleteScreen from "@/screens/athetes/DetailsAthleteScreen";
import ListAthletesScreen from "@/screens/athetes/AthletesScreen";
import NewAthleteScreen from "@/screens/athetes/NewAthleteScreen";
import ListCategoriesScreen from "@/screens/categories/CategorieesScreen";
import DetailsCategoryScreen from "@/screens/categories/DetailsCategoryScreen";
import NewCategoryScreen from "@/screens/categories/NewCategoryScreen";
import ListFinancialsScreen from "@/screens/financial/FinancialsScreen";
import DetailsFinancialScreen from "@/screens/financial/DetailsFinancialScreen";
import NewFinancialScreen from "@/screens/financial/NewFinancialScreen";
import ListFrequenciesScreen from "@/screens/frequencies/FrequenciesScreen";
import DetailsFrequencyScreen from "@/screens/frequencies/DetailsFrequencyScreen";
import NewFrequencyScreen from "@/screens/frequencies/NewFrequencyScreen";
import SettingsScreen from "@/screens/settings/SettingsScreen";

const TabIcon = (props: any) => <Octicons {...props} name={props.name} />;
const TabTitle = (props: any) => <Text style={{ fontSize: 12, color: props.color }}>{props.title}</Text>;

const Tab = createBottomTabNavigator();

const AthletesStack = createNativeStackNavigator();
const CategoriesStack = createNativeStackNavigator();
const FinancialStack = createNativeStackNavigator();
const FrequenciesStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();

function AthletesStackScreen() {
  return (
    <AthletesStack.Navigator screenOptions={{ headerShown: false }}>
      <AthletesStack.Screen name="ListAthletes" component={ListAthletesScreen} options={{ headerShown: true, headerTitle: 'Atletas', headerTitleAlign: 'center',}}/>
      <AthletesStack.Screen name="DetailsAthlete" component={DetailsAthleteScreen}/>
      <AthletesStack.Screen name="NewAthlete" component={NewAthleteScreen} options={{ headerShown: true, headerTitle: 'Novo atleta', headerTitleAlign: 'center' }}/>
    </AthletesStack.Navigator>
  );
}

function CategoriesStackScreen() {
  return (
    <CategoriesStack.Navigator screenOptions={{headerShown: false}}>
      <CategoriesStack.Screen name="ListCategories" component={ListCategoriesScreen} options={{ headerShown: true, headerTitle: 'Categorias', headerTitleAlign: 'center',}}/>
      <CategoriesStack.Screen name="DetailsCategory" component={DetailsCategoryScreen} />
      <CategoriesStack.Screen name="NewCategory" component={NewCategoryScreen} options={{ headerShown: true, headerTitle: 'Nova categoria', headerTitleAlign: 'center' }}/>
    </CategoriesStack.Navigator>
  )
}

function FinancialStackScreen() {
  return (
    <FinancialStack.Navigator screenOptions={{headerShown: false}}>
      <FinancialStack.Screen name="Financials" component={ListFinancialsScreen} options={{ headerShown: false }} key="ListFinancials" />
      <FinancialStack.Screen name="Details" component={DetailsFinancialScreen} options={{ headerShown: false }} key="CategoriesDetails" />
      <FinancialStack.Screen name="NewPayment" component={NewFinancialScreen} options={{ headerShown: false }} key="NewPayment" />
    </FinancialStack.Navigator>
  )
}

function FrequenciesStackScreen() {
  return (
    <FrequenciesStack.Navigator screenOptions={{headerShown: false}} initialRouteName="ListFrequencies">
      <FrequenciesStack.Screen name="ListFrequencies" component={ListFrequenciesScreen} options={{ headerShown: false }} key="ListFrequencies" />
      <FrequenciesStack.Screen name="Details" component={DetailsFrequencyScreen} options={{ headerShown: false }} key="CategoriesDetails" />
      <FrequenciesStack.Screen name="NewFrequency" component={NewFrequencyScreen} options={{ headerShown: false }} key="NewFrequency" />
    </FrequenciesStack.Navigator>
  )
}

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator screenOptions={{headerShown: false}}>
      <SettingsStack.Screen name="Configs" component={SettingsScreen} options={{ headerShown: false }} key="Configs" />
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
              size={21}
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
            <TabTitle title="Atletas" color={color} />
        }}
      />
      <Tab.Screen
        name="Categories"
        component={CategoriesStackScreen}
        options={{
          tabBarLabel: ({ color }) =>
            <TabTitle title="Categorias" color={color} />
        }}
      />
      <Tab.Screen
        name="Financial"
        component={FinancialStackScreen}
        options={{
          tabBarLabel: ({ color }) =>
            <TabTitle title="Financeiro" color={color} />
        }}
      />
      <Tab.Screen
        name="Frequencies"
        component={FrequenciesStackScreen}
        options={{
          tabBarLabel: ({ color }) =>
            <TabTitle title="Frequências" color={color} />
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStackScreen}
        options={{
          tabBarLabel: ({ color }) =>
            <TabTitle title="Ajustes" color={color} />
        }}
      />
    </Tab.Navigator>
  )
}