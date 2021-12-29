import React from 'react';
import './Header.css';
import punkLogo from '../assets/header/logo.png';
import searchIcon from '../assets/header/search.png';
import themeSwitchIcon from '../assets/header/theme-switch.png'
import { useWeb3React } from '@web3-react/core';
import { injected } from './Wallet/connectors'
import {Link} from 'react-scroll'
import Nav from './Nav.js'

const Header = () => {
    const { active, account, library, connector, activate, deactivate} = useWeb3React()
    async function connect() {
        try{
            await activate(injected)
        }catch (ex) {
            console.log(ex)
        }
    }
    return (
        <>
        <div className='header'>
            <div className='logoContainer'>
            <Link activeClass="active" to="home" spy={true} smooth={true}>  <img src={punkLogo} className='punkLogo' alt=''/></Link>
            </div>
            {/* <div className="searchBar">
                <div className="searchIconContainer">
                    <img src={searchIcon} alt='search'/>
                </div>
                <input type="text" className="searchInput" placeholder='SlumLord ID ...' />
                
            </div> */}
            <div className="onresize">

          <div onClick={connect} className="loginButton">
                {active ?<span>Connected with <b>{account.substring(0,6)}...</b></span> : <span>Connect Wallet</span>}
            </div>
            <div className="headerItems">
                {/* <p><Link activeClass="active" to="home" spy={true} smooth={true}>About</Link></p> */}
                <p><Link  to="about" spy={true} smooth={true}>About</Link></p>

                <p onClick={()=> window.open("https://opensea.io/slumlords", "_blank")}>Marketplace</p>
                <p><Link  to="roadmap" spy={true} smooth={true}>Roadmap</Link></p>
                <p><Link  to="team" spy={true} smooth={true}>Team</Link></p>
                <p><Link  to="philanthropy" spy={true} smooth={true}>Philanthropy</Link></p>
                <p><Link  to="metaverse" spy={true} smooth={true}>Metaverse</Link></p>
                <p><Link  to="future" spy={true} smooth={true}>Future</Link></p>
                <p><Link  to="merch" spy={true} smooth={true}>Merch</Link></p>
            </div>

            {/* <div className="headerActions">
                <div className="themeSwitchContainer"><img src={themeSwitchIcon} alt="" /></div>
            </div> */}
  
         
            </div>

        </div>
        <Nav />
</>
    )
}

export default Header
   