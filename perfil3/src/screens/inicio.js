import { StyleSheet, View } from "react-native";

export default function inicio() {

    const irMenu = async () => {
        navigation.navigate('Menu');
    };

    return (
        <View style ={styles.container}>
            <Text>¡Bienvenido usuario!</Text>
        </View>
    );

    <Boton
        textoBoton='Ir al menu'
        accionBoton={irMenu}
    />
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "000000",
    },
});