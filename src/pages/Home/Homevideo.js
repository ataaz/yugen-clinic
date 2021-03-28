import React from "react";
import VideoIcon from '../../images/video-icon.png';
import { Link } from 'react-router-dom';

function HomeVideo() {
  return(
    <div className="HomeVideo text-center content-block1 position-relative">
        <Link to="#"><img src={VideoIcon} alt=""/></Link>
    </div>
  );
}
export default HomeVideo;