import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import '../styles/pages/orphanages-map.css'

import mapMarkerImg from '../images/map-marker.svg';
import mapIcon from '../utils/mapIcon';
import api from '../services/api';
import { toast } from 'react-toastify';

interface Orphanage {
    id: number;
    latitude: number;
    longitude: number;
    name: string;
  }

function OrphanagesMap() {

    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

    useEffect(() => {

      try {

        api.get('orphanages').then(response => {
          setOrphanages(response.data);
        });
  
      } catch(e) {
  
        toast.error('Ocorreu um erro ao recuperar os orfanatos');
      }

    }, []);

    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy" />
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong>São Paulo</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>

            <Map center={[-23.539417, -46.560972]}
                 zoom={15}
                 style={{ width: '100%', height: '100%' }}>

                {/* <TileLayer  url={`https://a.tile.openstreetmap.org/{z}/{x}/{y}.png`} />                     */}

                <TileLayer
                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />


              {orphanages.map(orphanage => (
                  <Marker
                    key={orphanage.id}
                    icon={mapIcon}
                    position={[orphanage.latitude, orphanage.longitude]}
                  >
                    <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                      {orphanage.name}
                      <Link to={`/orphanages/${orphanage.id}`}>
                        <FiArrowRight size={20} color="#fff" />
                      </Link>
                    </Popup>
                  </Marker>
                ))}
            </Map>

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>        
    );
}

export default OrphanagesMap;

