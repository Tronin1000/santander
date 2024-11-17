import React from 'react';
import { TouchableOpacity, Image, StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.topo}>
        <TouchableOpacity style={styles.botao}>
          <Image
            source={require('./assets/topo.jpg')}
            resizeMode="cover"
            style={styles.iconeTopo}
          />
        </TouchableOpacity>
        <Image

        />
      </View>

      <View style={styles.centro}>
        <TouchableOpacity style={styles.botao}>
          <Image
            source={require('./assets/santander centro.jpg')}
            style={styles.image}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <Image

        />
      </View>

      <View style={styles.botoes}>
        <TouchableOpacity style={styles.botao}>
          <Image
            source={require('./assets/botao ajuda.jpg')}
            style={styles.iconeBotao}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao}>
          <Image
            source={require('./assets/botao id.jpg')}
            style={styles.iconeBotao}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao}>
          <Image
            source={require('./assets/botao acesso.jpg')}
            style={styles.iconeBotao}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.final}>
        <TouchableOpacity style={styles.botao}>
          <Image
            source={require('./assets/botao pagar.jpg')}
            style={styles.iconeBotaoRodape}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topo: {
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ec0000',
    paddingBlockEnd: 10,
  },
  centro: {
    
    paddingBlockEnd: 40,
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botoes: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'transparent',
    overflow: 'hidden',
  },
  final: {

    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 390,
    height: 480,
  },
  botao: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 2.8,
    shadowRadius: 8,
    elevation: 5,
  },
  iconeBotao: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  iconeTopo: {
    width: 390,
    height: 60,
  },
  iconeBotaoRodape: {
    width: 390,
    height: 80,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 5,
  },
});
