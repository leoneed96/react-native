import React from "react";
import {
  Alert,
  TouchableOpacity,
  StyleSheet,
  Text,
  DatePickerAndroid,
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
      taskPriority: "Normal",
      dateString: "26.11.2018"
    };
  }
  static navigationOptions = { title: "Add TODO" };
  render() {
    const { navigate } = this.props.navigation;
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
            style={styles.picker}
            selectedValue={this.state.taskPriority}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ taskPriority: itemValue })
            }
          >
            <Picker.Item label="High" value="High" />
            <Picker.Item label="Normal" value="Normal" />
            <Picker.Item label="Low" value="Low" />
          </Picker>
          <Text style={styles.labelMT}>Дата</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <Text style={styles.dateString}>{this.state.dateString}</Text>
            <View style={styles.addBtn}>
              <TouchableOpacity
                onPress={async () => {
                  try {
                    const {
                      action,
                      year,
                      month,
                      day
                    } = await DatePickerAndroid.open({
                      date: new Date()
                    });

                    if (action !== DatePickerAndroid.dismissedAction) {
                      this.setState({ dateString: `${day}.${month}.${year}` });
                    }
                  } catch ({ code, message }) {
                    console.warn("Cannot open date picker", message);
                  }
                }}
              >
                <Text style={styles.buttonText}>Choose date</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.pickDateBtn}>
          <TouchableOpacity
            onPress={() => {
              navigate("Home", { item: this.state });
            }}
          >
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
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
  dateString: { marginLeft: 15 },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  },
  labelMT: {
    marginLeft: 5,
    marginTop: 5,
    fontSize: 16
  },
  label: {
    marginLeft: 5,
    fontSize: 16
  },
  picker: {
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
  },
  pickDateBtn: {
    marginRight: 5,
    width: 100,
    alignItems: "center",
    borderRadius: 4,
    alignSelf: "flex-end",
    backgroundColor: "#2196F3"
  },
  addBtn: {
    width: 100,
    borderRadius: 4,
    backgroundColor: "#2196F3",
    alignSelf: "flex-end"
  },
  buttonText: {
    padding: 10,
    color: "white"
  }
});
