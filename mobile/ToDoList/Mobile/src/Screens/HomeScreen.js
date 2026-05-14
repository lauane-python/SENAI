import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Botao } from '../Components/Botoes.js';
import { useNavigation } from "@react-navigation/native";


export default function HomeScreen(){
    const navigation = useNavigation()

    function navegarc(){
        navigation.navigate("CadastroScreen")
    }
    function navegarl(){
        navigation.navigate("LoginScreen")
    }
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>Minha tela HomeScreen</Text>
            <Botao texto={"Cadastre-se"} cor={"green"} acao={navegarc}/>
            <Botao texto={"Fazer Login"} cor={"blue"} acao={navegarl}/>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    todo:{
      fontSize:30,
      margin:20,
      color:"purple"
    },
    texto:{
        textAlign:'center'
    }
  });
  