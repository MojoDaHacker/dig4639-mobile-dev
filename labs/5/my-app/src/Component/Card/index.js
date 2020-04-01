import React from 'react';
import './index.css';

class Card extends React.Component{
    render(){
        return (
            <div className = 'card'>
                <h1>{this.props.name}</h1>
                <h2>{`${this.props.temp} ${this.props.tempUnit}`}</h2>
                <p>{this.props.forecast}</p>
            </div>
        )
    }
}

export default Card;