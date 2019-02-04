import React, { Component } from 'react';
import './Header.css'
import {Grid,Row,Col} from 'react-bootstrap';
import img from '../../graphics/238.png';
import main_logo from '../../graphics/itc_main.png';
import calendar from '../../graphics/calendar.png';
import location from '../../graphics/location.png';
export default class Header extends Component{

    componentDidMount(){
        window.addEventListener('scroll', () => {
            var wScroll = document.documentElement.scrollTop;
            var content = document.getElementsByClassName('show-grid');
            content[0].style.transform = 'translate(0px,'+wScroll/2+'px)';
        }, { passive: true })
    }

    render(){
        return(
            <div id='header'>
                <div className='overlay'>
                    <Grid id='header-container' fluid>
                        <Row className='show-grid header-row'>
                            <Col className='title' lg={6} md={6}>
                                <div className='content'>

                                    <img id='itc_main' src={main_logo}/>

                                    <div id='dates'>
                                    <div className='lol'><img id='loc-ico' src={location}/><h5>VIT, Vellore</h5></div>
                                    <div className='lol'><img id='cal-ico' src={calendar}/><h5>29<sup>th</sup> - 31<sup>st</sup> March, 2019</h5></div>
                                    <div
                                    onClick={() => window.location.href='/register'}
                                     className='btn'>REGISTER</div>
                                    </div>
                                </div>
                            </Col>
                            <Col mdHidden xsHidden smHidden>
                                <img src={img} className='graphics'></img>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
        );
    }
}