import { View, StyleSheet, Text } from "react-native";

const Card = ({ titulo, descricao, cor }) => {

  return (

    <View
      style={[
        styles.card,
        { borderLeftColor: cor }
      ]}
    >

      <Text style={styles.titulo}>
        {titulo}
      </Text>

      <View style={styles.linha}/>

      <Text style={styles.descricao}>
        {descricao}
      </Text>

    </View>
  );
};

const styles = StyleSheet.create({

  card: {
    backgroundColor: "#fff",
    width: "100%",
    borderRadius: 22,
    padding: 20,
    marginBottom: 15,

    borderLeftWidth: 8,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.08,
    shadowRadius: 5,

    elevation: 4
  },

  titulo: {
    fontSize: 20,
    color: "#804256",
    fontFamily: "JosefinSans_700Bold"
  },

  linha: {
    height: 1,
    backgroundColor: "#db9a8f",
    marginVertical: 10
  },

  descricao: {
    fontSize: 15,
    color: "#1f1f1f",
    fontFamily: "JosefinSans_400Regular",
    lineHeight: 22
  }

});

export { Card };