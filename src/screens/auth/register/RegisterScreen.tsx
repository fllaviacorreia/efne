import { RoutesParamList } from "@/navigation/AppNavigaton";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, Layout, Text } from "@ui-kitten/components";

type registerParamsList = NativeStackNavigationProp<RoutesParamList, "Register">;

export default function RegisterScreen() {
    const navigation = useNavigation<registerParamsList>();
    return (
        <Layout style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Register Screen</Text>
            <Button  onPress={() => navigation.navigate('Login')}>Ir para Login</Button>
        </Layout>
    );
}