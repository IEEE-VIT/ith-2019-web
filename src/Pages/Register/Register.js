import React, { Component } from 'react';
import './Register.css';
import { form, FormGroup, Checkbox,ControlLabel,Radio, FormControl, Grid,Row,Col, Button, Modal } from 'react-bootstrap';
import Recaptcha from 'react-recaptcha';
import logo from '../../graphics/itc_main.png';
import $ from 'jquery'; 


var rn = require('random-number');



export default class Register extends Component{
    constructor(){
        super();
        this.state = {
            name: '',
            email: '',
            mobile: '',
            gender: '',
            track: '',
            combo: '',
            external: false,
            university: 'VIT, Vellore',
            regno: '',
            ieee_member: false,
            ieee_id: '',
            verified: false,
            btn_text: 'Proceed to Payment',
            check_text: 'Registration Number',
            bill: 0,
            payment_status : 'no',
            id_trans: 0,
            TimeStamp: ''
        }

    }


    callback = function () {
        console.log('Done!!!!');
      };
       
      // specifying verify callback function
    verifyCallback = response => {
        if (Boolean(response)){
            console.log('Captcha verified!')
            this.setState({verified: true})
        }
      };

    onNameChange = (event) => {
        this.setState({name: event.target.value})
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    onMobChange = (event) => {
        this.setState({mobile: event.target.value})
    }

    onUniChange = (event) => {
        this.setState({university: event.target.value})
    }

    onRegChange = (event) => {

        if (!this.state.external){
            
            this.setState({regno: event.target.value})
        }

        else{
            this.setState({university: event.target.value})
        }
    }

    onBlockChange = (event) => {
        this.setState({block: event.target.value})
    }

    onRoomChange = (event) => {
        this.setState({room: event.target.value})
    }

    onIMChange = (event) => {
        this.setState({ieee_id: event.target.value})
    }

    chooseMale = () => {
        this.setState({gender: 'male'})
    }

    chooseFemale = () => {
        this.setState({gender: 'female'})
    }

    chooseOthers = () => {
        this.setState({gender: 'others'})
    }

    chooseML = () => {
        this.setState({track: 'ML'})
    }

    chooseIoT = () => {
        this.setState({track: 'IoT'})
    }

    chooseUI = () => {
        this.setState({track: 'UIUX'})
    }

    chooseCombo1 = () => {
        this.setState({ieee_member: false,combo: 'TLH',track: '', bill: 499})
    }

    chooseCombo2 = () => {
        this.setState({ieee_member: false,combo: 'H',track: 'NA',bill: 299})
    }


    onRegister = () => {
        
        if (
            this.state.name === '' ||
            this.state.email === '' ||
            this.state.mobile === '' ||
            this.state.university === '' 
        ){
            alert('Please fill in the required fields')
        }

        if ((!this.state.external && this.state.combo === '') || (!this.state.external && this.state.combo === 'TLH' && this.state.track === '')){
            alert('Please select your combo (and track)')
        }

        else{
            if (!this.state.verified){
                alert('Please verify that you are a human!')
                
            }

            else{
                this.setState({btn_text: 'Please wait..',id_trans: 'IETE'+rn(
                    {
                        min: 100000,
                        max: 999999,
                        integer: true
                    }
                ), TimeStamp: Date()}, () => {
                    var req_body = this.state;
                    delete req_body.btn_text;
                    delete req_body.check_text;
                    console.log(this.state)
                    fetch('https://ithregistration2019.herokuapp.com/register',{
                        method: 'post',
                        headers: {'Content-type':'application/json'},
                        body: JSON.stringify(req_body)
                    })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                        if(data.Status === 'Success'){
                                fetch('https://ithregistration2019.herokuapp.com/payment',{
                                    method: 'post',
                                    headers: {'Content-type':'application/json'},
                                    body: JSON.stringify(req_body)
                                })
                                .then(response => response.text())
                                .then(data => {
                                    var x=window.open();    
                                    x.document.open();
                                    x.document.write(data);
                                    x.document.close();
                                })
                        }
                        else{
                            alert('Oops! Something went wrong - ' + data.Message)
                        }
                        this.setState({btn_text: 'Proceed to Payment'})
                    })

                })
            }
        }
    }

    extCheck = () => {
        document.getElementById('x').value = ''
        this.setState({external: !this.state.external}, () => {
            if (!this.state.external){ //Internal
                this.setState({check_text: 'Registration Number',university:'VIT, Vellore'})
            }
            else { //External
                this.setState({check_text: 'University',university:'',regno:'',combo:'TLH',bill: 499})
            }
        })
    }

    ieeeCheck = () => {
        if (this.state.combo !== ''){
            this.setState({ieee_member: !this.state.ieee_member},() => {
                if (this.state.ieee_member){
                    this.setState({bill: this.state.bill - 100})
                }
                else{
    
                    this.setState({bill: this.state.bill + 100})
                }
            } )
        }
        else {
            alert('First select your combo!')
        }
    }

    mobValidator(){
        var mob_test = /^[0][1-9]\d{9}$|^[1-9]\d{9}$/
        if (mob_test.test(this.state.mobile) || this.state.mobile === ''){

            return null
        }
        else{
            return 'error'
        }
    }

    emailValidator(){
        var email_test = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (email_test.test(this.state.email) || this.state.email === '')
        {

            return null
        }

        else{

            return 'error'
        }
    }

    
    render(){
        return(
            <div id='register'>
            <div id='reg-header'>
                {/* <img src={logo}></img> */}
                <h3>Register for IEEE Techloop Hack, 2019</h3><br/><br/><br/>
                <h5>Enter your details</h5>
            </div>
            <Grid id='form-layout'>
                <Row>
                    <Col>
                        <div id='form-holder'>
                            <form>
                                <FormGroup>
                                    <FormControl onChange={this.onNameChange} placeholder='Full Name' type="text" />                
                                </FormGroup>

                                <FormGroup validationState={this.emailValidator()}>
                                    <FormControl onChange={this.onEmailChange} placeholder='Email ID' type="text" />                
                                </FormGroup>

                                <FormGroup validationState={this.mobValidator()}>
                                    <FormControl onChange={this.onMobChange} placeholder='Mobile Number' type="text" />             
                                </FormGroup>

                                <FormGroup>
                                    <ControlLabel>Select your gender</ControlLabel><br/>
                                    <Radio name="radioGroup" inline onClick={this.chooseMale}>Male</Radio>{' '}
                                    <Radio name="radioGroup" inline onClick={this.chooseFemale}>Female</Radio>{' '}
                                    <Radio name="radioGroup" inline onClick={this.chooseOthers}>Others</Radio>
                                </FormGroup>

                                <FormGroup style={{"marginBottom":"16px"}}>
                                    <Checkbox checked={!this.state.external} onClick={this.extCheck}>
                                    I am a VITian (Vellore Campus only)
                                    </Checkbox>
                                </FormGroup>

                                <FormGroup>
                                    <FormControl id='x' onChange={this.onRegChange}  placeholder={this.state.check_text} type="text" />                
                                </FormGroup>

                                <FormGroup hidden={this.state.external}>
                                    <ControlLabel>Select your combo</ControlLabel><br/>
                                    <Radio name="combo" inline onClick={this.chooseCombo1}>Techloop + Hack</Radio>{' '}
                                    <Radio name="combo" inline onClick={this.chooseCombo2}>Only Hack</Radio>{' '}
                                </FormGroup>

                                <FormGroup hidden={this.state.combo === 'H' || this.state.combo === ''}>
                                    <ControlLabel>Select your Techloop track</ControlLabel><br/>
                                    <Radio name="track" inline onClick={this.chooseML}>ML</Radio>{' '}
                                    <Radio name="track" inline onClick={this.chooseIoT}>IoT</Radio>{' '}
                                    <Radio name="track" inline onClick={this.chooseUI}>UI/UX</Radio>
                                </FormGroup>

                                <FormGroup style={{"marginBottom": "0px"}}>
                                    <Checkbox checked={this.state.ieee_member} onClick={this.ieeeCheck} readOnly>
                                    Check this box if you are an IEEE Member
                                    </Checkbox>
                                </FormGroup>

                                <FormGroup>
                                    <FormControl disabled={!this.state.ieee_member} onChange={this.onIMChange} placeholder='IEEE Membership ID' type="text" />                
                                </FormGroup>
                                


                                
                                <Recaptcha
                                sitekey="6LdcrJMUAAAAAJxU_9TzL0Umr2-_dFMMo_4b096Y"
                                render="explicit"
                                verifyCallback={this.verifyCallback}
                                onloadCallback={this.callback}
                                /><br/><br/>
                                <p id='bill-status'>Registration Fees : <strong> Rs. {this.state.bill} </strong></p><br/>
                                <Button onClick={this.onRegister}>{this.state.btn_text}</Button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Grid>
            </div>
        );
    }
}