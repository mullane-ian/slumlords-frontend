import React, { useState, useEffect } from 'react';
import './Main.css'
import instagramLogo from '../assets/owner/instagram.png';
import twitterLogo from '../assets/owner/twitter.png';
import moreIcon from '../assets/owner/more.png';
import discordIcon from '../assets/owner/discord.png';
import check from '../assets/owner/check.png'
import { Modal } from 'react-responsive-modal'

const Main = ({ selectedPunk, punkListData }) => {
    const [activePunk, setActivePunk] = useState(punkListData[1]);
    useEffect(() => {
      console.log(activePunk)
        setActivePunk(punkListData[selectedPunk])
    }, [punkListData, selectedPunk])


 
    return (
        <div className="main">
          <div className="mainContent">
            <div className="heroHighlight">
              <div className="heroContainer">
                <img
                  className="selectedHero"
                  src={activePunk?.image_original_url}
                  alt=""
                />
              </div>
            </div>
            <div className="heroDetails" style={{ color: "#fff" }}>
              <div className="title">
                {activePunk.name}
                <span className="itemNumber"> #{activePunk.token_id}</span>
              </div>
              <div className="owner">
                <div className="ownerImageContainer">
                  <img src={activePunk.owner.profile_img_url} alt=''/>
                </div>
                <div className="ownerDetails">
                  <div className="ownerNameAndHandle">
                    <div>{activePunk.owner.address}</div>
                    <div className="ownerHandle">
                      @slumlordsnft  <img src={check} height="13px" alt=''/>
                    </div>
                  </div>
                  <div className="ownerLink">
                    <img src={instagramLogo} alt="" onClick={()=> window.open("https://instagram.com/slumlordsnft", "_blank")}/>
                  </div>
                  <div className="ownerLink">
                    <img src={twitterLogo} alt="" onClick={()=> window.open("https://twitter.com/slumlordsnft", "_blank")}/>
                  </div>
                  <div className="ownerLink discord">
                    <img src={discordIcon} alt="" onClick={()=> window.open("https://discord.gg/RB777vA3", "_blank")}/>
                  </div>
                  <div className="ownerLink">
                    <img src={moreIcon} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Main

