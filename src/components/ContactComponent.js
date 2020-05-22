import React, {Component} from 'react';
import { Breadcrumb, BreadcrumbItem,
    Button, Row, Col, Label } from 'reactstrap';
import { Control, LocalForm, Errors, Form } from 'react-redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
const required = (val) => val && val.length;
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
const mapStateToProps = state => {
    return {
      comments: state.comments,
    }
}



class Contact extends Component {
    
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        this.props.postComment(values);
        this.props.resetFeedbackForm();
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
    
                <div className = 'row row-content' >
                    <div className= 'col-12'>
                        <h3 className='text-center'>Give Feedback</h3>
                    </div>
                    <div className = 'col-12 col-md-6'>
                        <Form model='texts' onSubmit={(values) => this.handleSubmit(values)}>
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
                                <Label htmlFor="text" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model=".text" id="text" name="text"
                                        rows="12" className = 'form-control' />
                                </Col>

                                <Errors  className='text-danger' model='.text' show='touched' 
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
                        </Form>
                    </div>
                    <div className='col-12 col-md-6'>
                        {this.props.comments.comments.map(comment =>(
                            <div className="comment_block">
                                 <div className='avatar'>
                                    <img className='imgAvatar' src='https://img.favpng.com/17/3/18/computer-icons-user-profile-male-png-favpng-ZmC9dDrp9x27KFnnge0jKWKBs.jpg' />
                                </div>

                                <div className='comment-body'>
                                    <p>{comment.text}</p>
                                <p className='infoUser'><span className='fa fa-calendar date'>&nbsp; {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit', hour:'numeric', minute:'numeric' }).format(new Date(Date.parse(comment.date)))}</span><span className='fa fa-envelope'>&nbsp; {comment.email}</span></p>
                            </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
    
}


export default (connect(mapStateToProps)(Contact));