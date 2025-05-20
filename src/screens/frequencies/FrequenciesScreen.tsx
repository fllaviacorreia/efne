import * as React from 'react';
import { View, Text } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RoutesParamList } from '@/navigation/AppNavigaton';
import NoDataScreen from '../default/noData';
import Loading from '../default/loading';
import { List } from '@ui-kitten/components';
import FAB from '@/components/buttons/fab';

type listFrequenciesScreenProp = NativeStackNavigationProp<RoutesParamList, "ListFrequencies">;

export default function ListFrequenciesScreen() {
  const frequencies:any = [];
  
  if(!frequencies) {
    return <Loading />
  }

  if(frequencies.length == 0) {
    return <NoDataScreen text='Nenhuma frequência cadastrada.' nextRoute='NewFrequency'/>
  }
  

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Frequencies Screen</Text>
       <List
              data={frequencies}
              style={{ width: "100%" }}
              renderItem={({ item }) => (
                <>{JSON.stringify(item)}</>
              )}
            />
            <FAB iconFill="#fff" iconName="plus" nextRoute="NewFrequency" />
      </View>
  );
}