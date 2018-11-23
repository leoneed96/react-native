import React from "react";
import {
  Alert,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Button
} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./Home";
import Window from "./Window";

const Nav = createStackNavigator({
  Home: { screen: Home },
  Window: { screen: Window }
  // Profile: {screen: ProfileScreen},
});
const App = createAppContainer(Nav);
export default App;

class Reusable extends React.Component {
  render() {
    return <Text>Hello World! My prop is {this.props.param}.</Text>;
  }
}
