import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, Image, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AssetExample from '../components/AssetExample';
import { Card } from 'react-native-paper';

const DetailPage = () => {
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.headerText}>divina leitura</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Image style={styles.logo} source={require('./assets/snack-icon.png')} />
        <View style={styles.info}>
    <Text style={styles.infoText}>informaçoes/comi o cu de quem ta lendo</Text>
</View>    
<Text style={styles.texto2}> mais escritas </Text>
<View style={styles.texto}>
  <Image style={styles.logo} source={require('./assets/snack-icon.png')} />
  <Image style={styles.logo} source={require('./assets/snack-icon.png')} />
  </View>
<Text style={styles.texto3}> mais escritas </Text>
      </ScrollView>
    </View>
  );
};

const styles = {
  header: {
    height: 100,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
    info: {
    height: 80,
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
    infoText: {
    fontSize: 24,
    fontWeight: 'bold',
    justifyContent: 'center'
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    justifyContent: 'center'
  },
  scrollView: {
    padding: 80,
    alignItems: 'center',

  },
texto: {
  flexDirection: 'row'
    
},
texto2: {
    fontSize: 24,
    fontWeight: 'bold',
    justifyContent: 'center'

},
logo:{
  height: 150,
    width: 150

},
texto3: {
  fontSize: 24,
    fontWeight: 'bold',
    justifyContent: 'center'

},

};

export default DetailPage;
