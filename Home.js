import React from "react";
import {
  Alert,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Button
} from "react-native";
import { TextInput, FlatList } from "react-native-gesture-handler";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }
  static navigationOptions = {
    title: "Welcome"
  };
  onInput(val) {
    this.setState({ text: val });
  }
  onPress(state) {
    Alert.alert(state.text);
  }
  render() {
    let me = "leoneed";
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, justifyContent: "space-between" }}>
        <View style={{ flex: 1 }} />
        <View style={{ flex: 1 }} />
        <View style={{ flex: 0.2 }}>
          <TouchableOpacity
            onLongPress={() => {
              Alert.alert("Long press", "mmmmmmmm....");
            }}
            onPress={() => {
              navigate("Window");
            }}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>Add TODO!</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 30,
    width: 100,
    alignItems: "center",
    borderRadius: 4,
    backgroundColor: "#2196F3"
  },
  buttonText: {
    padding: 10,
    color: "white"
  }
});
