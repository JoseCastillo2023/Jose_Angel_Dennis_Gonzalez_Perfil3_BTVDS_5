import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import Boton from '../components/Boton';

export default function inicio() {

    const irMenu = async () => {
        navigation.navigate('Menu');
    };

    return (
        <View style={styles.container}>
            <Text>¡Bienvenido usuario!</Text>

            <Boton
                textoBoton='Ir al menu'
                accionBoton={irMenu}
            />
        </View>
    );


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "000000",
    },
});