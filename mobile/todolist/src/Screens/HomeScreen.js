import { Alert, Text, View } from 'react-native';
import { Botao } from '../Componentes/Botoes';
import { useNavigation } from "@react-navigation/native";
import Styles from '../Styles/Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';

export default function HomeScreen() {
    const navigation = useNavigation();
    async function buscarToken() {
        console.log(await AsyncStorage.getItem("meu_token"))
    }
    useEffect(()=>{
        buscarToken()
    },[])
    return (
        <View style={Styles.container}>
            <Text style={Styles.titulo}>
                TODOLIST
            </Text>
            <Text style={Styles.subtitulo}>
                Organize suas tarefas{"\n"}
                com produtividade e elegância
            </Text>
            <View style={Styles.card}>
                <Botao
                    texto="Cadastre-se"
                    cor="green"
                    acao={() => navigation.navigate("CadastroScreen")}
                />
                <Botao
                    texto="Fazer Login"
                    cor="blue"
                    acao={() => navigation.navigate("LoginScreen")}
                />
            </View>
        </View>
    );
}