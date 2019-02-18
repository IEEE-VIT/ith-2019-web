import React, { Component } from 'react';
import './AboutC.css';
import {Grid,Row,Col} from 'react-bootstrap';
import img1 from '../../graphics/2.png';
import img2 from '../../graphics/3.png';
import tl from '../../graphics/techloop.png';

export default class AboutC extends Component{
    render(){
        return(
            <div id='about'>
            <Grid fluid>
                <Row id='r2' className='show-grid'>
                    <Col id='hackiv-desc' md={6} lg={6}>
                        <h4>Hack-a-thon</h4>
                        <p>
                        IEEE-VIT proudly presents a one-of-a-kind Hackathon this ITH. We call upon developers and designers from all over the country to come and join us in looking for solutions to problems with a completely unique perspective. Scheduled to be conducted from the 17<sup>th</sup> of March (8:00 PM) to the 18<sup>th</sup> of March (8:00 PM), this is a 24 hour hack that will give you the opportunity to meet students and professionals working in the bleeding edges of AI and IoT. That’s not all, this hack promises to be full of novelties like mini-events that will affect the results of the hackathon.
                        Doesn't matter if you’re a beginner. Doesn't matter if you don’t have an idea, or even a team! Fret not, our mentors, pioneers and leaders in their respective fields, will be providing their invaluable insights to turn your ideas into a reality. 

                        </p>
                    </Col>
                    <Col md={6} mdHidden xsHidden smHidden lg={6}>
                        <img id='aboutc-img' alt='hackiv' src={img2}></img>
                    </Col>
                </Row>

                <Row id='r3' className='show-grid'>
                    <Col md={6} mdHidden xsHidden smHidden>
                        <img id='tl-img' alt='techloop' src={tl}></img>
                    </Col>
                    <Col id='congress-desc' md={6}>
                        <h4>Techloop</h4>
                        <p>
                        6 years ago, IEEE VIT developed a concept which eventually became the core belief of Techloop - Students Teaching Students. Teaching by means of providing an environment that promotes interaction and hands-on experience. 
                        ITC 2019 presents 3 parallel Techloop tracks:
                        Electronics(E+), UI/UX and Machine Learning (ML). These sessions will be conducted by the members of the IEEE VIT student branch and will provide a concrete base to empower self learning for further development. 

                        </p>     
                    </Col>
                </Row>
            </Grid>
            </div>
        );
    }
}