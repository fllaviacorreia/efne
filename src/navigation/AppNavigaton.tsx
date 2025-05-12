import { useAuth } from "@/context/AuthContext";
import AuthNavigation from "./AuthNavigation";
import { Tabs } from "./BottomNavigation";
import { AthleteType } from "@/constants/types";
import Loading from "@/screens/default/loading";


export type RoutesParamList = {
    Login: undefined;
    Register: undefined;
    ForgotPassword: undefined;
    ListAthletes: undefined;
    DetailsAthlete: { athlete: AthleteType}; // (passa pela rota os dados)
    NewAthlete: undefined;
    ListCategories: undefined;
    DetailsCategory: undefined; // (passa pela rota os dados)
    NewCategory: undefined;
    ListFrequencies: undefined;
    DetailsFrequency: undefined; // (passa pela rota os dados)
    NewFrequency: undefined;
    ListFinancials: undefined;
    DetailsFinancial: undefined;
    NewFinancial: undefined;
    Settings: undefined;
}

export default function AppNavigation() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <Loading />
  }

 return isAuthenticated ? <Tabs /> : <AuthNavigation />
}