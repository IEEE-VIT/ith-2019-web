import React, { Component } from 'react';
import './Register.css';
import { form, FormGroup, Checkbox,ControlLabel, FormControl, Grid,Row,Col, Button } from 'react-bootstrap';
export default class Register extends Component{
    constructor(){
        super();
        this.state = {
            name: '',
            email: '',
            mobile: '',
            external: false,
            university: '',
            regno: '',
            city: '',
            ieee_member: false,
            q1: '',
            q2: '',
            q3: ''
        }

    }

    onNameChange = (event) => {
        console.log(event.target.value)
    }
    render(){
        return(
            <div id='register'>
            <div id='reg-header'>
                <h3>Register for IEEE Techloop Hack, 2019</h3><br/><br/><br/>
                <h5>Enter your details</h5>
            </div>
            <Grid>
                <Row>
                    <Col>
                        <div id='form-holder'>
                            <form>
                                <FormGroup>
                                    <FormControl onChange={this.onNameChange} placeholder='Full Name' type="text" />                
                                </FormGroup>

                                <FormGroup>
                                    <FormControl placeholder='Email ID' type="text" />                
                                </FormGroup>

                                <FormGroup >
                                    <FormControl placeholder='Mobile Number' type="text" />                
                                </FormGroup>
                                
                                <FormGroup>
                                    <Checkbox readOnly>
                                    Check this box if you are an External Student
                                    </Checkbox>
                                </FormGroup>

                                <FormGroup>
                                    <FormControl placeholder='University / College Name' type="text" />                
                                </FormGroup>

                                <FormGroup>
                                    <FormControl placeholder='Registration Number (Not for external students)' type="text" />                
                                </FormGroup>

                                <FormGroup>
                                    <FormControl placeholder='City' type="text" />                
                                </FormGroup>

                                <FormGroup>
                                    <Checkbox readOnly>
                                    Check this box if you are an IEEE Member
                                    </Checkbox>
                                </FormGroup>

                                <FormGroup>
                                    <FormControl placeholder='IEEE Membership ID' type="text" />                
                                </FormGroup>

                                <FormGroup>
                                    <ControlLabel>Why do you want to attend ITH?</ControlLabel>
                                    <FormControl placeholder='Enter your answer' type="text" />                
                                </FormGroup>

                                <FormGroup>
                                    <ControlLabel>Have you attended hack-a-thons before?<br/> If yes, list them.</ControlLabel>
                                    <FormControl placeholder='Enter your answer' type="text" />                
                                </FormGroup>

                                <FormGroup>
                                    <ControlLabel>Kindly share details of your previous projects<br/> (if any).</ControlLabel>
                                    <FormControl placeholder='Enter your answer' type="text" />                
                                </FormGroup>

                                <Button>Register</Button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Grid>
            </div>
        );
    }
}