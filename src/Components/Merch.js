import React from "react";
import "./merch.scss";
import hat from '../assets/merch/hat.jpg'
import sweatshirt from '../assets/merch/sweatshirt.jpg'
import shirt from '../assets/merch/shirt.jpg'


export const Merch = () =>
( <>
    <div id="merch" className="merch-container">
        <div className="title">
            Merch {/*Maybe put logo image here */}    
        </div>
        <div className="merch-desc">
            <p>
            Coming soon.
            </p>
        </div>
        <div className="merch-images">
            <img className="merch-image"src={shirt} />
            <img className="merch-image" src={hat} />
            <img className="merch-image" src={sweatshirt} />

        </div>

       
    </div>
  </>
  );
