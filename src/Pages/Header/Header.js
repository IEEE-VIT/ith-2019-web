import React, { Component } from 'react';
import './Header.css'

export default class Header extends Component{

    componentDidMount(){
        window.addEventListener('scroll', () => {
            var wScroll = document.documentElement.scrollTop;
            var content = document.getElementsByClassName('content');
            content[0].style.transform = 'translate(0px,'+wScroll/2+'px)';
        }, { passive: true })
    }

    render(){
        return(
            <div className='header'>
                <div className='overlay'>
                    <div className='content'>
                        <h1>Techloop Congress</h1>
                        <h5>VIT, Vellore</h5>
                        <h5>1st & 2nd August</h5>
                        <a href='#' className='reg-link'><div className='reg-btn'>REGISTER</div></a>
                    </div>
                </div>
            </div>
        );
    }
}