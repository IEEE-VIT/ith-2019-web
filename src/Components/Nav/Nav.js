import React, { Component } from 'react';
import {Navbar,Nav,NavItem} from 'react-bootstrap';
import './Nav.css';
import logo from '../../mainLogo.png';

export default class Navigation extends Component{
    render(){
        return(
            <Navbar fluid inverse fixedTop collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                    <img src={logo}/>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                    <NavItem href="#">ABOUT CONGRESS</NavItem>
                    <NavItem href="#">HIGHLIGHTS</NavItem>
                    <NavItem href="#">ITINERARY</NavItem>
                    <NavItem href="#">SPEAKERS</NavItem>
                    <NavItem href="#">SPONSORS</NavItem>
                    <NavItem href="#">ABOUT US</NavItem>
                    <NavItem href="#">CONTACT US</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}