import React from 'react';
import './index.css';

class Card extends React.Component{
    render(){
        return (
            <div className = 'card'>
                <div>{this.props.content}</div>
            </div>
        )
        
    }
}

export default Card;