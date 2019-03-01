import React, { Component } from 'react';
import './Sponsors.css';
import code_as from '../../graphics/sponsors/code asylums.png';
import jetbrains from '../../graphics/sponsors/jetbrains.png';
import bugsee from '../../graphics/sponsors/logo_bugsee.png';
import sketch from '../../graphics/sponsors/sketch logo.png';
import skillenza from '../../graphics/sponsors/skillenza logo.png';
import pses from '../../graphics/pses_logo.png'
import {Grid,Row,Col} from 'react-bootstrap';
export default class Sponsors extends Component{
    render(){
        return(
            <div id='sponsors'>
            <h4>Our Sponsors</h4>
            <div style={{
                "display":"flex",
                "alignItems": "center",
                "justifyContent": "center",
                "marginBottom":"126px"
            }}>
                <div id='sponsor-holder'>
                    <div className='sponsor-card'>
                        <div className='tile'>
                            <img src={code_as}/>
                        </div>
                    <p>Code Asylums</p>
                    </div>

                    <div className='sponsor-card'>
                        <div className='tile'>
                            <img src={jetbrains}/>
                        </div>
                    <p>Jet Brains</p>
                    </div>

                    <div className='sponsor-card'>
                        <div className='tile'>
                            <img src={bugsee}/>
                        </div>
                    <p>Bugsee</p>
                    </div>

                    <div className='sponsor-card'>
                        <div className='tile'>
                            <img src={sketch}/>
                        </div>
                    <p>Sketch</p>
                    </div>

                    <div className='sponsor-card'>
                        <div className='tile'>
                            <img src={skillenza}/>
                        </div>
                    <p>Skillenza</p>
                    </div>
                </div>
            </div>
            <h4>In collaboration with</h4>
            <div style={{
                "display":"flex",
                "alignItems": "center",
                "justifyContent": "center",
                "marginBottom":"36px"
            }}>
                <div id='sponsor-holder'>
                    <div className='sponsor-card'>
                        <div className='tile'>
                            <img src={pses}/>
                        </div>
                    <p>IEEE PSES VIT</p>
                    </div>
                </div>
            </div>
            </div>

        );
    }
}