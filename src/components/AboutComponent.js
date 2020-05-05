import React, {Component} from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import '../assets/style/animation.css'
import ReactDOM from 'react-dom'
class About extends Component {
    constructor(props) {
        super(props);
      }
    
      componentDidMount() {
        $(document).ready(() => {
          let html = '';
          for (let i = 1; i <= 20; i++) {
            html += `<div class="shape-container--${i} shape-animation"><div class="random-shape"></div></div>`;
          }
    
          document.querySelector('.shape').innerHTML += html;
    
          const $allShapes = $("[class*='shape-container--']");
          $('.button').click(function (event) {
            $allShapes.toggleClass('stop-shape');
            const $this = $(this);
            $this.toggleClass('.button');
            if ($this.hasClass('.button')) {
              $this.text('Unfreeze shapes');
            } else {
              $this.text('Freeze shapes');
            }
            event.preventDefault();
          });
        });
      }

    render() {
    return(
        <div className="container about">
            <div className="row">
            <div className="shape"> </div>
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-7">
                    <h2>Information and Instruction of Using</h2>
                    <p className="mainInfo">
                  Application name is
                  {' '}
                  <span><b>AR Stereometry</b> <br></br></span>
                  Find the Application from
                  {' '}
                  <span>Play Market</span>
                  {' '}
                  and Download it with book material.<br></br> To work with AR extension, from Application go to the
                  <span> Scan</span>
                  {' '}
                  section. <br></br> Then, open the book to scan different Shapes. <br></br>In additionally, there have some testing to improve student skill and
                  there have student progress for daily life. <br></br>In student progress section student can exprerience everyday with shapes and solve some tasks..

                </p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">  App for
              {' '}
              <b>school students </b></CardHeader>
                        <CardBody>
                            <img src = {require('../assets/images/about.jpg')} className='aboutUs' />
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">Learn, Decide, Scan.</p>
                                <footer className="blockquote-footer">IITU, 
                                <cite title="Source Title"> AR Application</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <h2 className='text-center'>Statistics of Application</h2>
            <section className="charts_orb">
            
                <article className="orb">
                  <div className="orb_graphic">
                    <svg>
                      <circle className="fill"></circle>
                      <circle className="progress"></circle>
                    </svg>
                    <div className="orb_value count">306</div>
                  </div>
                  <div className="orb_label">
                    Downloads
                  </div>
                </article>
                
                <article className="orb">
                  <div className="orb_graphic">
                    <svg>
                      <circle className="fill"></circle>
                      <circle className="progress"></circle>
                    </svg>
                    <div className="orb_value count">4.8</div>
                  </div>
                  <div className="orb_label">
                    Rate of App
                  </div>
                </article>
                
                <article className="orb">
                  <div className="orb_graphic">
                    <svg>
                      <circle className="fill"></circle>
                      <circle className="progress"></circle>
                    </svg>
                    <div className="orb_value count">4112</div>
                  </div>
                  <div className="orb_label">
                    Happy User
                  </div>
                </article>
                
                <article className="orb">
                  <div className="orb_graphic">
                    <svg>
                      <circle className="fill"></circle>
                      <circle className="progress"></circle>
                    </svg>
                    <div className="orb_value count">2</div>
                  </div>
                  <div className="orb_label">
                    Books
                  </div>
                </article>
                
              
              </section>
            
            
        </div>
    );
    }
}

export default About;    