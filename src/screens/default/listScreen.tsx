import FAB from "@/components/buttons/fab";
import AthleteCard from "@/components/cards/athleteCard";
import CategoryCard from "@/components/cards/categoryCard";
import { AthleteType, CategoryType, FrequenciesType } from "@/constants/types";
import { RoutesParamList } from "@/navigation/AppNavigaton";
import { Layout, List, StyleService } from "@ui-kitten/components";

type AthleteProps = {
    callCard: "ATHLETE";
    data: AthleteType[];
    nextRoute: Exclude<keyof RoutesParamList, "DetailsAthlete" | "DetailsCategory" | "DetailsFrequency" | "DetailsFinancial">;
  };
  
  type CategoryProps = {
    callCard: "CATEGORY";
    data: CategoryType[];
    nextRoute: Exclude<keyof RoutesParamList, "DetailsAthlete" | "DetailsCategory" | "DetailsFrequency" | "DetailsFinancial">;
  };
  
  // Adicione outras variações aqui se quiser para Frequencies etc.
  
  type Props = AthleteProps | CategoryProps;
  

export default function ListScreen({ callCard, data, nextRoute }: Props) {

    const renderList = () => {
        switch (callCard) {
            case "ATHLETE":
                return <List data={data} renderItem={({ item }) => (<AthleteCard data={item} />)} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', }} style={{ width: "100%", backgroundColor: "#fff" }} />;
            case "CATEGORY":
                return <List data={data} renderItem={({ item }) => (<CategoryCard data={item} />)} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', }} style={{ width: "100%", backgroundColor: "#fff" }} />;
            default:
                return <></>;
        }
    }

    return (
        <Layout style={styles.container}>
            {renderList()}
            <FAB iconFill="#fff" iconName="plus" nextRoute={nextRoute} />
        </Layout>
    );
}



const styles = StyleService.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'baseline',
        backgroundColor: '#fff',
        paddingHorizontal: 10,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginLeft: 10,
    },
});
