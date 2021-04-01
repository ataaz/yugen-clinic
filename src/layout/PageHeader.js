import React , { Component } from "react";
import Logo from '../images/header-logo.png';
import CartIcon from '../svgs/Cart';
import UserIcon from '../svgs/User';
import { Link } from 'react-router-dom';
import 'react-jquery-plugin';
import $ from "jquery";
class PageTitle extends React.Component {
    render() {
        return <h2>I am a {this.props.pagename}!</h2>;
    }
}

class PageHeader extends React.Component {
  render(){
    return(
      <div className="PageHeader">
          <PageTitle pagename="Ford" />    
      </div>
    );
  }
}
export default PageHeader;