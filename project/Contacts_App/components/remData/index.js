import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class RemData extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      name: "",
      number: ""
    }
  }
  componentDidMount() {
    fetch("http://plato.mrl.ai:8080/contacts/remove", 
    {method: "POST", headers: {API: "mckenzie"}, body: {name: this.props.name, number:this.props.number}})
    .then((res) => res.json())
    .then((data) => {
    });
  }
  render(){
    return (
      <View style={styles.container}>
        <Text></Text>
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
