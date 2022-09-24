import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons'

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <Text style={styles.info}>Entre com a sua conta</Text>
        <Text style={styles.cpf}>CPF</Text>
        <View style={styles.vw_cpf}>
        <TextInput
          maxLength={11}
          placeholder="Digite seu CPF"
          placeholderTextColor={'gray'}
          style={styles.ph_cpf}
        />
        </View>
        <Text style={styles.senha}>Senha</Text>
        <View style={styles.vw_senha}>
          <TextInput
            maxLength={10}
            textContentType="password"
            placeholder="Digite sua Senha"
            placeholderTextColor={'gray'}
            style={styles.ph_senha}
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.icon}>
            <Ionicons name="eye" color="white" size="25"></Ionicons>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.btn_acessar}>
          <Text style={styles.txt_btn_acessar}>Entrar no clube</Text>
        </TouchableOpacity>
        <View style={[styles.esqueceuSuaSenhaRow, styles.rect]}>
          <Text style={styles.esqueceuSuaSenha}>Esqueçeu sua senha?</Text>
          <Text style={styles.cliqueAqui}>Clique aqui.</Text>
        </View>
        <View>
          <Text style={styles.rodape}>Aqui</Text>
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
    flex: 1,
    backgroundColor: "rgba(6,6,6,1)",
    marginTop: 35,
    borderTopStartRadius: 15,
    borderTopEndRadius: 15
  },
  info: {
    color: "rgba(255,255,255,1)",
    ////: '24',
    textAlign: "center",
    marginTop: 46,
    fontWeight: "bold"
  },
  vw_cpf: {
    flexDirection: "row",
    height: 34,
    marginLeft: 68,
    width: 239,
    borderRadius: 10,
    alignContent: "center",
    alignItems: "center",
  },
  cpf: {
    color: "rgba(255,255,255,1)",
    //: 16,
    marginTop: 43,
    marginLeft: 68,
    paddingBottom: 10
  },
  ph_cpf: {
    keyboardType: 'numeric',
    color: "black",
    height: 34,
    width: 239,
    textAlign: "center",
    //: 16,
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
  },
  senha: {
    color: "rgba(255,255,255,1)",
    //: 16,
    marginTop: 36,
    marginLeft: 68,
    paddingBottom: 10
  },
  vw_senha: {
    flexDirection: "row",
    height: 34,
    marginLeft: 68,
    width: 239,
    borderRadius: 10,
    alignContent: "center",
    alignItems: "center",
  },
  ph_senha: {
    color: "black",
    width: '85%',
    height: '100%',
    textAlign: "center",
    //: 16,
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
  },
  icon: {
    width: '15%',
    backgroundColor: "black",
    alignItems: "center"
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
    color: "rgba(255,255,255,1)"
  },
  cliqueAqui: {
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
  },
  rodape: {
    color: "white",
    flexWrap: "wrap",
    textAlign: "center"
  }
});

export default Login;
