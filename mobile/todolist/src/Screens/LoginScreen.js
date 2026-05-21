import { Text, View, TextInput, Alert } from 'react-native';
import { Botao } from '../Componentes/Botoes';
import { useNavigation } from "@react-navigation/native";
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Styles from '../Styles/Styles';
export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const navigation = useNavigation();
    async function Logar() {
        try {
            const dados = await fetch('http://10.111.9.174:3000/login', {
                method: "POST",
                headers: {
                    'Content-Type': "application/json",
                },
                body: JSON.stringify({
                    email,
                    senha
                })
            });
            const resposta = await dados.json();
            if (resposta.mensagem === "Acesso Liberado") {
                await AsyncStorage.setItem("meu_token", resposta.token);
                navigation.navigate("CriarTarefaScreen");
            } else {
                Alert.alert("Erro", resposta.mensagem);
            }
        } catch (error) {
            console.log(error);
            Alert.alert("Erro", "Servidor não conectado");
        }
    }
    return (
        <View style={Styles.container}>

            <Text style={Styles.titulo}>
                Login
            </Text>

            <View style={Styles.card}>

                <TextInput
                    style={Styles.input}
                    placeholder="Digite seu email"
                    placeholderTextColor="#a56940"
                    value={email}
                    onChangeText={setEmail}
                />

                <TextInput
                    style={Styles.input}
                    placeholder="Digite sua senha"
                    placeholderTextColor="#a56940"
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry
                />

                <Botao
                    texto="Entrar"
                    cor="green"
                    acao={Logar}
                />

                <Botao
                    texto="Cadastrar"
                    cor="blue"
                    acao={() => navigation.navigate("CadastroScreen")}
                />

            </View>

        </View>
    );
}