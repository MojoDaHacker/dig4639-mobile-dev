import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


export default class AddData extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      name: "",
      number: ""
    }
  }
  handleTextInut(text,field){
    // (field == "Name")? this.setState(name:text)
  }
  sendData() {
    this.props.sendData({name: this.state.name, number: this.state.number})
  }
  render(){
    return (
      <View style={styles.container}>
        <TextInput 
          placeholder= "Name" onChangeText={text => this.setState({name: text})}
        />
        <TextInput 
          placeholder= "Number" onChangeText={text => this.setState({number: text})}
        />
        <Button onPress={this.props.hideScreen} title="Done" />
        <Button onPress={() => this.sendData()} title="Send" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
