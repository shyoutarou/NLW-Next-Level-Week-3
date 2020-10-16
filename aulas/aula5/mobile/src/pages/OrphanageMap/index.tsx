import React, { useCallback, useEffect, useState } from 'react'
import { View , Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler';
import MapView, { Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';

import { Feather } from '@expo/vector-icons';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import styles from './styles'
import mapMarker from '../../../assets/images/map-marker.png'
import api from '../../services/api';

interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

export default function OrphanageMap() {

  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      api.get('orphanages').then(response => {
        setOrphanages(response.data);
      });
    }, [])
  );

  function handleNavigateToCreateOphanage() {
    navigation.navigate('SelectMapPosition')
  }

  function handleNavigateToOphanageDetails(id: number) {
    navigation.navigate('OrphanageDetails', {id})
  }
  
  return(
    <View style={styles.container}>
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      initialRegion={{ latitude: -23.586173, longitude: -46.598032,
                       latitudeDelta: 0.008, longitudeDelta: 0.008,
      }}
    >
        {orphanages.map(orphanage => (
          <Marker
            key={orphanage.id}
            icon={mapMarker}
            calloutAnchor={{ x: 2.7,  y: 0.8, }}
            coordinate={{
              latitude: orphanage.latitude,
              longitude: orphanage.longitude,
            }}
          >
            <Callout tooltip onPress={() => handleNavigateToOphanageDetails(orphanage.id)}>
              <View style={styles.calloutContainer}>
                <Text style={styles.calloutText}>{orphanage.name}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
    </MapView>

    <View style={styles.footer}>
      <Text style={styles.footerText}>{orphanages.length} orfanatos encontrados</Text>
        <RectButton style={styles.createOrphanageButton} onPress={handleNavigateToCreateOphanage}>
          <Feather name="plus" size={20} color="#fff" />
        </RectButton>
    </View>
  </View>
  );
}


















