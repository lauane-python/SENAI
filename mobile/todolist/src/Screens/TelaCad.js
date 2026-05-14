import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Botao } from "../Components/Botoes";

import { useNavigation } from "@react-navigation/native";


export default function Telacad(){
    const navigation = useNavigation()

    function navegar(){
        navigation.goBack("HomeScreen")
    }
    return(
        <View style={styles.container}>
            <Text style={styles.text}>MINHA TELA CRIAR</Text>
            <TextInput
                style={styles.text}
            />
            <Botao texto={"Ir para HOME"} cor={"green"} acao={navegar}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'blue',
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center',
    },
    text:{
        textAlign:'center',
        fontSize:40,
    },
})
