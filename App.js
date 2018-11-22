import React from "react";
import {
  Alert,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Button
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }
  onInput(val) {
    this.setState({ text: val });
  }
  onPress(state) {
    Alert.alert(state.text);
  }
  render() {
    let me = "leoneed";
    return (
      <View style={{ flex: 1, justifyContent: "space-between" }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            backgroundColor: "powderblue",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <TextInput
            style={{
              flex: 0.8,
              borderRadius: 3,
              borderWidth: 2,
              paddingLeft: 4,
              borderColor: "black"
            }}
            onChangeText={text => this.onInput(text)}
            placeholder="type here"
          />
        </View>
        <View
          style={{
            flex: 2,
            backgroundColor: "skyblue",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text>{this.state.text}</Text>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: "steelblue",
            justifyContent: "center"
          }}
        >
          <TouchableOpacity
            onPress={() => {
              Alert.alert("Сообщеньице", this.state.text);
            }}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>TouchableOpacity</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

class Reusable extends React.Component {
  render() {
    return <Text>Hello World! My prop is {this.props.param}.</Text>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: "center",
    backgroundColor: "#2196F3"
  },
  buttonText: {
    padding: 20,
    color: "white"
  }
});
