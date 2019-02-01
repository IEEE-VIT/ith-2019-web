import React, { Component } from 'react';
import './AboutC.css';
import {Grid,Row,Col} from 'react-bootstrap';
import img1 from '../../graphics/2.png';
import img2 from '../../graphics/3.png';
import tl from '../../graphics/techloop.png'

export default class AboutC extends Component{
    render(){
        return(
            <div id='aboutc'>
            <Grid fluid>
                <Row id='r1' className='show-grid'>
                    <Col md={6} xsHidden smHidden>
                        <img id='aboutc-img' src={img1}></img>
                    </Col>
                    <Col id='congress-desc' md={6}>
                        <h4>Congress</h4>
                        <p>
                            The <strong>IEEE Techloop Congress</strong> is a place for people to come together, collaborate and network. With informative and engaging technical sessions on some of the most promising areas of technology like Artificial Intelligence , Blockchain Technology and Robotics, this is a place where future innovators and enthusiasts can grow, learn, and discuss their ideas. 
                            With some of the most knowledgeable and reputed speakers from all around the country present, ITC is bound to be the best place for delegates to gain experience from some of the best in their field.
                            This year's theme is <strong>Machine Learning</strong> and <strong>Internet of Things.</strong>
                        </p>
                    
                    </Col>
                </Row>

                <Row id='r2' className='show-grid'>
                    <Col id='hackiv-desc' md={6} lg={6}>
                        <h4>HackIV</h4>
                        <p>
                        IEEE-VIT proudly presents a one-of-a-kind Hack-a-thon, called Hack-IV. WE call upon developers and designers from
                        all over the country to come and join us in coing up with new and innovative solutions for real world problems. A 24 hour hack,
                        from the 4<sup>th</sup> of March (7:00 PM) to 5<sup>th</sup> of March (7:00 PM), at HackIV, you will get the opportunity 
                        to meet students and professionals from bleeding edges of AI and IoT. HackIV will also include mini-events that do have a 
                        impact on the result of the hack-a-thon. A beginner? Don't have an idea or even a team? Doesn't matter, our mentors will
                        be providing their invaluable insights to turn your ideas into reality. 
                        </p>
                    </Col>
                    <Col md={6} xsHidden smHidden lg={6}>
                        <img id='aboutc-img' src={img2}></img>
                    </Col>
                </Row>
            </Grid>
            </div>
        );
    }
}