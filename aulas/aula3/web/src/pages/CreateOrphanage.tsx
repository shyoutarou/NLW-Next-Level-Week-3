import React, { ChangeEvent, FormEvent, useState } from "react";
import { Map, Marker, TileLayer } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';
import { useHistory } from "react-router-dom";

import { FiPlus } from "react-icons/fi";

import '../styles/pages/create-orphanage.css';
import Sidebar from "../components/Sidebar";

import mapIcon from '../utils/mapIcon';
import api from "../services/api";
import { toast } from 'react-toastify'

export default function CreateOrphanage() {

  const history = useHistory();

  const [position, setPosition] = useState({ latitude: 0, longitude: 0})

  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [whatsapp, setWhatsApp] = useState('');
  const [instructions, setInstructions] = useState('');
  const [opening_hours, setOpeningHours] = useState('');
  const [open_on_weekends, setOpenOnWeekends] = useState(true);
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  function handleMapClick(event: LeafletMouseEvent) {
    const { lat, lng } = event.latlng;

    setPosition({
      latitude: lat,
      longitude: lng,
    });
  }
  
  function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
    
    if (!event.target.files) return; 

    const selectedImages = Array.from(event.target.files)

    setImages(selectedImages);

    const selectedImagesPreview = selectedImages.map(image => {
      return URL.createObjectURL(image);
    });

    setPreviewImages(selectedImagesPreview);
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const { latitude, longitude } = position;

    try {

      await api.post('orphanages', {name, latitude, longitude, about, whatsapp,
      instructions, opening_hours, open_on_weekends}).then(response => {

        const { id } = response.data;

        const dataimg =  new FormData();
    
        images.forEach(image => {
          dataimg.append('images', image);
        });
    
   
        api.put(`orphanages/${id}`, dataimg);
    
        toast.success(
          'Cadastro realizado com sucesso!',
        );
    
        history.push('/app');   

      });

    } catch(e) {
      toast.error('Ocorreu um erro ao fazer o cadastro');
    }

  }
  
  return (
    <div id="page-create-orphanage">

      <Sidebar/>
      <main>
        <form onSubmit={handleSubmit}  className="create-orphanage-form">
          <fieldset>
            <legend>Dados</legend>

            <Map 
              center={[-23.539417,-46.560972]} 
              style={{ width: '100%', height: 280 }}
              zoom={15}
              onClick={handleMapClick}
            >
              <TileLayer 
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />


              { position.latitude !== 0 && (
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[position.latitude, position.longitude]}
                />
              )}
            </Map>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                value={name}
                onChange={event => setName(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="about">Sobre <span>Máximo de 300 caracteres</span></label>
              <textarea
                id="name"
                maxLength={300}
                value={about}
                onChange={event => setAbout(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="name">Whatsapp</label>
              <input
                id="Whatsapp"
                value={whatsapp}
                onChange={event => setWhatsApp(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="images-container">
                {previewImages.map(image => (
                  <img key={image} src={image} alt={name} />
                ))}

                <label htmlFor="image[]" className="new-image">
                  <FiPlus size={24} color="#15b6d6" />
                </label>
              </div>

              <input type="file"  multiple
                      id="image[]" 
                      onChange={handleSelectImages} />
            </div>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea
                id="instructions"
                value={instructions}
                onChange={event => setInstructions(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Horário de funcinamento</label>
              <input
                id="opening_hours"
                value={opening_hours}
                onChange={event => setOpeningHours(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button type="button" 
                        className={open_on_weekends ? 'active' : ''}
                        onClick={() => setOpenOnWeekends(true)}>
                          Sim
                        </button>
                <button type="button"
                        className={!open_on_weekends ? 'active' : ''}
                        onClick={() => setOpenOnWeekends(false)}>
                          Não
                        </button>
              </div>
            </div>
          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>
      </main>
    </div>
  );
}

