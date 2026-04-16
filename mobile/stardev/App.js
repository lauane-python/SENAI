import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.box1}>
        <Text style={styles.titulo}>Welcome to the React Native</Text>
      </View>

      <View style={styles.box2}>
        <Text style={styles.titulo}>Welcome to the React Native</Text>
      </View>

      <View style={styles.box3}>
        <Text style={styles.titulo}>Welcome to the React Native</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  box1: {
    width: 60,
    height: 200,
    backgroundColor: '#db9a8f',
    Color:'#db9a8f',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },

  box2: {
    width: 60,
    height: 200,
    backgroundColor: '#716f35',
    Color:'#db9a8f',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },

  box3: {
    width: 60,
    height: 200,
    backgroundColor: '#a56940',
    Color:'#db9a8f',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },

  titulo: {
    textAlign: 'center',
    fontSize: 20,
    color: '#804256',
    fontWeight: 'bold',
  },
});
