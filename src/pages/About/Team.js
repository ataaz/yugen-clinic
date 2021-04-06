import React from "react";
import TeamImg from '../../images/team.jpg';
import { Link } from 'react-router-dom';

function Team() {
  return(
    <div className="Team content-block1 position-relative">
        <div className="container text-center">
            <h2>Internationally Renowned Specialists</h2>
        </div>
        <div className="container">
          <div className="row text-center">
            <div className="col-xl-4">
              <div className="teamBox">
                <img src={TeamImg} alt=""></img>
                <h3>John Doe</h3>
                <span>Designation</span>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="teamBox">
                <img src={TeamImg} alt=""></img>
                <h3>John Doe</h3>
                <span>Designation</span>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="teamBox">
                <img src={TeamImg} alt=""></img>
                <h3>John Doe</h3>
                <span>Designation</span>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="teamBox">
                <img src={TeamImg} alt=""></img>
                <h3>John Doe</h3>
                <span>Designation</span>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="teamBox">
                <img src={TeamImg} alt=""></img>
                <h3>John Doe</h3>
                <span>Designation</span>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="teamBox">
                <img src={TeamImg} alt=""></img>
                <h3>John Doe</h3>
                <span>Designation</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
export default Team;