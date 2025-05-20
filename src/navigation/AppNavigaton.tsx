import { useAuth } from "@/context/AuthContext";
import AuthNavigation from "./AuthNavigation";
import Loading from "@/screens/default/loading";
import { AthleteType } from "@/types/athlete";
import { CategoryType } from "@/types/category";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsAthleteScreen from "@/screens/athetes/DetailsAthleteScreen";
import GlobalRoutes from "./BottomNavigation";

export type RoutesParamList = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  ListAthletes: undefined;
  EditAthlete: { athlete: AthleteType };
  DetailsAthlete: { athlete: AthleteType, age: number };
  NewAthlete: undefined;
  ListCategories: undefined;
  DetailsCategory: { category: CategoryType };
  EditCategory: { category: CategoryType };
  NewCategory: undefined;
  ListFrequencies: undefined;
  DetailsFrequency: undefined;
  NewFrequency: undefined;
  ListFinancials: undefined;
  DetailsFinancial: undefined;
  NewFinancial: undefined;
  Settings: undefined;
}


      export default function AppNavigation() {
  const {isAuthenticated, loading} = useAuth();

      if (loading) {
    return <Loading />
  }

  

      return isAuthenticated ? <GlobalRoutes /> : <AuthNavigation />
}