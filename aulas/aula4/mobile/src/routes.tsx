import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import OrphanageMap from './pages/OrphanageMap';
import OrphanageDetails from './pages/OrphanageDetails';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }} >
        <Screen name="OrphanagesMap" component={OrphanageMap}  />
        <Screen  name="OrphanageDetails" component={OrphanageDetails} options={ { headerShown: false}}/>
      </Navigator>
    </NavigationContainer>
  );
}