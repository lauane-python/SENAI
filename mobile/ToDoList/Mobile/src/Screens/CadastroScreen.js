import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import { Botao, BotaoVerde, BotaoGrande } from '../Components/Botoes';
import { useNavigation } from '@react-navigation/native';

// importando a biblioteca para criar hooks
import { useState } from 'react';
import HomeScreen from './HomeScreen';

export default function CadastroScreen() {

    // Criando as hooks para a tela de cadastro
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const navigation = useNavigation()
    
    function navegarh(){
        navigation.navigate("HomeScreen")
    }


    async function CriarCadastro() {
        if (email.length < 5) {
            return Alert.alert("ATENÇÃO", "Preencha o e-mail corretamente !")
        }
        if (senha.length < 5) {
            return Alert.alert("ATENÇÃO", "Preencha o campo senha !")
        }
    
        try {
            const resposta = await fetch(`http://10.111.9.96:3001/cadastrar`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "email": email,
                    "senha": senha
                })
            });
    
            const resultado = await resposta.json();
            console.log("RESPOSTA DO SERVIDOR:", resultado);
    
            if (resultado.resposta == "true" || resultado.resposta == true) {
                alert(resultado.mensagem);
                navigation.navigate("HomeScreen");
            } else {
                alert("Erro do Servidor: " + (resultado.mensagem || "Erro desconhecido"));
            }
        } catch (error) {
            console.log("ERRO NA REQUISIÇÃO:", error);
            Alert.alert("Erro", "Não foi possível conectar ao servidor.");
        }
    } // <--- Agora tudo termina aqui dentro
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Tela de Cadastro</Text>

            <Text style={{ fontSize: 22 }}>Digite seu E-mail</Text>
            <TextInput style={styles.input}
                onChangeText={setEmail}
                value={email}
            />

            <Text style={{ fontSize: 22 }}>Digite sua senha</Text>
            <TextInput style={styles.input}
                onChangeText={setSenha}
                value={senha}
                secureTextEntry
            />

            <Botao acao={CriarCadastro} texto={"Finalizar Cadastro"} cor={"#52a4e3"} tamanhoFonte={30} />
            <Botao acao={navegarh} texto={"Voltar a Home"} cor={"#52a4e3"} tamanhoFonte={30} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 50
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 30
    },
    input: {
        borderWidth: 1,
        width: 300,
        borderRadius: 10,
        marginVertical: 20,
        fontSize: 30,
        height: 60
    }
})