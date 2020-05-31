import React, {Component} from 'react';
// import { FaDownload, FaPlay } from 'react-icons/fa';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media, Button } from 'reactstrap';
import Phone from '../assets/images/1.png';
import ModalVideo from 'react-modal-video'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };

        this.onOpenModal = this.onOpenModal.bind(this);
    }

    onOpenModal() {
        this.setState({open: true})
    }
    
    render() {
    return(
        <div className='homePage row'>
                <div className="col-12 col-md-8 infoDesc">
                    <div className='textBlock'>
                    <h1 className='heading1'>AR Stereomtry</h1>
                    <h2 className='heading2'>Application for school students</h2>
                    </div>
                    <p className='text'>200 tg - download AR Stereomtry mobile app and prepare for having <br></br> a lot of fun working with Augmented Reality  </p>
                    <div className='bookBlock'>
                    <a className='linkToBook' href='https://raw.githubusercontent.com/ansaryergesh/stereomtry/master/ARStereometry.pdf' target='_blank' title='Book' download='Book.pdf'><span className='fa fa-file-pdf-o '> Download the book</span></a>
                    </div>
                    <div className='buttonsPr'>
                        <Button className='android playLink'><a className='playLink' target="_blank"  href='https://play.google.com/store/apps/details?id=com.IITUStudents.ARStereometry'><span className='fa fa-play '> Play Market</span></a></Button>
                        <Button className='ios'><span className='fa fa-apple '> App Store</span></Button>
                    </div>
                </div>
                <div className="col-12 col-md-4 product">
                   <img src = {require('../assets/images/1.png')} className='phone' />
                   <a href='https://arstereomtry-v.ansaryergesh.com'>
                   <span onClick={this.onOpenModal} className="fa fa-play-circle-o fa-3x playBtn" aria-hidden="true"></span>
                   </a>
                   {/* <img src = {require('../assets/images/play-circle-regular.svg')} className='playBtn' /> */}
                   {/* <div>
                   <ModalVideo channel='youtube' className='video'  isOpen={this.state.open} videoId='3ITdZJPzrWs' onClose={() => this.setState({open: false})} />
                   <span onClick={this.onOpenModal} className="fa fa-play-circle-o fa-3x playBtn" aria-hidden="true"></span>
                   </div> */}
{/* 
                   <video ref="video">
                        <source src={require('../.././video.mp4')} type="video/mp4" />
                    </video> */}
                   
                </div>
                </div>
            
      
    
    );
    }
}

export default Home;