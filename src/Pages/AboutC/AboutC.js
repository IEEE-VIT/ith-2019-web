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
                        IEEE-VIT proudly presents a one-of-a-kind Hack-a-thon, called Hack-IV. WE call upon developers and designers from
                        all over the country to come and join us in coing up with new and innovative solutions for real world problems. A 24 hour hack,
                        from the 4<sup>th</sup> of March (7:00 PM) to 5<sup>th</sup> of March (7:00 PM), at HackIV, you will get the opportunity 
                        to meet students and professionals from bleeding edges of AI and IoT. HackIV will also include mini-events that do have a 
                        impact on the result of the hack-a-thon. A beginner? Don't have an idea or even a team? Doesn't matter, our mentors will
                        be providing their invaluable insights to turn your ideas into reality. 
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
                        Electronics(E+), Android App Development (A+) and Machine Learning (ML). These sessions will be conducted by the members of the IEEE VIT student branch and will provide a concrete base to empower self learning for further development. 

                        </p>     
                    </Col>
                </Row>
            </Grid>
            </div>
        );
    }
}