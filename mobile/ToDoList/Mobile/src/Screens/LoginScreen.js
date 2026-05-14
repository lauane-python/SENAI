import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import { Botao } from '../Components/Botoes.js';
import { useNavigation } from "@react-navigation/native";
import { useState } from 'react';


export default function CadastroScreen() {

    // Criando as hooks para a tela de cadastro
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const navigation = useNavigation()

    function navegarh(){
        navigation.navigate("HomeScreen")
    }
    function navegarc(){
        navigation.navigate("CadastroScreen")
    }
    async function FazerLogin() {
        // ... suas validações de length ...
    
        try {
            // AJUSTADO: Porta 3001 e rota /login
            const resposta = await fetch(`http://10.111.9.96:3001/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: email, senha: senha })
            });
            
            const resultado = await resposta.json();
            console.log("DEBUG LOGIN:", resultado); // Olhe isso no terminal!
    
            if (resultado.resposta === "true" || resultado.resposta === true) {
                Alert.alert("Sucesso", resultado.mensagem);
                navigation.navigate("CriarTarefaScreen");
            } else {
                alert(resultado.mensagem || "Erro ao logar");
            }
        } catch (error) {
            console.log("ERRO DE REDE:", error);
            alert("Não foi possível conectar ao servidor");
        }
    }
    function navegar(){
        navigation.navegar("CriarTarefaScreen")
    }
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Tela de Login</Text>
            <Text>Digite seu Email</Text>
            <TextInput style={styles.input} placeholder=""
            onChangeText={setEmail}
                value={email}
            />
            <Text>Digite sua senha</Text>
            <TextInput style={styles.input}
                onChangeText={setSenha}
                value={senha}
                secureTextEntry

            />
            <Botao texto={"Logar"} cor={"#52839C"} acao={FazerLogin} />
            <Botao texto={"Cadastre-se"} cor={"green"} acao={navegarc}/>
            <Botao texto={"Ir para Home"} cor={"#52839C"} acao={navegarh}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'lightblue',
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center',
    },
    text:{
        textAlign:'center',
        fontSize:40,
    },
    input:{
        width: 320,
        height: 50,
        backgroundColor: 'white',
        // --- Propriedades da Borda ---
        borderWidth: 2,          // Espessura da borda
        borderColor: '#000',      // Cor da borda
        borderRadius: 10,        // Arredondamento dos cantos
        // ----------------------------
      },
})