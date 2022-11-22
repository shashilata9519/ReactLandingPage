import React from "react";
import img1 from "../images/Illustration 1.svg";
import location from "../images/Group 1215.svg";
import img2 from "../images/Group 1217.svg";
import img3 from "../images/Group 1216.svg";
import img4 from "../images/Illustration 2.svg";
import tick from "../images/Group 1120.svg";
import "../css/section.css";
function Section() {
  return (
    <>
      <section className="sectionOne">
        <div className="sectionOneText">
          <h5>
            Want anything to be
            <br /> easy with <span> LaslesVPN.</span>
          </h5>
          <p>
            Provide a network for all your needs with ease and fun using{" "}
            <span>LaslesVPN</span> discover interesting features from us.
          </p>
          <button>Get Started</button>
        </div>
        <div className="sectionOneImage">
          <img src={img1} alt="illustration" />
        </div>
      </section>
      <section className="sectionTwo">
        <div className="row">
          <div className="col">
            <img src={img3} atl="icon" />
            <div>
              <h3>90+</h3>
              <p>Users</p>
            </div>
          </div>
          <div className="col">
            <img src={location} atl="icon" />
            <div>
              <h3>30+</h3>
              <p>Locations</p>
            </div>
          </div>
          <div className="col">
            <img src={img2} atl="icon" />
            <div>
              <h3>50+</h3>
              <p>Servers</p>
            </div>
          </div>
        </div>
      </section>
      <section className="sectionOne sectionThree">
        <div className="sectionOneImage">
          <img src={img4} alt="illustration" />
        </div>
        <div className="sectionOneText">
          <h1>
            We Provide Many
            <br /> Features You Can Use
          </h1>
          <p>
            You can explore the features that we provide with fun and have their
            own functions each feature.
          </p>
          <div className="sectionList">
            <img src={tick} alt="illustration" />
            <div>Powerfull online protection.</div>
          </div>
          <div className="sectionList">
            <img src={tick} alt="illustration" />
            <div>Internet without borders.</div>
          </div>
          <div className="sectionList">
            <img src={tick} alt="illustration" />
            <div>Supercharged VPN.</div>
          </div>
          <div className="sectionList">
            <img src={tick} alt="illustration" />
            <div>No specific time limits.</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section;
