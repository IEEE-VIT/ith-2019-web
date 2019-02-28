import React, { Component } from 'react';
import './Register.css';
import { form, FormGroup, Checkbox,ControlLabel,Radio, FormControl, Grid,Row,Col, Button, Modal } from 'react-bootstrap';
import Recaptcha from 'react-recaptcha';
import logo from '../../graphics/itc_main.png';



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
            btn_text: 'Register',
            check_text: 'Registration Number',
            link: ''
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
        this.setState({combo: 'TLH',track: '',link:'http://info.vit.ac.in/Events-VIT/TechloopHack/apply.asp'})
    }

    chooseCombo2 = () => {
        this.setState({combo: 'H',track: 'NA',link: 'http://info.vit.ac.in/Events-VIT/TechloopHack/apply2.asp'})
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
                this.setState({btn_text: 'Please wait..'})
                var req_body = this.state;
                var link = this.state.link;
                delete req_body.btn_text;
                delete req_body.check_text;
                delete req_body.link;

                fetch('https://ith2019-api.herokuapp.com/register',{
                    method: 'post',
                    headers: {'Content-type':'application/json'},
                    body: JSON.stringify(req_body)
                })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    if(data.Status === 'Success'){
                        console.log(this.state.link)
                        document.getElementById('mod').display="block";
                        window.location.href = link;
                    }
                    else{
                        alert('Oops! Something went wrong - ' + data.Message)
                    }
                    this.setState({btn_text: 'Register'})
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
                this.setState({check_text: 'University',university:'',regno:'',combo:'TLH',link: 'http://info.vit.ac.in/Events-VIT/TechloopHack/apply.asp'})
            }
        })
    }

    ieeeCheck = () => {
        this.setState({ieee_member: !this.state.ieee_member})
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
                                    I am a VITian
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

                                <FormGroup>
                                    <Checkbox onClick={this.ieeeCheck} readOnly>
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
  />

                                <Button onClick={this.onRegister}>{this.state.btn_text}</Button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Grid>
            <div id='mod' style={{"display":"none"}} className="static-modal">
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>Congratulations!</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                            You have successfully registered for ITH 2019.<br/>
                            You will be redirected to the payment portal shortly.

                            <br/><br/><br/>
                            Click <a href={this.state.link}>here</a> if you are not redirected within 5 seconds..

                    </Modal.Body>

                    <Modal.Footer>
                        <Button>Close</Button>
                    </Modal.Footer>
                </Modal.Dialog>
                </div>
            </div>
        );
    }
}