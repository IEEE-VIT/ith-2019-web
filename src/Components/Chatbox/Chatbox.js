import { Widget,addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import React, { Component } from 'react';
import './Chatbox.css';

export default class Chatbox extends Component{

    messageHandler = (message) =>{
        fetch('https://mayankchatbot.herokuapp.com/predict',{
            method: 'post',
            headers: {'Content-type':'application/json'},
            body: JSON.stringify({
                query: message
            })
        })
        .then(res => res.json())
        .then(data => {
            addResponseMessage(data.Message)
        })
    }
    componentDidMount(){
        addResponseMessage('Hello, there! You can ask me anything about ITH 2019.')
    }
    render(){
        return(
            <Widget
                handleNewUserMessage={this.messageHandler}
                senderPlaceHolder='Have a question?'
                title="Lexie"
                subtitle="I can answer your questions"
            />
        );
    }
}