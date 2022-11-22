import React from "react";
import box from "../images/Free.svg";
import "../css/plan.css";
import global from "../images/Huge Global.svg";
import reddit from "../images/Mask Group (1).svg";
import amazon from "../images/Mask Group (2).svg";
import discord from "../images/Mask Group (3).svg";
import spotify from "../images/Mask Group (4).svg";
import netflix from "../images/Mask Group.svg";
function Plan() {
  return (
    <>
      <section>
        <div className="planSection">
          <div className="planHeading">
            <h2>Choose Your Plan</h2>
            <p>
              Let's choose the package that is best for you and explore it
              happily and cheerfully.
            </p>
          </div>
          <div className="PlanRow">
            <div className="PlanCol">
              <div className="PlanImg">
                <img src={box} alt="box" />
              </div>
              <h3>Free Plan</h3>
              <div className="planType">
                <div className="check">
                  <i className="fa-solid fa-check"></i>
                  <p>Unlimited Bandwitch</p>
                </div>
                <div className="check">
                  <i className="fa-solid fa-check"></i>
                  <p>Encrypted Connection</p>
                </div>
                <div className="check">
                  <i className="fa-solid fa-check"></i>
                  <p>No Traffic Logs</p>
                </div>
                <div className="check">
                  <i className="fa-solid fa-check"></i>
                  <p>Works on All Devices</p>
                </div>
              </div>
              <h3>Free</h3>
              <button>Select</button>
            </div>
            <div className="PlanCol">
              <div className="PlanImg">
                <img src={box} alt="box" />
              </div>
              <h3>Standard Plan</h3>
              <div className="planType">
                <div className="check">
                  <i className="fa-solid fa-check"></i>
                  <p>Unlimited Bandwitch</p>
                </div>
                <div className="check">
                  <i className="fa-solid fa-check"></i>
                  <p>Encrypted Connection</p>
                </div>
                <div className="check">
                  <i className="fa-solid fa-check"></i>
                  <p>Yes Traffic Logs</p>
                </div>
                <div className="check">
                  <i className="fa-solid fa-check"></i>
                  <p>Works on All Devices</p>
                </div>
                <div className="check">
                  <i className="fa-solid fa-check"></i>
                  <p>Connect Anyware</p>
                </div>
              </div>
              <p>
                <span>$9</span> / mo
              </p>
              <button>Select</button>
            </div>
            <div className="PlanCol">
              <div className="PlanImg">
                <img src={box} alt="box" />
              </div>
              <h3>Premium Plan</h3>
              <div className="planType">
                <div className="check">
                  <i className="fa-solid fa-check"></i>
                  <p>Unlimited Bandwitch</p>
                </div>
                <div className="check">
                  <i className="fa-solid fa-check"></i>
                  <p>Encrypted Connection</p>
                </div>
                <div className="check">
                  <i className="fa-solid fa-check"></i>
                  <p>Yes Traffic Logs</p>
                </div>
                <div className="check">
                  <i className="fa-solid fa-check"></i>
                  <p>Works on All Devices</p>
                </div>
                <div className="check">
                  <i className="fa-solid fa-check"></i>
                  <p>Connect Anyware</p>
                </div>
                <div className="check">
                  <i className="fa-solid fa-check"></i>
                  <p>Get New Features</p>
                </div>
              </div>
              <p>
                <span>$12</span> / mo
              </p>
              <button>Select</button>
            </div>
          </div>
        </div>
        <div className="global">
          <div className="globaltext">
            <h2>
              Huge Global Network
              <br /> of Fast VPN
            </h2>
            <p>
              See LaslesVPN everywhere to make it easier for you when you move
              locations.
            </p>
          </div>
          <div className="globalImg">
            <img src={global} alt="box" />
            <div className="bg"></div>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="brandLogo">
          <img src={netflix} alt="brand" />
          <img src={reddit} alt="brand" />
          <img src={amazon} alt="brand" />
          <img src={discord} alt="brand" />
          <img src={spotify} alt="brand" />
        </div>
      </section>
    </>
  );
}

export default Plan;
