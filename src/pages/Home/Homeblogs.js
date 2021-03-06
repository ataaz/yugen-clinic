import React from "react";
import blog1 from '../../images/blog1.jpg';
import blog2 from '../../images/blog2.jpg';
import blog3 from '../../images/blog3.jpg';
import { Link } from 'react-router-dom';

function HomeBlogs() {
  return(
    <div className="HomeBlogs content-block1 position-relative">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 text-center">
            <h2>Latest Blogs</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-4 col-sm-4 mb-4 mb-md-0">
              <div className="blogbox">
                <Link to="#" className="d-block"><img src={blog1} alt=""/></Link>
                <span className="blog_date d-block">20 April</span>
                <Link to="#" className="blog_title d-block">Lorem ipsum dolor sit amet consectetur</Link>
                <Link to="#" className="read_more d-block">Read more</Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 col-sm-4 mb-4 mb-md-0">
              <div className="blogbox">
              <Link to="#" className="d-block"><img src={blog2} alt=""/></Link>
                <span className="blog_date d-block">20 April</span>
                <Link to="#" className="blog_title d-block">Lorem ipsum dolor sit amet consectetur</Link>
                <Link to="#" className="read_more d-block">Read more</Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 col-sm-4">
              <div className="blogbox">
              <Link to="#" className="d-block"><img src={blog3} alt=""/></Link>
                <span className="blog_date d-block">20 April</span>
                <Link to="#" className="blog_title d-block">Lorem ipsum dolor sit amet consectetur</Link>
                <Link to="#" className="read_more d-block">Read more</Link>
              </div>
            </div>
          </div>
          <div className="text-center mt-4 pt-4 mt-lg-5 pt-lg-5">
            <Link to="#" className="btn2">Go to blog</Link>
          </div>
      </div>
    </div>
  );
}
export default HomeBlogs;