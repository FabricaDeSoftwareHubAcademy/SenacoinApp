import {Text, TextInput, View, StyleSheet} from 'react-native';

const MenuLateral = () => {
    return (
        <View>
            <Text>Teste Componetes - Teste</Text>
            <TextInput placeholder='Olá' style={styles1.TextInputML}/>
        </View>
    );
}

const styles1 = StyleSheet.create({
    TextInputML: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 15
    },
  });

export default MenuLateral;
