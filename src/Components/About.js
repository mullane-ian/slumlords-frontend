import React from "react";
import "./About.scss";
import logo from '../assets/header/logo.png'

export const About = () =>
( <>
    <div id="about" className="about-container">
        <div className="about-img">
            <img src={logo} />
        </div>
       
        <div className="about-desc">
            <p>
            The Slum Lords are a group of digital real estate whales that have come to take over the metaverse and its multiple platforms. A unique group of 10,000 members who collectively work together to buy and sell digital land to exploit the power of numbers. The initial release of NFT’s creates a fund to invest in projects that will continue to grow and provide dividends to its holders. All projects will be decided upon by its members and our own version of a decentralized autonomous organization shall be formed. The Slum Lords will invest in local communities of blight and will be involved in real world philanthropy. Join the Slum Lords in the takeover and become an exclusive member.
            </p>
        </div>
    </div>
  </>
  );
