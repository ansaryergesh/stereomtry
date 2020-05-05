import React, {Component} from 'react';
import { Breadcrumb, BreadcrumbItem,
    Button, Row, Col, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {
    
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
    }

    render() {
        return(
            <div className="container">
                <div classname="row h-100 justify-content-center align-items-center">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem>Contact us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact us</h3>
                        <hr/>
                    </div>
                </div>
    
                <div className = 'row row-content justify-content-center align-items-center' >
                    <div className= 'col-12'>
                        <h3 className='text-center'>Give Feedback</h3>
                    </div>
                    <div className = 'col-12 col-md-9'>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className='form-group'>
                                <Label htmlFor='firstname' md={2}>Name:</Label>
                                <Col md={10}>
                                    <Control.text model='.firstname' id='firstname' name='firstname' placeholder='First Name'
                                     className='form-control'
                                       validators = {{
                                         required,minLength: minLength(3), maxLength: maxLength(25)
                                       }}
                                     />
                                     <Errors  className='text-danger' model='.firstname' show='touched' messages={{
                                         required: 'Required!',
                                         minLength: ' must be greater than 2 characters',
                                         maxLength: ' must be less than 25 characters',
                                     }}/>
                                </Col>
                            </Row>

                            <Row className='form-group'>
                                <Label htmlFor='email' md={2}>Email:</Label>
                                <Col md={10}>
                                    <Control.text model='.email' id='email' name='email' placeholder='example@example.com'
                                        className='form-control'
                                        validators = {{
                                            required, 
                                            validEmail,
                                        }}  
                                    />
                                    <Errors  className='text-danger' model='.email' show='touched' 
                                        messages={{
                                            required: 'Required!',
                                            validEmail: ' Invalid email address!'
                                         }}
                                />
                                </Col>
                            </Row>

                            <Row className='form-group'>
                                <Col md={{size: 6, offset: 2 }}>
                                    <div className='form-check'>
                                        <Label check>
                                            <Control.checkbox model='.agree' name='agree'
                                                className='form-check-input'/> { ' '}
                                                <strong>Contact you ???</strong>
                                        </Label>
                                    </div>
                                </Col>


                            </Row>

                            <Row className='form-group'>
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" id="message" name="message"
                                        rows="12" className = 'form-control' />
                                </Col>

                                <Errors  className='text-danger' model='.message' show='touched' 
                                        messages={{
                                            required: 'Required'
                                         }}
                                />
                            </Row>
                            <Row className='form-group'>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default Contact;