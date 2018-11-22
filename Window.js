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
export default class Window extends React.Component{
    render(){
        return(
            <View style={styles.container}>
            <FlatList
              data={[
                {key: 'Devin'},
                {key: 'Jackson'},
                {key: 'James'},
                {key: 'Joel'},
                {key: 'John'},
                {key: 'Jillian'},
                {key: 'Jimmy'},
                {key: 'Julie'},
              ]}
              renderItem={({item}) => <Text onPress={() => {debugger;Alert.alert("You pressed...", `${item.key} and what about prop? it is ${this.props.navigation.state.params.param}`)}} style={styles.item}>{item.key}</Text>}
            />
          </View>
        )
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
      height: 44,
    },
  })
  