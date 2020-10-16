import React from 'react'
import { View , Text, TouchableOpacity } from 'react-native'

import MapView, { Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';

import styles from './styles'
import mapMarker from '../../../assets/images/map-marker.png'

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function OrphanageMap() {

  const navigation = useNavigation();

  function handleNavigateToOphanageDetails() {
    navigation.navigate('OrphanageDetails')
  }
  
  return(
    <View style={styles.container}>
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      initialRegion={{
        latitude: -23.586173,
        longitude: -46.598032,
        latitudeDelta: 0.008,
        longitudeDelta: 0.008,
      }}
    >
      <Marker
        icon={mapMarker}
        calloutAnchor={{ x: 2.7, y: 0.8 }}
        coordinate={{ latitude: -23.586173, longitude: -46.598032, }}
      >
        <Callout tooltip  onPress={handleNavigateToOphanageDetails} >
          <View style={styles.calloutContainer}>
            <Text style={styles.calloutText}>Lar das meninas</Text>
          </View>
        </Callout>
      </Marker>
    </MapView>

    <View style={styles.footer}>
      <Text style={styles.footerText}>2 orfanatos encontrados</Text>
<TouchableOpacity style={styles.createOrphanageButton} onPress={()=>{alert("oi")}}>
  <Feather name="plus" size={20} color="#fff" />
</TouchableOpacity>
    </View>
  </View>
  );
}


















