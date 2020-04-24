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
            }),
            questionNum: this.props.id
        }
    }
    chCard(ansSelect, correctAns){
        console.log("test")
        var grade = []
        console.log(ansSelect)

        grade[this.state.questionNum] = (ansSelect == correctAns) ? true : false;
        
        if (grade.length == 5) {
            grade.forEach(element => {
                if (element == true) {
                    var score = 0 ;
                    score = score + 25
                    console.log(score)
                }
            });
        }
        this.setState({questionNum:this.state.questionNum + 1})
    }
    render(){
        return ( 
            this.state.cards.map((v,i) => {
                if (this.state.questionNum == i) {
                    return (<Card key ={v.id} title ={v.title} content = {v.content}
                    ans ={v.answers} correct ={v.correctAnswers} chCard= {() => this.chCard()} />)
                }
            })
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
