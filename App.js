import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, TouchableOpacity, Text, TextInput, View } from 'react-native';
import logo from './assets/Front.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.clube}>Clube Senacoin</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 160,
    alignContent: 'cover'
  },
  clube: {
    textAlign: 'center',
    color: 'red',
    fontWeight: 'bold',
    shadowColor: 'black',
    paddingHorizontal: 12
  }
});
