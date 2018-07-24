import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ImageBackground,
  TouchableOpacity
} from "react-native";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <ImageBackground
        source={require("../images/imgBackground.png")}
        style={styles.backgroundImage}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 80
          }}
        >
          <Image
            source={require("../images/iconMC.png")}
            style={styles.imagebutton}
          />
        </View>
        <View style={styles.ViewInput}>
          <Text style={styles.textInput}> email: </Text>
          <TextInput
            autoCapitalize="none"
            numberOfLines={1}
            keyboardType="email-address"
            underlineColorAndroid={"transparent"}
            style={styles.input}
          />
        </View>

        <View style={styles.ViewInput}>
          <Text style={styles.textInput}> Senha: </Text>
          <TextInput
            numberOfLines={1}
            underlineColorAndroid={"transparent"}
            style={styles.input}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => this.props.navigation.navigate("Home")}
        >
          <Text style={styles.loginText}> ENTRAR </Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: null,
    height: null
  },
  input: {
    height: 40,
    backgroundColor: "rgba(255,255,255,0.35)",
    margin: 20,
    color: "black",
    justifyContent: "center",
    padding: 10,
    fontSize: 15,
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 1
  },
  ViewInput: {
    width: "95%"
  },
  imagebutton: {
    width: 80,
    height: 80,
    marginTop: 5
  },
  textInput: {
    color: "white",
    fontSize: 20
  },
  loginText: {
    color: "white",
    fontSize: 20
  },
  loginButton: {
    backgroundColor: "rgba(24, 104, 5, 0.75)",
    width: "65%",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 20
  }
});

export default LoginScreen;
