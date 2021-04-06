import React , { Component } from "react";
import Logo from '../images/header-logo.png';
import CartIcon from '../svgs/Cart';
import UserIcon from '../svgs/User';
import { Link } from 'react-router-dom';
import 'react-jquery-plugin';
import $ from "jquery";

class Header extends Component {
  componentDidMount() {
    $('.navbar-toggler').click(() => {
      $('.navbar-toggler').toggleClass('navbar-open');
      $('.navbar-collapse').toggleClass('mobile-menu-opened');
      $('.Header').toggleClass('change_header');
      $('.navbar-collapse').slideToggle();
    });
  }
  render(){
    return(
      <div className="Header">
        <div className="container">
          <nav className="navbar navbar-expand-md py-4">
            <div className="no-gutters row d-flex d-md-none align-items-center justify-content-between w-100">
              <div className="col-7">
                <Link className="navbar-brand" to="#"><img src={Logo} /></Link>
              </div>
              <div className="col-1">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
            </div>
            <div className="collapse navbar-collapse justify-content-between" id="navbarTogglerDemo01">
              <Link className="navbar-brand" to="#"><img src={Logo} /></Link>
              <div className="d-inline-block d-md-flex align-items-center">
                <ul className="navbar-nav mt-2 mt-lg-0 mr-md-3 mr-lg-5">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/services">Services</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#">Blog</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#">Shop</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#">Appointment</Link>
                  </li>
                </ul>
                <div className="form-inline mt-5 my-md-2 my-lg-0 header_icons">
                  <Link to="#" className="mr-4"><UserIcon/></Link>
                  <Link to="#"><CartIcon/></Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
export default Header;