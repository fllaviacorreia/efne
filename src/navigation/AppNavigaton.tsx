import { useAuth } from "@/context/AuthContext";
import AuthNavigation from "./AuthNavigation";
import { Tabs } from "./BottomNavigation";

export type RoutesParamList = {
    Login: undefined;
    Register: undefined;
    ForgotPassword: undefined;
    Home: undefined;
    Details: undefined;
}

export default function AppNavigation() {
  const { isAuthenticated } = useAuth();

 return isAuthenticated ? <Tabs /> : <AuthNavigation />
}