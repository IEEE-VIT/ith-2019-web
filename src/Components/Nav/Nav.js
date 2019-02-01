import React, { Component } from 'react';
import {Navbar,NavItem,Nav} from 'react-bootstrap';
import './Nav.css';

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
            if (wScroll > 149) {
                this.setState({transparent: false})
            }
            else{
                this.setState({transparent: true})
            }
        }, { passive: true })

        window.addEventListener('resize', () => {
            var height = window.innerHeight;
            if (height < 453){
                this.setState({transparent: false})
            }
            else{
                this.setState({transparent: true})
            }
        })
        
    }
    render(){
        return(
            <Navbar fluid inverse={this.state.transparent} fixedTop collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                    <div id='itclogo'>ITC</div>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem href='#aboutc'>ABOUT</NavItem>
                        <NavItem href='#highlights'>HIGHLIGHTS</NavItem>
                        <NavItem>ITINERARY</NavItem>
                        <NavItem>BROCHURE</NavItem>
                        <NavItem>SPEAKERS</NavItem>
                        <NavItem>SPONSORS</NavItem>
                        <NavItem href='#abouti-row'>IEEE-VIT</NavItem>
                        <NavItem href='#contact'>CONTACT US</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}