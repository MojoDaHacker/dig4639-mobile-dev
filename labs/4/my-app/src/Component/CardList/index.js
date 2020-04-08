import React from 'react';
import todoList from './todoList.json'
import Card from '../Card'

class CardList extends React.Component{
    constructor(props){
        super(props)
        this.state={ 
            cards:todoList.cards.map((v,i) => {
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
            <Card key = {v.id} remCard = {() => this.remCard(v.id)} title ={v.title} content = {v.content} />
        ))
    }
}
//bamm
export default CardList;