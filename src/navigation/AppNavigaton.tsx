import { useAuth } from "@/context/AuthContext";
import AuthNavigation from "./AuthNavigation";
import { Tabs } from "./BottomNavigation";

export type RoutesParamList = {
    Login: undefined;
    Register: undefined;
    ForgotPassword: undefined;
    ListAthletes: undefined;
    DetailsAthlete: undefined; // (passa pela rota os dados)
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
  const { isAuthenticated } = useAuth();

 return isAuthenticated ? <Tabs /> : <AuthNavigation />
}