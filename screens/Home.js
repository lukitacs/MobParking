import React, { Component } from "react";
import { View, Text, Button } from "react-native";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = {
    title: "Home",
    headerStyle: {
      backgroundColor: "lightkblue"
    },
    headerTintColor: "black",
    headerRight: <Button title="Perfil" />
  };

  render() {
    return (
      <View>
        <Text> Tela Home </Text>
      </View>
    );
  }
}

export default HomeScreen;
