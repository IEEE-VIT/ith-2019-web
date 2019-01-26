import React, { Component } from 'react';
import {Navbar,NavItem,Nav} from 'react-bootstrap';
import './Nav.css';
import logo from '../../mainLogo.png';

export default class Navigation extends Component{
    constructor(){
        super()
        this.state = {
            transparent: true
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', () => {
            var wScroll = document.documentElement.scrollTop;
            console.log(wScroll)
            if (wScroll > 377) {
                this.setState({transparent: false})
            }
            else{
                this.setState({transparent: true})
            }
        }, { passive: true })
    }
    render(){
        return(
            <Navbar inverse={this.state.transparent} fixedTop collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                    <img src={logo}/>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem>ABOUT CONGRESS</NavItem>
                        <NavItem>HIGHLIGHTS</NavItem>
                        <NavItem>ITINERARY</NavItem>
                        <NavItem>SPEAKERS</NavItem>
                        <NavItem>SPONSORS</NavItem>
                        <NavItem>ABOUT US</NavItem>
                        <NavItem>CONTACT US</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}