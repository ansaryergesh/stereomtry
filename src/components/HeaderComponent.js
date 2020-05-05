import React, {Component} from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import {NavLink} from 'react-router-dom';
import SimpleModal from "./SimpleModal";
class Header extends Component {
      constructor(props) {
    super(props);
    this.state = {
        isNavOpen: false,
        isOpen: false
    };

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState ({
        isNavOpen: !this.state.isNavOpen
    });
}


    render() {
        return (
          <React.Fragment>
            <Navbar dark expand='md'>
              <div className="container">
                  <NavbarToggler onClick={this.toggleNav} />
                  <NavbarBrand className='mr-auto' href="/">
                      <img src={require('../assets/images/logo.png')} className='logo' height='40' width='40' alt='logo'/>
                  </NavbarBrand>
                  <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink className='nav-link' to='/home'><span className='fa fa-home fa-lg'></span> Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/aboutus'><span className='fa fa-info fa-lg'></span> About us</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/figures'><span className='fa fa-list fa-lg'></span> Figures</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/contactus'><span className='fa fa-address-card fa-lg'></span> Contact</NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className='ml-auto' navbar>
                        <NavItem>
                         
                            <SimpleModal buttonText="Content of App">
                                <div>
                                <h1>Topic List</h1>
                                <div className='allList'>
                                <p> Теорема о трех перпендикулярах</p>
                                    <p>Нахождение угла между прямыми</p>
                                    <p>Пирамида</p>
                                    <p>
                                        Призма
                                    </p>
                                    <p>
                                        Параллелепипед (частный случай призмы)
                                    </p>
                                    <p>
                                        Куб (частный случай прямоугольного параллелепипеда)
                                    </p>
                                    <p>
                                        Цилиндр
                                    </p>
                                    <p>
                                        Вписанные и описанные поверхности
                                    </p>
                                    <p>
                                        Сечения различных пространственных фигур
                                    </p>
                                    <p>
                                        Теорема о трех перпендикулярах
                                    </p>
                                    <p>
                                        Нахождение угла между плоскостями (двугранный угол)
                                    </p>
                                    <p>
                                        Правильная и прямоугольная пирамиды
                                    </p>
                                    <p>
                                        Прямая и правильная призмы
                                    </p>
                                    <p>
                                        Прямоугольный параллелепипед
                                    </p>
                                </div>
                                </div>
                            </SimpleModal>
                                {/* <span className='fa fa-pencil fa-lg'>Content of App</span> */}
                        </NavItem>
                    </Nav>
                  </Collapse>
              </div>
            </Navbar>

          </React.Fragment>
        );
    }
}

export default Header;