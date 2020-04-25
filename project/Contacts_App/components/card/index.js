import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import './index.css';

class Card extends React.Component{
    constructor(props){
        super(props);
        this.state = {contacts : 0}
    }
    render(){
        return (
            <View>
                 <div className = 'card'>
                    <div >{this.props.name}</div>
                    <Icon name="ios-close" type="ionicon" onPress={() => this.props.remContact()}/>
                </div>
            </View>
        )
    }
}

export default Card;