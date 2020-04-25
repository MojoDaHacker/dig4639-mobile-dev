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
      showContactAdd: false,
      currProfile: "", currLength: 0
    }
  }
  // Need to share the server -- 19006 I shared it
  // Looking now
  // Looks like making two fetch requests, 
  // one before the first returned, was causing the error
  // So just make sure you make the second request after the first completes

  // Then make sure you change the state (using setState)

//everytime I add a contact i have to hard refresh

  componentDidMount() {
    fetch("http://plato.mrl.ai:8080/contacts",
    {method: "GET", 
    headers: {API: "mckenzie", "Content-Type": "application/json"}
    })
    .then((res) => res.json())
    .then((data) => {
      this.setState({contacts: data.contacts});
    });
    fetch("http://plato.mrl.ai:8080/profile",
    {method: "GET", 
    headers: {API: "mckenzie", "Content-Type": "application/json"}
    })
    .then((res) => res.json())
    .then((data) => {
      this.setState({currProfile: data.name, currLength: data.count});
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
        return <Card key={index} name= {value.name} remContact={() => this.remContact(index)} />
      })
    )
  }
  receiveData(data) {
    console.log(data);
    console.log(JSON.stringify({name: data.name, number: data.number}))
    fetch("http://plato.mrl.ai:8080/contacts/add",
    {method: "POST", 
    headers: {API: "mckenzie", "Content-Type": "application/json"},
    body: JSON.stringify({name: data.name, number: data.number})
  })
  .then((res) => res.json())
  .then((data) => {
      let tempArray = [...this.state.contacts]
      tempArray.push(data.added)
      this.setState({contacts: tempArray, currLength: this.state.currLength + 1})
    })
    this.hideAddContact();
  }
  remContact(position){
    console.log(position);
    fetch("http://plato.mrl.ai:8080/contacts/remove", 
    {method: "POST", 
    headers: {API: "mckenzie", "Content-Type": "application/json"},
    body: JSON.stringify({"position": position })
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    // this.updateContacts();
    
    let tempArray = [...this.state.contacts];
    tempArray.splice(position,1)
    this.setState({contacts : tempArray,  currLength: this.state.currLength - 1})
  }

  render(){
    let Screen;
    if(this.state.showContactAdd) {
      Screen = () => <>
        <Text>{this.state.currProfile}'s {this.state.currLength} Contacts</Text>
        <Text>{this.showContacts()}</Text>
        <Icon name="ios-add" type="ionicon" onPress={() => this.addContacts()}/>
        <AddData 
        sendData={(data) => this.receiveData(data)} 
        hideScreen={() => this.hideAddContact()}/> 
      </>
    } else {
      Screen = () => <>
        <Text>{this.state.currProfile}'s {this.state.currLength} Contacts</Text>
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
