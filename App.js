import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Pagina2 from './src/screens/Pagina2';
import Inicio from './src/screens/Inicio';
import Pagina1 from './src/screens/Pagina1';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Pagina1" component={Pagina1} />
        <Stack.Screen name="Pagina2" component={Pagina2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
