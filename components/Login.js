import { StyleSheet, Text, TextInput, View } from "react-native";

const Login = () => {
    return (
        <View>
            <Text style={AreaLogin.login}>Ola Texto</Text>
            <TextInput></TextInput>
        </View>
    );
}

const AreaLogin = StyleSheet.create({
    login: {
      color: 'white',
      backgroundColor: 'black',
      width: "100%",
      height: "90%",
      borderRadius: 15,
      alignItems: "center",
      alignContent: "center",
    },
  });

export default Login;
