import React, { Component } from 'react';
import './Contact.css';
import {Grid,Row,Col} from 'react-bootstrap';
import hand from '../../graphics/contact.svg';

export default class Contact extends Component{
    componentDidMount(){
        window.addEventListener('scroll', () => {
            var wScroll = document.documentElement.scrollTop;
            var hand = document.getElementById('hand-holder');
            var winH = window.innerHeight;
            if (winH < 700) {
                hand.style.transform = 'translate(0,'+(2000-wScroll*0.75)+'px)';
            }

            else {
                hand.style.transform = 'translate(0,'+(2000-wScroll*0.75)+'px)';
            }
        }, { passive: true })
    }

    render(){
        return(
            <div id='contact'>
            <Grid>
                <Row>
                    <Col clas md={4} lg={4} xsHidden smHidden>
                        <div id='hand-holder'><img id='hand' src={hand}/></div>
                    </Col>
                    <Col id='contact-info' md={8} lg={8}>
                        <h3><strong>Reach out to us</strong></h3>
                        <div className='card-list'>
                            <div className='profile-card'>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Grid>
            </div>
        );
    }
}