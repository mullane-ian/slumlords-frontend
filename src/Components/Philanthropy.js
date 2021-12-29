import React from "react";
import "./Philanthropy.scss";
import logo from '../assets/Philanthropy/youthbuild.png'

export const Philanthropy = () =>
( <>
    <div id="philanthropy" className="philanthropy-container">
        <div className="title">
            Philanthropy {/*Maybe put logo image here */}    
        </div>
        <div className="philanthropy-desc">
            <p>
            With all the profits accumulated from taking over the Metaverse, the Slumlords are dedicated to giving back to the community. After phase 3, we will begin our philantrhopic efforts by setting up <span>SLum Lords Non Profit</span>. We will continue this journey by teaming up with other national orginizations. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi tempore placeat quod nostrum voluptatum dolores temporibus necessitatibus impedit consequuntur atque.
            </p>
        </div>
        <div className="philanthropy-img">
            <img src={logo}/> 
        </div>
    </div>
  </>
  );
