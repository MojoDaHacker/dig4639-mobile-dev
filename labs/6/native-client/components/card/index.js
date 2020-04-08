import React from 'react';
import { StyleSheet, Picker, Text, View } from 'react-native';

export default class Card extends React.Component{
    render(){
        return (
            <View >
                <Text className = 'toolTipText'>Click to Remove</Text>
                <Text>{this.props.title}</Text>
                <Text>{this.props.content}</Text>
                <Text>
                    <input type= "button" value= {this.props.ans}></input>
                    <input type= "button" value= {this.props.ans}></input>
                    <input type= "button" value= {this.props.ans}></input>
                    <input type= "button" value= {this.props.ans}></input>
                </Text>
            </View>
        )
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



