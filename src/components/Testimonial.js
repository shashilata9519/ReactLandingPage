import React from "react";
import "../css/testimonial.css";
import customer1 from "../images/Ellipse 175 (1).png";
import customer2 from "../images/Ellipse 175 (2).png";
import customer3 from "../images/Ellipse 175.png";

function Testimonial() {
  return (
    <>
      <section className="testimonial">
        <div className="testHeading">
          <h2>
            Trusted by Thousands of <br /> Happy Customer
          </h2>
          <p>
            These are the stories of our customers who have joined us with great{" "}
            <br /> pleasure when using this crazy feature.
          </p>
        </div>
        
          <div className="cardRow">
            <div className="cardCol">
              <div className="card">
                <div className="cardbody">
                  <div className="partOne">
                    <img src={customer3} alt="customer" />
                    <div className="partName">
                      <h4>Viezh Robert</h4>
                      <p>Warsaw, Poland</p>
                    </div>
                  </div>
                  <div className="rating">
                    4.5 <i className="fa-solid fa-star"></i>
                  </div>
                </div>
                <div className="cardtext">
                  <p>
                    “Wow... I am very happy to use this VPN, it turned out to be
                    more than my expectations and so far there have been no
                    problems. LaslesVPN always the best”.
                  </p>
                </div>
              </div>
            </div>
            <div className="cardCol">
              <div className="card">
                <div className="cardbody">
                  <div className="partOne">
                    <img src={customer1} alt="customer" />
                    <div className="partName">
                      <h4>Viezh Robert</h4>
                      <p>Warsaw, Poland</p>
                    </div>
                  </div>
                  <div className="rating">
                    4.5 <i className="fa-solid fa-star"></i>
                  </div>
                </div>
                <div className="cardtext">
                  <p>
                  “I like it because I like to travel far and still can connect with high speed.”.
                  </p>
                </div>
              </div>
            </div>
            <div className="cardCol">
              <div className="card">
                <div className="cardbody">
                  <div className="partOne">
                    <img src={customer2} alt="customer" />
                    <div className="partName">
                      <h4>Viezh Robert</h4>
                      <p>Warsaw, Poland</p>
                    </div>
                  </div>
                  <div className="rating">
                    4.5 <i className="fa-solid fa-star"></i>
                  </div>
                </div>
                <div className="cardtext">
                  <p>
                  “This is very unusual for my business that currently requires a virtual private network that has high security.”.
                  </p>
                </div>
              </div>
            </div>
          </div>
        <div className="slider">
            <div className="dots">
                <p></p>
                <p></p>
                <p></p>
                <p></p>
            </div>
            <div className="arrow">
                <p><i className="fa-solid fa-arrow-left"></i></p>
                <p><i className="fa-solid fa-arrow-right"></i></p>
            </div>
        </div>
      </section>
    </>
  );
}

export default Testimonial;
