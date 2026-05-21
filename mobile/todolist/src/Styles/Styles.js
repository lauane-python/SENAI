import { StyleSheet } from "react-native";

const cores = {
    bege: "#eccc6e",
    rose: "#db9a8f",
    vinho: "#804256",
    claro: "#f2e9e1",
    marrom: "#a56940",
    oliva: "#716f35",
    preto: "#1f1f1f"
};

const Styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: cores.claro,
        justifyContent: "center",
        alignItems: "center",
        padding: 25
    },

    titulo: {
        fontSize: 42,
        color: cores.vinho,
        fontFamily: "JosefinSans_700Bold",
        marginBottom: 10,
        letterSpacing: 2
    },

    subtitulo: {
        fontSize: 18,
        color: cores.marrom,
        marginBottom: 40,
        textAlign: "center",
        fontFamily: "JosefinSans_400Regular"
    },

    input: {
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: 18,
        padding: 18,
        marginBottom: 18,
        fontSize: 16,

        borderWidth: 1,
        borderColor: cores.rose,

        fontFamily: "JosefinSans_400Regular",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.08,
        shadowRadius: 5,

        elevation: 5
    },

    botao: {
        width: "100%",
        padding: 18,
        borderRadius: 18,
        alignItems: "center",
        marginTop: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.15,
        shadowRadius: 5,

        elevation: 5
    },

    textoBotao: {
        color: "#fff",
        fontSize: 18,
        fontFamily: "JosefinSans_700Bold",
        letterSpacing: 1
    },

    card: {
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: 30,
        padding: 25,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6
        },
        shadowOpacity: 0.1,
        shadowRadius: 6,

        elevation: 6
    },

    cardTarefa: {
        width: "100%",
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 22,
        marginBottom: 15,

        borderLeftWidth: 8,
        borderLeftColor: cores.vinho,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.08,
        shadowRadius: 5,

        elevation: 4
    },

    textoCard: {
        fontSize: 16,
        color: cores.preto,
        marginTop: 10,
        fontFamily: "JosefinSans_400Regular"
    }

});

export default Styles;