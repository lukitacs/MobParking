import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import LoginScreen from "./screens/Login";
import HomeScreen from "./screens/Home";
import { StackNavigator } from "react-navigation";

const RootStack = StackNavigator(
  {
    Login: {
      screen: LoginScreen
    },
    Home: {
      screen: HomeScreen
    }
  },
  {
    initialRouteName: "Login"
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
