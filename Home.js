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
        title: 'Welcome',
      };
    onInput(val) {
      this.setState({ text: val });
    }
    onPress(state) {
      Alert.alert(state.text);
    }
    render() {
      let me = "leoneed";
      const {navigate} = this.props.navigation;
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
            <Text onPress={() => {Alert.alert("hm..", "do you pressed text!?")}}>{this.state.text}</Text>
            <TouchableOpacity
              onLongPress={() => {Alert.alert("Long press", "mmmmmmmm....")}}
              onPress={() => {
                Alert.alert("Сообщеньице", this.state.text);
              }}
            >
              <View style={styles.button}>
                <Text style={styles.buttonText}>TouchableOpacity</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigate("Window", {param: "i send it from home.js!!"});
              }}
            >
              <View style={styles.button}>
                <Text style={styles.buttonText}>Navigate</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: "steelblue",
              justifyContent: "center"
            }}
          >
           <FlatList>
            data={[{key: 'Devin'},
              {key: 'Jackson'},
              {key: 'James'},
              {key: 'Joel'},
              {key: 'John'},
              {key: 'Jillian'},
              {key: 'Jimmy'},
              {key: 'Julie'}]}
              renderItem={(item) => <Text style={styles.item}> {item.key} - {item} </Text>}
  
           </FlatList> 
          </View>
        </View>
      );
    }
  }
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center"
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
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