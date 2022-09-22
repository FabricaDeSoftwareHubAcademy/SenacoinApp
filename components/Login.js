import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from "react-native";

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <Text style={styles.info}>Entre com a sua conta</Text>
        <Text style={styles.cpf}>CPF</Text>
        <TextInput
          placeholder="Digite seu CPF"
          placeholderTextColor={'gray'}
          style={styles.ph_cpf}
        />
        <Text style={styles.senha}>Senha</Text>
        <TextInput
          placeholder="Digite sua Senha"
          placeholderTextColor={'gray'}
          style={styles.ph_senha}
        />
        <TouchableOpacity style={styles.btn_acessar}>
          <Text style={styles.txt_btn_acessar}>Entrar no clube</Text>
        </TouchableOpacity>
        <View style={styles.esqueceuSuaSenhaRow}>
          <Text style={styles.esqueceuSuaSenha}>Esqueçeu sua senha?</Text>
          <Text style={styles.cliqueAqui}>Clique aqui.</Text>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rect: {
    width: 375,
    height: 753,
    backgroundColor: "rgba(6,6,6,1)",
    marginTop: 35,
    borderTopStartRadius: 15,
    borderTopEndRadius: 15
  },
  info: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    textAlign: "center",
    marginTop: 46,
    fontWeight: "bold"
  },
  cpf: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginTop: 43,
    marginLeft: 68,
    paddingBottom: 10
  },
  ph_cpf: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 34,
    width: 239,
    textAlign: "center",
    fontSize: 16,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    shadowColor: "rgba(0,0,0,1)",
    padding: 10,
    shadowOffset: {
      height: 0,
      width: 0
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginLeft: 68
  },
  senha: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginTop: 36,
    marginLeft: 68,
    paddingBottom: 10
  },
  ph_senha: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 34,
    width: 239,
    textAlign: "center",
    fontSize: 16,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      height: 0,
      width: 0
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginLeft: 68
  },
  btn_acessar: {
    paddingTop: 10,
    paddingBottom: 10,
    width: 239,
    height: 44,
    backgroundColor: "rgba(139,87,42,1)",
    marginTop: 43,
    marginLeft: 68,
    borderRadius: 15
  },
  txt_btn_acessar: {
    color: 'white',
    textAlign: "center",
    fontWeight: "bold"
  },
  esqueceuSuaSenha: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)"
  },
  cliqueAqui: {
    fontFamily: "roboto-700",
    color: "rgba(139,87,42,1)",
    marginLeft: 4,
    fontWeight: "bold"
  },
  esqueceuSuaSenhaRow: {
    height: 17,
    flexDirection: "row",
    marginTop: 23,
    marginLeft: 68,
    marginRight: 94
  }
});

export default Login;
