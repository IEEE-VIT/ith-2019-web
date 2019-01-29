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
                            <img src={conf}></img><br/>
                            <h5>Congress</h5>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus porta, posuere leo id, sodales massa. Ut placerat convallis mi eu lobortis. Pellentesque erat libero, posuere et porttitor at, auctor ac arcu. Aenean dapibus sapien vitae diam auctor, at vehicula nulla molestie. 
                            </p>
                            </li>
                        </ul>
                        </section>
                        </Col>
                        <Col md={4}>
                        <section className="sec">
                        <ul>
                            
                            <li>
                            <img src={tl}></img><br/>
                            <h5>Techloop</h5>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus porta, posuere leo id, sodales massa. Ut placerat convallis mi eu lobortis. Pellentesque erat libero, posuere et porttitor at, auctor ac arcu. Aenean dapibus sapien vitae diam auctor, at vehicula nulla molestie. 
                            </p>
                            </li>
                        </ul>
                        </section>
                        </Col>
                        <section className="sec">
                        <ul>
                            
                            <li>
                            <img src={hack}></img><br/>
                            <h5>Hack-a-thon</h5>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus porta, posuere leo id, sodales massa. Ut placerat convallis mi eu lobortis. Pellentesque erat libero, posuere et porttitor at, auctor ac arcu. Aenean dapibus sapien vitae diam auctor, at vehicula nulla molestie. 
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