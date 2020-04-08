import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import questions from './questions.json'
import Card from '../Card'

export default class CardList extends React.Component{
    constructor(props){
        super(props)
        this.state={ 
            cards:questions.questions.map((v,i) => {
                v.id = i
                return v
            })
        }
    }
    remCard(id){
        let cards = this.state.cards.filter((v) => v.id !== id)
        this.setState({cards:cards})
    }
    render(){
        return ( 
            this.state.cards.map((v,i) => 
            <Card key ={v.id} title ={v.title} content = {v.content}
            ans = {v.answers} correct = {v.correctAnswers} />
        ))
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
