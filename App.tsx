
import { Button, StyleSheet, Text,  View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     
      <View style={styles.topo}> <Text> topo</Text></View>
      <View style={styles.centro}> <Text> centro</Text></View>
      <View style={styles.botoes}>
      <Button title="ajuda"  />
      <Button title="tander" />
      <Button title="conta" />
      </View>
      <View style={styles.final}> <Text> Pagar ou Cobrar</Text></View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },

  topo:{
    backgroundColor: "red",
    flex:2,
    alignItems: "center",
    padding: 50
 
  },
  centro:{
    backgroundColor: "green",
    flex:7,

  },
  botoes: {
    backgroundColor: "pink",
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    
    
    
  },
  final:{
    backgroundColor: "gray",
    flex:1.5,

   
  },




});
