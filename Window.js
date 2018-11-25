import React from "react";
import {
  Alert,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Picker,
  Button
} from "react-native";
import { TextInput, FlatList } from "react-native-gesture-handler";
export default class Window extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskTitle: "This is the first todo.",
      taskPriority: "Normal"
    };
  }
  static navigationOptions = { title: "Add TODO" };
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>Название</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => this.setState({ taskTitle: text })}
          >
            {this.state.taskTitle}
          </TextInput>
          <Text style={styles.labelMT}>Приоритет</Text>
          <Picker
            style={styles.label}
            selectedValue={this.state.taskPriority}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ taskPriority: itemValue })
            }
          >
            <Picker.Item label="High" value="High" />
            <Picker.Item label="Normal" value="Normal" />
            <Picker.Item label="Low" value="Low" />
          </Picker>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  },
  labelMT: {
    marginLeft: 5,
    marginTop: 5
  },
  label: {
    marginLeft: 5
  },
  textInput: {
    marginLeft: 5,
    marginRight: 5,
    paddingLeft: 5,
    fontSize: 16,
    borderRadius: 3,
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  }
});
