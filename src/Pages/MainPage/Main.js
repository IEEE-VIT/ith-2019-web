import React, { Component } from 'react';
import './Main.css'
import Navigation from '../../Components/Nav/Nav';
import logo from '../../ieee_logo.png'
import {Button} from 'react-bootstrap';

export default class Main extends Component{
    render(){
        return(
            <div className='home'>
                <div className='bg'></div>
                <div className='content'>
                    <h2 className='title'>TechLoop Congress</h2>
                    <h4>VIT, Vellore</h4>
                    <h5>3rd - 5th August</h5>
                    <div className='button-container'>
                        <Button>REGISTER</Button>
                        <Button className='sec'>READ MORE</Button>
                    </div>
                </div>
                <div className='temp'>
                    hi
                </div>
            </div>
        );    }

}