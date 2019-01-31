import React, { Component } from 'react';
import {Navbar,NavItem,Nav} from 'react-bootstrap';
import './Nav.css';
import logo from '../../graphics/itclogo.svg';

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
            console.log(height)
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
            <Navbar inverse={this.state.transparent} fixedTop collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                    <img src={logo}/>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem href='#aboutc'>ABOUT</NavItem>
                        <NavItem>HIGHLIGHTS</NavItem>
                        <NavItem>ITINERARY</NavItem>
                        <NavItem>SPEAKERS</NavItem>
                        <NavItem>SPONSORS</NavItem>
                        <NavItem>IEEE-VIT</NavItem>
                        <NavItem>CONTACT US</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}