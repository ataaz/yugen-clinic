import React from "react";
import yicon from '../../images/y-icon.png';
import { Link } from 'react-router-dom';

function HomeBlogs() {
  return(
    <div className="HomeBlogs text-center content-block1 position-relative">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
            <h2>Latest Blogs</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4">
              <div className="blogbox">
                <span className="blog_date d-block">20 April</span>
                <Link to="#" className="blog_title d-block">Lorem ipsum dolor sit amet consectetur</Link>
                <Link to="#" className="read_more d-block">Read more</Link>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="blogbox">
                <span className="blog_date d-block">20 April</span>
                <Link to="#" className="blog_title d-block">Lorem ipsum dolor sit amet consectetur</Link>
                <Link to="#" className="read_more d-block">Read more</Link>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="blogbox">
                <span className="blog_date d-block">20 April</span>
                <Link to="#" className="blog_title d-block">Lorem ipsum dolor sit amet consectetur</Link>
                <Link to="#" className="read_more d-block">Read more</Link>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link to="#" className="btn2">Go to blog</Link>
          </div>
      </div>
    </div>
  );
}
export default HomeBlogs;