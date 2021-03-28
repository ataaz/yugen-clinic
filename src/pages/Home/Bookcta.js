import React from "react";
import yicon from '../../images/y-icon.png';
import { Link } from 'react-router-dom';

function BookCTA() {
  return(
    <div className="BookCTA text-center content-block2 position-relative">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
            <div className="text-center">
            <h2>Book Today</h2>
            <p>Should you have any questions prior to your appointment date, please feel free to contact our office at <br></br>123-456-7890. We look forward to seeing you here!</p>
              <Link to="#" className="btn2">Book Now</Link>
            </div>
            </div>
          </div>
      </div>
    </div>
  );
}
export default BookCTA;