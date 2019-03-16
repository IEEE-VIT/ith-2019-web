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
                    <a href='http://ith.ieeevit.com'><div id='itclogo'>ITH</div></a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem href='#about'>ABOUT</NavItem>
                        <NavItem href='#highlights'>HIGHLIGHTS</NavItem>
                        <NavItem href='https://drive.google.com/file/d/1b6USZ1LcLkBAhtKkgFNM3zoEa7pwZths/view?usp=sharing'>PROBLEM STATEMENTS</NavItem>
                        <NavItem href='https://drive.google.com/file/d/1woX2dTw-aPrfV6_beNt6QqtCGdVqv-6E/view?usp=sharing' target='_top'>BROCHURE</NavItem>
                        {/* <NavItem>SPEAKERS</NavItem> */}
                        <NavItem href='#sponsors'>SPONSORS</NavItem>
                        <NavItem href='#about-ieeevit'>IEEE-VIT</NavItem>
                        <NavItem href='#contact-us'>CONTACT US</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}