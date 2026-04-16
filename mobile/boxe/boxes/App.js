import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.branca1}>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      </View>

      <View style={styles.branca2}>
      <View style={styles.box3}></View>
      <View style={styles.box4}></View>
      </View>


      <View style={styles.branca3}>
      <View style={styles.box5}></View>
      </View>


      <View style={styles.branca4}>
      <View style={styles.box6}></View>
      <View style={styles.branca5}>
      <View style={styles.box7}></View>
        <View style={styles.box8}></View>
      </View>
      </View>
     


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    flexDirection:'column'
  },

  branca1:{
    backgroundColor:'white',
    marginTop: 10,
    flexDirection: 'row'

   },

   box1:{
    width:120,
    height:125,
    backgroundColor: 'pink',
    margin:10,
    borderRadius: 15
   },
 
   box2:{
    width:250,
    height:125,
    backgroundColor: 'red',
    margin:10,
    borderRadius: 15
   },




   branca2:{
    backgroundColor:'white',
    marginTop: 10,
    flexDirection: 'row'
   },

   box3:{
    width:250,
    height:125,
    backgroundColor: 'pink',
    margin:10,
    borderRadius: 15
   },
 
   box4:{
    width:120,
    height:125,
    backgroundColor: 'red',
    margin:10,
    borderRadius: 15
   },




   branca3:{
    backgroundColor:'white',
    marginTop: 10,
    flexDirection: 'row'
   },

   box5:{
    width:390,
    height:125,
    backgroundColor: 'purple',
    margin:10,
    borderRadius: 15
   },

   branca4:{
    backgroundColor:'blue',
    marginTop: 10,
    flexDirection: 'row'
   },

   branca5:{
    backgroundColor:'white',
    marginTop: 10,
    flexDirection: 'column',
    justifyContent: 'space-between'
   },

   box6:{
    width:125,
    height:390,
    backgroundColor: 'purple',
    margin:10,
    borderRadius: 15
   },


   box7:{
    width:250,
    height:125,
    backgroundColor: 'purple',
    margin:10,
    borderRadius: 15
   },


   box8:{
    width:250,
    height:125,
    backgroundColor: 'pink',
    margin:10,
    borderRadius: 15,
 
   },
});