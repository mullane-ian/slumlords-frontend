import React from 'react';
import './Header.css';
import punkLogo from '../assets/header/logo.png';
import searchIcon from '../assets/header/search.png';
import themeSwitchIcon from '../assets/header/theme-switch.png'
import { useWeb3React } from '@web3-react/core';
import { injected } from './Wallet/connectors'


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
        <div className='header'>
            <div className='logoContainer'>
                <img src={punkLogo} className='punkLogo' alt=''/>
            </div>
            <div className="searchBar">
                <div className="searchIconContainer">
                    <img src={searchIcon} alt='search'/>
                </div>
                <input type="text" className="searchInput" placeholder='SlumLord ID ...' />
                
            </div>

            <div className="onresize">


            <div className="headerItems">
                <p>Drops</p>
                <p>Marketplace</p>
                <p>About</p>
                <p>Contact</p>

            </div>

            <div className="headerActions">
                <div className="themeSwitchContainer"><img src={themeSwitchIcon} alt="" /></div>
            </div>
            <div onClick={connect} className="loginButton">
                {active ?<span>Connected with <b>{account.substring(0,6)}...</b></span> : <span>Connect Wallet</span>}
            </div>
           
            </div>
        </div>
    )
}

export default Header
   