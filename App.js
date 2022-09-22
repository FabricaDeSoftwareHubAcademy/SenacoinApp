import { Image, StyleSheet, Text, View } from 'react-native';
import Login from './components/Login';
import logo from './assets/Front.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo}></Image>
      <Text style={styles.clube}>Clube Senacoin</Text>
      <View>
        <Login></Login>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: "rgba(230, 230, 230,1)",
  },
  logo: {
    width: 305,
    height: 250,
    alignContent: 'cover',
    resizeMode: 'stretch'
  },
  clube: {
    textAlign: 'center',
    color: 'red',
    fontWeight: 'bold',
    shadowColor: 'black',
    fontSize: 24
  },
});
