import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, TouchableOpacity, Text, TextInput, View } from 'react-native';
import logo from './assets/galaxia.png';
import MenuLateral from './components/MenuLateral';
import PizzaTranslator from './components/PizzaTranslator';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={{ width: 305, height: 159 }} />
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Novo Texto</Text>
      <Image source={{ uri: "https://i.imgur.com/TkIrScD.png" }} style={{ width: 305, height: 159 }} />
      <StatusBar style="auto" />
      <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={{ backgroundColor: 'blue' }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>Pick a photo</Text>
      </TouchableOpacity>
      <TextInput placeholder='Escrever' style={styles.TextInput}></TextInput>
      <PizzaTranslator/>
      <MenuLateral style={styles.TextInputML}/>
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
  TextInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 15
  },
});
