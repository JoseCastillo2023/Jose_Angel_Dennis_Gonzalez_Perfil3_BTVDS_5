import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, FlatList, Image, Button } from 'react-native';
import data from '../data/estudiante';
import { StatusBar } from 'expo-status-bar';

export default function Pagina1({ navigation }) {
  const informacion = data;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pagina 1</Text>
      <Button title="Volver al Inicio" onPress={() => navigation.navigate('Inicio')} />

      <Text style={styles.title}>Mostrando los estudiantes:</Text>
      <View style={styles.flatListContainer}>
        <FlatList
          data={informacion}
          horizontal={true}
          renderItem={({ item }) => (
            <View style={styles.cardContainer}>
              <Image source={item.src} style={styles.image} />
              <Text style={styles.texto}>{item.name}</Text>
              <Text style={styles.texto}>{item.carnet}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    marginTop: StatusBar.currentHeight || 20,
  },
  flatListContainer: {
    height: 160,
    marginHorizontal: 5
  },
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  texto: {
    fontSize: 14,
    textAlign: 'center',
  }
});
