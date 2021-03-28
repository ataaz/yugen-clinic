import React from "react";
import Pro1 from '../../images/pro1.jpg';
import Pro2 from '../../images/pro2.jpg';
import { Link } from 'react-router-dom';

function HomeProducts() {
  return(
    <div className="HomeProducts">
        <div className="gray_bg">
            <div className="container-fluid h-100">
                <div className="row h-100">
                    <div className="col-xl-8 h-100 align-self-center">
                        <div className="product_slider text-center">
                            <div className="product_slider_box">
                                <Link to="#"><img src={Pro1} /></Link>
                                <Link to="#" className="pro_title">Product Name</Link>
                                <span><small>XXX</small> AED</span>
                            </div>
                            <div className="product_slider_box">
                            <Link to="#"><img src={Pro2} /></Link>
                                <Link to="#" className="pro_title">Product Name</Link>
                                <span><small>XXX</small> AED</span>
                            </div>
                        </div>
                        <div className="content-block3">
                            <h2><span>Shop</span> the best <br/>selling products</h2>
                            <Link to="#" className="btn2">Shop Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default HomeProducts;