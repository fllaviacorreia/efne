import { AthleteType } from "@/constants/types";
import { Button, Layout, StyleService, Text } from "@ui-kitten/components";
import { Image } from "expo-image";

type Props = {
    data: AthleteType,
}
export default function AthleteCard({ data }: Props) {
    const uriImage = data?.photo ? { uri: data.photo } : require("../../../assets/person_default.jpg")
    const age = calculateAge(data.born)

    return (
        <Layout style={styles.container}>
            <Layout style={styles.containerLeft}>
                <Image style={styles.image} source={uriImage} />
            </Layout>
            <Layout style={styles.containerRight}>
                <Text category='h5' style={styles.text}>{data.name}</Text>
                <Text style={styles.text}>Idade: {age}</Text>
                <Layout style={styles.containerRow}>
                    <Text style={styles.text}>{data.position}</Text>
                    <Text style={styles.text}>{data.status}</Text>
                </Layout>
                <Button size="small" style={{  }}>Ver mais</Button>
            </Layout>
        </Layout>
    )
}

const styles = StyleService.create({
    container: {
        flexDirection: "row",
        width: "99%", 
        alignItems: "center", 
        paddingVertical: 10,
        paddingHorizontal: 10,
        height: 200,
        shadowColor: "#000",
        borderWidth: 0,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginVertical: 10,
        borderRadius: 12,
    },
    containerLeft: {
        marginRight: 10,
        alignItems: "center",
        justifyContent: "center",
        width: 120
    },
    containerRight: {
        marginLeft: 10,
        flex: 1
    },
    containerRow: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    text: {
        marginBottom: 10,
        fontSize: 20,
    },
    image: { 
        width: "100%", 
        height: 160, 
        borderRadius: 20
    },    
})


function calculateAge(born: Date): number {
    // Obter a data atual
    const today = new Date();

    // Calcular a idade base
    let age = today.getFullYear() - born.getFullYear();
    // Ajustar se o aniversário ainda não ocorreu neste ano
    const hasHadBirthdayThisYear =
        today.getMonth() > born.getMonth() ||
        (today.getMonth() === born.getMonth() && today.getDate() >= born.getDate());

    if (!hasHadBirthdayThisYear) {
        age--;
    }

    return age;
}
