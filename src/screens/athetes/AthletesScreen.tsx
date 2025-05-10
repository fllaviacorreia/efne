import * as React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RoutesParamList } from '@/navigation/AppNavigaton';
import { useNavigation } from '@react-navigation/native';
import { useAthletesContext } from '@/context/AthletesContext';
import { Button, Icon, IconElement, Layout, List, StyleService, Text } from '@ui-kitten/components';
import AthleteCard from '@/components/cards/athleteCard';


type listAthletesScreenProp = NativeStackNavigationProp<RoutesParamList, "ListAthletes">;

export default function ListAthletesScreen() {
  const navigation = useNavigation<listAthletesScreenProp>();

  const { athletes } = useAthletesContext()

  if (!athletes) {
    return (
      <Layout style={styles.container}>
        <Text>Carregando..</Text>
      </Layout>
    )
  }
  
  const IconSimpleUsageShowcase = (): IconElement => (
    <Icon
      style={styles.icon}
      fill='#fff'
      name='plus'
    />
  );

  if (athletes.length == 0) {
    return (
      <Layout style={styles.container}>
        <Text category='h5'>Não há atletas cadastrados</Text>
        <Button style={styles.buttonFAB} onPress={() => navigation.navigate('NewAthlete')}><IconSimpleUsageShowcase /></Button>
      </Layout>
    )
  }

  return (
    <Layout style={styles.container}>
      <Text category='h5' style={styles.title}>Atletas</Text>
      <List
        data={athletes}
        style={{ width: "100%" }}
        renderItem={({ item }) => (
          <AthleteCard image='assets/icon.png' data={item} />
        )}
      />
      <Button style={styles.buttonFAB} onPress={() => navigation.navigate('NewAthlete')}><IconSimpleUsageShowcase /></Button>
    </Layout>
  );
}

const styles = StyleService.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 10,
    paddingTop: 48,
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    marginBottom: 20,
  },
  buttonFAB: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  icon: {
    width: 32,
    height: 32,
  },
});