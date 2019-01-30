import React, { Component } from 'react';
import './Contact.css';
import {Grid,Row,Col} from 'react-bootstrap';
import hand from '../../graphics/contact.svg';

export default class Contact extends Component{
    componentDidMount(){
        window.addEventListener('scroll', () => {
            var wScroll = document.documentElement.scrollTop;
            var hand = document.getElementById('hand-holder');
            hand.style.transform = 'translate(0px,'+-(wScroll-2600)*0.75+'px)';
        }, { passive: true })
    }

    render(){
        return(
            <div id='contact'>
            <Grid>
                <Row>
                    <Col clas md={6} lg={6} xsHidden smHidden>
                        <div id='hand-holder'><img id='hand' src={hand}/></div>
                    </Col>
                    <Col id='contact-info' md={6} lg={6}>
                        <h3>Reach out to us</h3>
                    </Col>
                </Row>
            </Grid>
            </div>
        );
    }
}