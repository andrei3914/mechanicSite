import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import './Slideshow.css';

const fadeImages = [
  "http://smartcdn.prod.postmedia.digital/driving/wp-content/uploads/2016/09/mechanic-getty.jpg",
  "https://www.mach1services.com/wp-content/uploads/2020/08/Mobile-Mechanic-Near-Me.jpg",
  "https://cdn.vox-cdn.com/thumbor/aHvl6FUsy1nsVf3ktYPPJnZVRYs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21946934/GettyImages_1166169921.jpg",
  "https://d3jj1xescvzl2o.cloudfront.net/08-08-2019/t_b9b47a9d6fd745b5aa6e1b3196407c00_name_fl_ne_auto_tech_shortage_01_scaled.jpg"

];

export default function Slideshow() {
  return (
    <div className="slide-container">
      <Fade>
        <div className="each-fade">

          <img className="bg" src={fadeImages[0]} />
        </div>
        <div className="each-fade">
          <img className="bg" src={fadeImages[1]} />
        </div>
        <div className="each-fade">
          <img className="bg" src={fadeImages[2]} />
        </div>
        <div className="each-fade">
          <img className="bg" src={fadeImages[3]} />
        </div>
      </Fade>
    </div>
  );
}