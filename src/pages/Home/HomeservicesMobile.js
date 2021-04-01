import React , { Component } from "react";
import yiconbottom from '../../images/y-icon.png';
import serviceimg from '../../images/service-img.jpg';
import { Link } from 'react-router-dom';
import 'react-jquery-plugin';
import $ from "jquery";

class HomeServicesMobile extends Component {
  componentDidMount() {
    $('.HomeServicesMobile .yugen-face_box').click(() => {;
      $('.HomeServicesMobile .child1').slideToggle();
      $('.HomeServicesMobile .child2').hide();
      $('.HomeServicesMobile .child3').hide();
      $('.HomeServicesMobile .child4').hide();
      $('.HomeServicesMobile .row1 .col-xl-3 .hs_box').removeClass('active');
      $('.HomeServicesMobile .yugen-face_box .hs_box').addClass('active');
      $('.HomeServicesMobile .yugen-face_box .servcies-list').toggleClass('d-block');
    });
    $('.HomeServicesMobile .yugen-body_box').click(() => {
      $('.HomeServicesMobile .child2').slideToggle();
      $('.HomeServicesMobile .child1').hide();
      $('.HomeServicesMobile .child3').hide();
      $('.HomeServicesMobile .child4').hide();
      $('.HomeServicesMobile .row1 .col-xl-3 .hs_box').removeClass('active');
      $('.HomeServicesMobile .yugen-body_box .hs_box').addClass('active');
      $('.HomeServicesMobile .yugen-body_box .servcies-list').toggleClass('d-block');
    });
    $('.HomeServicesMobile .yugen-health_box').click(() => {
      $('.HomeServicesMobile .child3').slideToggle();
      $('.HomeServicesMobile .child1').hide();
      $('.HomeServicesMobile .child2').hide();
      $('.HomeServicesMobile .child4').hide();
      $('.HomeServicesMobile .row1 .col-xl-3 .hs_box').removeClass('active');
      $('.HomeServicesMobile .yugen-health_box .hs_box').addClass('active');
      $('.HomeServicesMobile .yugen-health_box .servcies-list').toggleClass('d-block');
    });
    $('.HomeServicesMobile .yugen-wellbeing_box').click(() => {
      $('.HomeServicesMobile .child4').slideToggle();
      $('.HomeServicesMobile .child1').hide();
      $('.HomeServicesMobile .child2').hide();
      $('.HomeServicesMobile .child3').hide();
      $('.HomeServicesMobile .row1 .col-xl-3 .hs_box').removeClass('active');
      $('.HomeServicesMobile .yugen-wellbeing_box .hs_box').addClass('active');
      $('.HomeServicesMobile .yugen-wellbeing_box .servcies-list').toggleClass('d-block');
    });
    $('.HomeServicesMobile .yugen-anti-aging_box').click(() => {;
      $('.HomeServicesMobile .child5').slideToggle();
      $('.HomeServicesMobile .child6').hide();
      $('.HomeServicesMobile .child7').hide();
      $('.HomeServicesMobile .child8').hide();
      $('.HomeServicesMobile .row2 .col-xl-3 .hs_box').removeClass('active');
      $('.HomeServicesMobile .yugen-anti-aging_box .hs_box').addClass('active');
      $('.HomeServicesMobile .yugen-anti-aging_box .servcies-list').toggleClass('d-block');
    });
    $('.HomeServicesMobile .yugen-man_box').click(() => {;
      $('.HomeServicesMobile .child6').slideToggle();
      $('.HomeServicesMobile .child5').hide();
      $('.HomeServicesMobile .child7').hide();
      $('.HomeServicesMobile .child8').hide();
      $('.HomeServicesMobile .row2 .col-xl-3 .hs_box').removeClass('active');
      $('.HomeServicesMobile .yugen-man_box .hs_box').addClass('active');
      $('.HomeServicesMobile .yugen-man_box .servcies-list').toggleClass('d-block');
    });
    $('.HomeServicesMobile .yugen-sensual_box').click(() => {;
      $('.HomeServicesMobile .child7').slideToggle();
      $('.HomeServicesMobile .child5').hide();
      $('.HomeServicesMobile .child6').hide();
      $('.HomeServicesMobile .child8').hide();
      $('.HomeServicesMobile .row2 .col-xl-3 .hs_box').removeClass('active');
      $('.HomeServicesMobile .yugen-sensual_box .hs_box').addClass('active');
      $('.HomeServicesMobile .yugen-sensual_box .servcies-list').toggleClass('d-block');
    });
    $('.HomeServicesMobile .yugen-dental_box').click(() => {;
      $('.HomeServicesMobile .child8').slideToggle();
      $('.HomeServicesMobile .child5').hide();
      $('.HomeServicesMobile .child6').hide();
      $('.HomeServicesMobile .child7').hide();
      $('.HomeServicesMobile .row2 .col-xl-3 .hs_box').removeClass('active');
      $('.HomeServicesMobile .yugen-dental_box .hs_box').addClass('active');
      $('.HomeServicesMobile .yugen-dental_box .servcies-list').toggleClass('d-block');
    });
  }
  render(){
    return(
      <div className="HomeServices HomeServicesMobile content-block1 position-relative d-block d-sm-none">
        <div className="row1">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-xl-8">
                <h2>Our services</h2>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-xl-3 yugen-face_box">
                <div className="hs_box">
                  <Link to="#"><img src={serviceimg} alt=""/></Link>
                  <Link to="#">Yugen Face</Link>
                </div>
              </div>
              <div className="child1 childboxes yugen-face" style={{display: "none"}}>
                <div className="container">
                  <h3>Explore All Treatments</h3>
                  <div className="servcies-list">
                    <ul className="d-flex pl-0 list-inline flex-wrap">
                      <li><Link to="#">Yugen Face</Link></li>
                      <li><Link to="#">Double Chin</Link></li>
                      <li><Link to="#">Cellulite</Link></li>
                      <li><Link to="#">Acne Scarring</Link></li>
                      <li><Link to="#">Lorem Ipsum</Link></li>
                      <li><Link to="#">Scar Removal</Link></li>
                      <li><Link to="#">Facial Redness</Link></li>
                      <li><Link to="#">Face Contouring</Link></li>
                      <li><Link to="#">Crow's Feet</Link></li>
                      <li><Link to="#">Lorem Ipsum</Link></li>
                      <li><Link to="#">Lorem Ipsum</Link></li>
                      <li><Link to="#">Crow's Feet</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 yugen-body_box">
                <div className="hs_box">
                  <Link to="#"><img src={serviceimg} alt=""/></Link>
                  <Link to="#">Yugen Body</Link>
                </div>
              </div>
              <div className="child2 childboxes yugen-body" style={{display: "none"}}>
                <div className="container">
                  <h3>Explore All Treatments</h3>
                  <div className="servcies-list">
                    <ul className="d-flex pl-0 list-inline flex-wrap">
                      <li><Link to="#">Yugen Body</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 yugen-health_box">
                <div className="hs_box">
                  <Link to="#"><img src={serviceimg} alt=""/></Link>
                  <Link to="#">Yugen Health</Link>
                </div>
              </div>
              <div className="child3 childboxes yugen-health" style={{display: "none"}}>
                <div className="container">
                  <h3>Explore All Treatments</h3>
                  <div className="servcies-list">
                    <ul className="d-flex pl-0 list-inline flex-wrap">
                      <li><Link to="#">Yugen Health</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 yugen-wellbeing_box">
                <div className="hs_box">
                  <Link to="#"><img src={serviceimg} alt=""/></Link>
                  <Link to="#">Yugen Wellbeing</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="child4 childboxes yugen-wellbeing" style={{display: "none"}}>
            <div className="container">
              <h3>Explore All Treatments</h3>
              <div className="servcies-list">
                <ul className="d-flex pl-0 list-inline flex-wrap">
                  <li><Link to="#">Yugen Wellbeing</Link></li>
                </ul>
              </div>
            </div>
          </div>
      </div>
      <div className="row2">
          <div className="container">
            <div className="row text-center">
              <div className="col-xl-3 yugen-anti-aging_box">
                <div className="hs_box">
                  <Link to="#"><img src={serviceimg} alt=""/></Link>
                  <Link to="#">Yugen Anti-Aging</Link>
                </div>
              </div>
              <div className="child5 childboxes yugen-anti-aging" style={{display: "none"}}>
                <div className="container">
                  <h3>Explore All Treatments</h3>
                  <div className="servcies-list">
                    <ul className="d-flex pl-0 list-inline flex-wrap">
                      <li><Link to="#">Yugen Anti-Aging</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 yugen-man_box">
                <div className="hs_box">
                  <Link to="#"><img src={serviceimg} alt=""/></Link>
                  <Link to="#">Yugen Man</Link>
                </div>
              </div>
              <div className="child6 childboxes yugen-man" style={{display: "none"}}>
                <div className="container">
                  <h3>Explore All Treatments</h3>
                  <div className="servcies-list">
                    <ul className="d-flex pl-0 list-inline flex-wrap">
                      <li><Link to="#">Yugen Man</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 yugen-sensual_box">
                <div className="hs_box">
                  <Link to="#"><img src={serviceimg} alt=""/></Link>
                  <Link to="#">Yugen Sensual</Link>
                </div>
              </div>
              <div className="child7 childboxes yugen-sensual" style={{display: "none"}}>
                <div className="container">
                  <h3>Explore All Treatments</h3>
                  <div className="servcies-list">
                    <ul className="d-flex pl-0 list-inline flex-wrap">
                      <li><Link to="#">Yugen Sensual</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 yugen-dental_box">
                <div className="hs_box">
                  <Link to="#"><img src={serviceimg} alt=""/></Link>
                  <Link to="#">Yugen Dental</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="child8 childboxes yugen-dental" style={{display: "none"}}>
            <div className="container">
              <h3>Explore All Treatments</h3>
              <div className="servcies-list">
                <ul className="d-flex pl-0 list-inline flex-wrap">
                  <li><Link to="#">Yugen Dental</Link></li>
                </ul>
              </div>
            </div>
          </div>
      </div>
    </div>
    );
  }
}
export default HomeServicesMobile;