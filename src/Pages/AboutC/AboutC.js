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
            <Grid>
                <Row id='r1' className='show-grid'>
                    <Col md={6} xsHidden smHidden>
                        <img id='aboutc-img' src={img1}></img>
                    </Col>
                    <Col id='congress-desc' md={6}>
                        <h4>Congress</h4>
                        <p>
                            The <strong>IEEE Techloop Congress</strong> is a place for people to come together, collaborate and network. With informative and engaging technical sessions on some of the most promising areas of technology like Artificial Intelligence , Blockchain Technology and Robotics, this is a place where future innovators and enthusiasts can grow, learn, and discuss their ideas. 
                            With some of the most knowledgeable and reputed speakers from all around the country present, ITC is bound to be the best place for delegates to gain experience from some of the best in their field.
                        </p>
                    </Col>
                </Row>

                <Row id='r2' className='show-grid'>
                    <Col id='hackiv-desc' md={6}>
                        <h4>HackIV</h4>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec gravida dui. Maecenas et nulla et eros cursus ornare sit amet non felis. Curabitur ac suscipit ex. Nulla eros massa, euismod et risus a, tincidunt aliquet est. Pellentesque sit amet ornare mauris. Mauris nec massa laoreet, hendrerit sapien sit amet, tempus sem. Aenean vitae porta neque, consectetur luctus justo.
                        Integer tincidunt nisi sit amet erat molestie maximus. Sed nunc diam, aliquam id turpis non, dignissim fringilla eros. 
                        </p>
                    </Col>
                    <Col md={6} xsHidden smHidden>
                        <img id='aboutc-img' src={img2}></img>
                    </Col>
                </Row>
            </Grid>
            </div>
        );
    }
}