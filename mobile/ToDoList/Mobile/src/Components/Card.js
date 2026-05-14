import { View, StyleSheet, Text } from "react-native";

const Card = ({ titulo, descricao, cor }) => {
  return (
    <View style={[styles.ContornoCard, { backgroundColor: cor }]}>
      <Text style={styles.titulo}>{titulo}</Text>
      
      {/* Linha separadora elegante */}
      <Text>_______________</Text>
      
      <Text style={styles.descricao}>{descricao}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ContornoCard: {
    borderWidth: 1,
    borderColor: 'black',
    width: 120,
    height: 150,
    margin: 15, 
    borderRadius: 15, 
    padding: 10, 
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 5,
  },
  descricao: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
    marginTop: 5,
  }
});

export { Card };