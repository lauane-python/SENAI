import { StyleSheet, Text, View } from 'react-native';
import { Botao } from '../Componentes/Botoes';
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
    const navigation = useNavigation();

    function navegarCadastro() {
        navigation.navigate("CadastroScreen");
    }

    function navegarLogin() {
        navigation.navigate("LoginScreen");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Minha Tela Home</Text>

            <Botao
                texto="Cadastre-se"
                cor="green"
                acao={navegarCadastro}
            />

            <Botao
                texto="Fazer Login"
                cor="blue"
                acao={navegarLogin}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto: {
        fontSize: 25,
        marginBottom: 20
    }
});