import React from "react";
import "../css/footer.css";
import logo from "../images/Logo.svg";
import twitter from "../images/Twitter.svg";
import instagram from "../images/Instagram.svg";
import fb from "../images/Facebook.svg";
function Footer() {
  return (
    <div className="footer">
    
      <footer>
        <div className="footerContent">
          <div className="primary">
            <img className="primaryLogo" src={logo} alt="logo" />
            <div>
              LaslesVPN is a private virtual network that <br /> has unique
              features and has high security.
            </div>
            <div className="socialmedia">
              <img src={fb} alt="logo" />
              <img src={twitter} alt="logo" />
              <img src={instagram} alt="logo" />
            </div>
            <p>©2020LaslesVPN</p>
          </div>
          {/* <div className="secondary"> */}
          <div className="product">
            <h3>Product</h3>
            <p>Download</p>
            <p>Pricing</p>
            <p>Locations</p>
            <p>Server</p>
            <p>Countries</p>
            <p>Blog</p>
          </div>
          <div className="Engage">
            <h3>Engage</h3>
            <p>LaslesVPN ? </p>
            <p>FAQ</p>
            <p>About Us</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
          <div className="money">
            <h3>Earn Money</h3>
            <p>Affiliate</p>
            <p>Become Partner</p>
          </div>
          {/* </div> */}
        </div>
      </footer>
      <section className="subMain">
      <div className="subscribe">
        <div className="content">
          <h1>Subscribe Now for<br/> Get Special Features!</h1>
          <p>Let's subscribe with us and find the fun.</p>
        </div>
        <div className="subBtn">
          <button>Subscribe Now</button>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Footer;
