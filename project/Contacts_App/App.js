import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import Card from './components/card';
import AddData from './components/addData';

export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      contacts : [],
      showContactAdd: false
    }
  }
  componentDidMount() {
    fetch("http://plato.mrl.ai:8080/contacts", {headers: {API: "mckenzie"}})
    .then((res) => res.json())
    .then((data) => {
      this.setState({contacts: data.contacts});
    });
  }
  addContacts(){
    this.setState({showContactAdd:true})
    
  }
  hideAddContact() {
    this.setState({showContactAdd:false})
    
  }
  showContacts(){
    return (
      this.state.contacts.map((value, index) => {
        return <Card key={index} name= {value.name}/>
      })
    )
  }
  receiveData(data) {
    console.log(data);
    console.log(JSON.stringify({name: data.name, number: data.number}))
    fetch("http://plato.mrl.ai:8080/contacts/add", 
    {method: "POST", 
    headers: {API: "mckenzie"},
    body: JSON.stringify({name: data.name, number: data.number})
    })
    .then((res) => res.json())
    .then((data) => console.log(data));
  }

  render(){
    let Screen;
    if(this.state.showContactAdd) {
      Screen = () => <>
        <Text>Current Contacts</Text>
        <Text>{this.showContacts()}</Text>
        <Icon name="ios-add" type="ionicon" onPress={() => this.addContacts()}/>
        <AddData 
        sendData={(data) => this.receiveData(data)} 
        hideScreen={() => this.hideAddContact()}/> 
      </>
    } else {
      Screen = () => <>
        <Text>Current Contacts</Text>
        <Text>{this.showContacts()}</Text>
        <Icon name="ios-add" type="ionicon" onPress={() => this.addContacts()}/>
      </>
    }

    return (
      <View style={styles.container}>
        <Screen />
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
