import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


export default function Inicio({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PERFIL 3</Text>

      <Text style={styles.title}>Inicio</Text>
      <Button title="Ir a la pagina 1" onPress={() => navigation.navigate('Pagina1')} />
      <Button title="Ir a la pagina 2" onPress={() => navigation.navigate('Pagina2')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
