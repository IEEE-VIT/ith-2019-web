import React, { Component } from 'react';
import {Navbar,Nav,NavItem} from 'react-bootstrap';
import './Nav.css';

export default class Navigation extends Component{
    render(){
        return(
            <Navbar fluid inverse fixedTop collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                    ITC2019
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                    <NavItem href="#">About Congress</NavItem>
                    <NavItem href="#">Highlights</NavItem>
                    <NavItem href="#">Itinerary</NavItem>
                    <NavItem href="#">Speakers</NavItem>
                    <NavItem href="#">Sponsors</NavItem>
                    <NavItem href="#">About Us</NavItem>
                    <NavItem href="#">Contact Us</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}