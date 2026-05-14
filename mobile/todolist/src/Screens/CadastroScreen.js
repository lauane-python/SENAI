import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import { Botao } from '../Componentes/Botoes';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
export default function CadastroScreen() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const navigation = useNavigation();
    function voltarHome() {
        navigation.navigate("HomeScreen");
    }
    async function CriarCadastro() {
        if (email.length < 5) {
            return Alert.alert("Erro", "Digite um email válido");
        }
        if (senha.length < 5) {
            return Alert.alert("Erro", "Digite uma senha válida");
        }
        try {
            const resposta = await fetch("http://10.111.9.174:3001/cadastrar", {
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
                navigation.navigate("HomeScreen");
            } else {
                Alert.alert("Erro", resultado.mensagem);
            }
        } catch (error) {
            console.log(error);
            Alert.alert("Erro", "Não conectou ao servidor");
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Cadastro</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
            />
            <Botao
                texto="Cadastrar"
                cor="green"
                acao={CriarCadastro}
            />
            <Botao
                texto="Voltar"
                cor="blue"
                acao={voltarHome}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    titulo: {
        fontSize: 30,
        marginBottom: 20
    },
    input: {
        width: 300,
        height: 50,
        borderWidth: 1,
        margin: 10,
        padding: 10
    }
});