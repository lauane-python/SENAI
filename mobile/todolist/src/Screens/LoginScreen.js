import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import { Botao } from '../Componentes/Botoes';
import { useNavigation } from "@react-navigation/native";
import { useState } from 'react';
export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const navigation = useNavigation();
    async function FazerLogin() {
        try {
            const resposta = await fetch("http://10.111.9.174:3001/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    senha
                })
            });
            const resultado = await resposta.json();
            if (resultado.resposta === "true") {
                Alert.alert("Sucesso", resultado.mensagem);
                navigation.navigate("CriarTarefaScreen");
            } else {
                Alert.alert("Erro", resultado.mensagem);
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
            <Botao texto="Entrar" cor="green" acao={FazerLogin}/>
            <Botao texto="Cadastro" cor="blue" acao={irCadastro}/>
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