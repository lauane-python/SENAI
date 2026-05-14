import { StyleSheet, Text, View, TextInput } from "react-native";
import { Botao } from "../Componentes/Botoes";
import { useNavigation } from "@react-navigation/native";

export default function CriarTarefaScreen() {
    const navigation = useNavigation();
    function voltarHome() {
        navigation.navigate("HomeScreen");
    }
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Criar Tarefa</Text>
            <TextInput
                style={styles.input}
                placeholder="Título"
            />
            <TextInput
                style={styles.input}
                placeholder="Descrição"
            />
            <TextInput
                style={styles.input}
                placeholder="Nível"
            />
            <Botao
                texto="Voltar Home"
                cor="green"
                acao={voltarHome}
            />
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