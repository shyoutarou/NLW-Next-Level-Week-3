import React from 'react';
import { AppLoading } from 'expo'
import { Nunito_600SemiBold,Nunito_700Bold, Nunito_800ExtraBold, useFonts } from '@expo-google-fonts/nunito'
import Routes from './src/routes';

export default function App() {

  let [fontsLoaded] = useFonts({
      Nunito_600SemiBold,
      Nunito_700Bold,
      Nunito_800ExtraBold
  })

  if (!fontsLoaded){
    return <AppLoading/>
  } else {
    return (
        <Routes/>
    );
  }
}

