import React from 'react';
import './index.css';

class Card extends React.Component{
    render(){
        return (
            <div className = 'card'>
                <div>{this.props.name}</div>
            </div>
        )
    }
}

export default Card;