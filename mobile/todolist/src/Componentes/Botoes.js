import { Text, TouchableOpacity } from "react-native";
import Styles from "../Styles/Styles";
const cores = {
    green: "#716f35",
    blue: "#804256",
    purple: "#a56940"
};
const Botao = ({ cor, texto, acao, tamFonte = 18 }) => {
    return (
        <TouchableOpacity
            onPress={acao}
            style={[
                Styles.botao,
                { backgroundColor: cores[cor] || "#804256" }
            ]}>
            <Text
                style={[
                    Styles.textoBotao,
                    { fontSize: tamFonte }
                ]}>
                {texto}
            </Text>
        </TouchableOpacity>
    );
};
export { Botao };