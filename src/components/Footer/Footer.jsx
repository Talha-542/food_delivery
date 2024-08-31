// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-contennt-left">
          <img src={assets.logo} alt="logo" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
            molestiae, et dolor odit soluta non, atque ducimus corrupti
            reiciendis inventore est fugiat nobis nesciunt neque id. Quasi
            dignissimos facilis quisquam.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>0300-VIGO-911</li>
            <li>CristianoRonaldo@suiiii.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright"> Copyright 2024 @ Food inc.com - All Right Reserved </p>
    </div>
  );
}
