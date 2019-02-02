import React, { Component } from 'react';
import './Contact.css';
import {Grid,Row,Col} from 'react-bootstrap';
import hand from '../../graphics/contact.svg';
import druv from '../../graphics/druvang.jpeg';
import neel from '../../graphics/Neel.jpeg';
import ieee from '../../graphics/ieee_logo.png';
import fb from '../../graphics/facebook.svg';
import ig from '../../graphics/ig.svg';
import li from '../../graphics/linkedin.svg';
import tw from '../../graphics/twitter.svg';

export default class Contact extends Component{
    componentDidMount(){
        window.addEventListener('scroll', () => {
            var wScroll = document.documentElement.scrollTop;
            var hand = document.getElementById('hand-holder');
            var winH = window.innerHeight;
            if (winH < 700) {
                hand.style.transform = 'translate(0,'+(2800-wScroll*0.75)+'px)';
            }

            else {
                hand.style.transform = 'translate(0,'+(3100-wScroll*0.75)+'px)';
            }
        }, { passive: true })
    }

    render(){
        return(
            <div id='contact-us'>
            <Grid fluid>
                <Row>
                    <Col clas md={4} lg={4} xsHidden smHidden>
                        <div id='hand-holder'><img id='hand' alt='contact' src={hand}/></div>
                    </Col>
                    <Col id='contact-info' md={8} lg={8}>
                        <h4>Contact Us</h4>
                        <div className='card-list'>
                            <div className='card'>
                                <img src={neel} alt='chair'/>
                                <h3>Neeladri Biswas</h3>
                                <h4>IEEE-VIT SB Chair</h4>
                                <div className='info'>
                                    <h5>+91 76398 77709</h5>
                                    <h5>biswas.neeladri@gmail.com</h5>
                                </div>
                            </div>

                            <div className='card'>
                                <img src={druv} alt='vice chair'/>
                                <h3>Dhruvang Wagh</h3>
                                <h4>IEEE-VIT SB Vice Chair</h4>
                                <div className='info'>
                                    <h5>+91 83690 91192</h5>
                                    <h5>dhruvang.wagh@gmail.com</h5>
                                </div>
                            </div>
                        </div>       
                        <div className='media'>
                            <h3>Stay Connected</h3>
                            <img id='ieee_logo' src={ieee} alt='ieee-vit'/>
                            <div className='icons'>
                                <a href='https://www.facebook.com/IEEEVIT/'><img src={fb} alt='facebook'/></a>
                                <a href='https://www.instagram.com/ieeevitvellore/?hl=en'><img src={ig} alt='instagram'/></a>
                                <a href='https://twitter.com/ITCVIT2018'><img src={tw} alt='twitter'/></a>
                                <a href='https://www.linkedin.com/company/ieee-vit-vellore/'><img src={li} alt='linkedin'/></a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Grid>
            </div>
        );
    }
}