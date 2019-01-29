import React, { Component } from 'react';
import './AboutI.css';
import {Grid,Row,Col} from 'react-bootstrap';

export default class AboutI extends Component{
    render(){
        return(
            <div id='abouti'>
                <h2>About Us</h2>
                <Grid>
                    <Row id='abouti-row'>
                        <Col md={6}>
                            <h4>About VIT</h4>
                            <p>
                            VIT has been unanimously ranked as one of the finest institutions in its domain by magazines including Career360 and India Today. It is one of the premiere institutions in the country accomodating over 20,000 students spread over 15 undergraduate programs and 30 post-graduate programs. It has received several accolades from the ministry of Human Resource Development, Government of India for its phenomenal contribution to the field of higher technical education.
                            </p>
                        </Col>
                        <Col md={6}>
                            <h4>About IEEE-VIT SB</h4>
                            <p>
                            IEEE VIT SB is a student chapter under IEEE international and falls under Region 10 Asia Pacific. IEEE VIT SB is endowed with a stellar team of students, with the right blend of members who aim to foster technological innovation as a student organization at VIT. It is the most distinguished chapter of the Institution and has organized large scale events like Make-a-Thon, SPAx, NASA Space Apps, among many others.
                            </p>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}