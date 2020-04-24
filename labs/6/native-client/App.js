import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CardList from './components/cardList'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      questionNum: 0
    };
  }
  render(){
    return (
      <View style={styles.container}>
        <CardList id={this.state.questionNum}/>
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
