import React, { Component } from 'react';
import './Highlights.css';
import {Grid,Row,Col} from 'react-bootstrap';
import conf from '../../graphics/conf.svg';
import tl from '../../graphics/tl.svg';
import hack from '../../graphics/hack.svg';

export default class Highlights extends Component{
    render(){
        return(
            <div id='highlights'>
                <h4>Event Highlights</h4>
                <Grid>
                    <Row  id='h-cards'>
                        <Col md={4}>
                        <section className="sec">
                        <ul>
                            
                            <li>
                            <img src={conf} alt='congress'></img><br/>
                            <h5>Congress</h5>
                            <p>
                                Sessions on Blockchain<br/>
                                Sessions on AI <br/>
                                Student Branch presentations<br/>
                                230+ Delegates<br/>
                                10 IEEE Sections
                            </p>
                            </li>
                        </ul>
                        </section>
                        </Col>
                        <Col md={4}>
                        <section className="sec">
                        <ul>
                            
                            <li>
                            <img src={tl} alt='techloop'></img><br/>
                            <h5>Techloop</h5>
                            <p>
                                Member Benefits Presentation<br/>
                                3 Techloop sessions <br/>
                                Engaging activities<br/><br/><br/>
                            </p>
                            </li>
                        </ul>
                        </section>
                        </Col>
                        <section className="sec">
                        <ul>
                            
                            <li>
                            <img src={hack} alt='hack'></img><br/>
                            <h5>Hack-a-thon</h5>
                            <p>
                                Mentorship by experts<br/>
                                Cash prizes <br/>
                                Exciting goodies<br/>
                                Mini-events<br/><br/>
                            </p>
                            </li>
                        </ul>
                        </section>
                        <Col md={4}>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}