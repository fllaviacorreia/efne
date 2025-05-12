import { RoutesParamList } from "@/navigation/AppNavigaton";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Icon, IconElement, StyleService } from "@ui-kitten/components"
import { Pressable } from "react-native";

type Props = {
    nextRoute: Exclude<keyof RoutesParamList, "DetailsAthlete" | "DetailsCategory" | "DetailsFrequency" | "DetailsFinancial">;
    iconName: string;
    iconFill: string;
}

type ListScreensProp = NativeStackNavigationProp<RoutesParamList>;

export default function FAB({ nextRoute, iconName, iconFill }: Props) {
    const navigation = useNavigation<ListScreensProp>();

    const IconSimpleUsageShowcase = (): IconElement => (
        <Icon style={styles.icon} fill={iconFill} name={iconName} />
    );

    return (
        <Pressable style={styles.buttonFAB} onPress={() => navigation.navigate(nextRoute)} 
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
            <IconSimpleUsageShowcase />
        </Pressable>
    )
}

const styles = StyleService.create({
    buttonFAB: {
        position: "absolute",
        zIndex: 10,
        bottom: 20,
        right: 20,
        width: 70,
        height: 70,
        borderRadius: 50,
        color: "white",
        backgroundColor: "#007AFF",
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        borderWidth: 0,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    icon: {
        width: 32,
        height: 32,
    },
})