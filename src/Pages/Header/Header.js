import React, { Component } from 'react';
import './Header.css'
import {Grid,Row,Col} from 'react-bootstrap';
import img from '../../graphics/238.png'

export default class Header extends Component{

    componentDidMount(){
        window.addEventListener('scroll', () => {
            var wScroll = document.documentElement.scrollTop;
            var content = document.getElementsByClassName('show-grid');
            console.log(content[0]);
            content[0].style.transform = 'translate(0px,'+wScroll/2+'px)';
        }, { passive: true })
    }

    render(){
        return(
            <div id='header'>
                <div className='overlay'>
                    <Grid>
                        <Row className='show-grid header-row'>
                            <Col className='title' lg={6} md={6}>
                                <div className='content'>
                                    <h1>Techloop</h1>
                                    <h1 id='sec-heading'>Congress</h1>
                                    <h5>VIT, Vellore</h5>
                                    <h5>1<sup>st</sup> & 2<sup>nd</sup> August</h5>
                                    <div className='btn'><a>REGISTER</a></div>
                                </div>
                            </Col>
                            <Col md={6} lg={6} xsHidden smHidden>
                                <img src={img} className='graphics'></img>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
        );
    }
}