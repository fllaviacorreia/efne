import FAB from "@/components/buttons/fab";
import { RoutesParamList } from "@/navigation/AppNavigaton";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, Icon, IconElement, Layout, StyleService, Text } from "@ui-kitten/components";

type Props = {
    text: string;
    nextRoute: Exclude<keyof RoutesParamList, "DetailsAthlete" | "DetailsCategory" | "DetailsFrequency" | "DetailsFinancial">;
  };
  
  export default function NoDataScreen({ text, nextRoute }: Props) {
    
    return (
      <Layout style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        <FAB iconFill="#fff" iconName="plus" nextRoute={nextRoute} />
      </Layout>
    );
  }


const styles = StyleService.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginLeft: 10,
    },
    icon: {
        width: 32,
        height: 32,
      },

      buttonFAB: {
        position: "absolute",
        bottom: 20,
        right: 20,
        width: 70,
        height: 70,
        borderRadius: 50,
        color: "white",
    
      },
});
