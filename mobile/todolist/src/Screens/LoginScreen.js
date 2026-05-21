import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import { Botao } from '../Componentes/Botoes';
import { useNavigation } from "@react-navigation/native";
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
                    email:email,
                    senha:senha
                })
            });
            const resposta = await dados.json();
            console.log(resposta)
            if (resposta.mensagem === "Acesso Liberado") {
                await AsyncStorage.setItem("meu_token",resposta.token)
                navigation.navigate("CriarTarefaScreen");
            } else {
                Alert.alert("Usuário ou senha inválido", resposta.mensagem);
            }
        } catch (error) {
            console.log(error);
            Alert.alert("Erro", "Servidor não conectado");
        }
    }
    function irCadastro() {
        navigation.navigate("CadastroScreen");
    }
    function irHome() {
        navigation.navigate("HomeScreen");
    }
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
            />
            <Botao texto="Logar" cor="green" acao={Logar}/>
            <Botao texto="Cadastrar" cor="blue" acao={irCadastro}/>
            <Botao texto="Home" cor="purple" acao={irHome}/>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    titulo:{
        fontSize:30
    },
    input:{
        width:300,
        height:50,
        borderWidth:1,
        margin:10,
        padding:10
    }
});