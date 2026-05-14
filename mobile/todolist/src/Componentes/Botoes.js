import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Botao = ({ cor, texto, acao, tamFonte = 20 }) => {
    return (
        <TouchableOpacity
            onPress={acao}
            style={[styles.botao, { backgroundColor: cor }]}
        >
            <Text style={{ fontSize: tamFonte, color: "white" }}>
                {texto}
            </Text>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    botao: {
        padding: 20,
        width: 220,
        alignItems: "center",
        borderRadius: 20,
        margin: 10
    }
});
export { Botao };