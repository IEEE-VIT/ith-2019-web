import React, { Component } from 'react';
import './AboutI.css';
import {Grid,Row,Col} from 'react-bootstrap';

export default class AboutI extends Component{
    render(){
        return(
            <div id='about-ieeevit'>
                <h2>About Us</h2>
                <Grid >
                    <Row id='abouti-row'>
                        <Col md={6} lg={6}>
                            <h3>About VIT</h3>
                            <p>
                            VIT University is one of the finest and most technologically adept Institutions in its domain. Having made its presence felt both in and outside India, it stands tall in multiple national and international rankings. Sporting over 35,000 students from over 60 countries, VIT has become a hub for technical growth and knowledge. Offering 36 Undergraduate, 31 Post Graduate, 4 Integrated and 3 Research Programmes, VIT nurtures a plethora of subjects and fields both inside and outside the classroom. VIT University has proven on multiple grounds and occasions that it is the most premium institute in India for the complete development of a student both as a scholar and as a human being. 
                            </p>
                        </Col>

                        <Col md={6} lg={6}>
                            <h3>About IEEE-VIT SB</h3>
                            <p>
                            IEEE VIT SB is a student chapter under IEEE international and falls under Region 10 Asia Pacific. IEEE VIT SB showcases the right blend of students that offer an assortment of skills and knowledge beyond just technical fields. It stands tall as one of the most distinguished chapters of this institution and beyond, conducting multiple large scale events such as ITC, SPAx, NASA Space Apps among many others. 
                            </p>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}