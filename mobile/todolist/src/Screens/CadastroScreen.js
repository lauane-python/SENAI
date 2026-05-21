import { Text, View, TextInput } from "react-native";
import { Botao } from "../Componentes/Botoes";
import { useNavigation } from "@react-navigation/native";

import Styles from "../Styles/Styles";

export default function CriarTarefaScreen() {

    const navigation = useNavigation();

    function voltarHome() {
        navigation.navigate("HomeScreen");
    }

    return (

        <View style={Styles.container}>

            <Text style={Styles.titulo}>
                Nova Tarefa
            </Text>

            <Text style={Styles.subtitulo}>
                Organize suas atividades do dia
            </Text>

            <View style={Styles.card}>

                <TextInput
                    style={Styles.input}
                    placeholder="Título da tarefa"
                    placeholderTextColor="#a56940"
                />

                <TextInput
                    style={Styles.input}
                    placeholder="Descrição"
                    placeholderTextColor="#a56940"
                />

                <TextInput
                    style={Styles.input}
                    placeholder="Nível de prioridade"
                    placeholderTextColor="#a56940"
                />

                <Botao
                    texto="Salvar Tarefa"
                    cor="green"
                />

                <Botao
                    texto="Voltar Home"
                    cor="blue"
                    acao={voltarHome}
                />

            </View>

        </View>
    );
}