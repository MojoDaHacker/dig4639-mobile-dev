import React from 'react';
import { StyleSheet, Picker, Text, View } from 'react-native';

export default class Card extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            ans: this.props.ans
        }
    }
    render(){
        return (
            <View >
                <Text>Click to Remove</Text>
                <Text>{this.props.title}</Text>
                <Text>{this.props.content}</Text>
                <Text>
                    <input type= "button" value= {this.props.ans[0]} onClick={() => this.props.chCard("yo", this.props.correct)}></input>
                    <input type= "button" value= {this.props.ans[1]} onClick={() => this.props.chCard("yo", this.props.correct)}></input>
                    <input type= "button" value= {this.props.ans[2]} onClick={() => this.props.chCard("yo", this.props.correct)}></input>
                    <input type= "button" value= {this.props.ans[3]} onClick={() => this.props.chCard("yo", this.props.correct)}></input>
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



