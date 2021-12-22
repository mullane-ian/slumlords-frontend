import './App.css';
import Header from './Components/Header';
import {useState, useEffect} from 'react';
import axios from 'axios';
import PunkList from './Components/PunkList';
import Main from './Components/Main';
import Web3 from 'web3';
import { Web3ReactProvider } from '@web3-react/core';


function getLibrary(provider){
  return new Web3(provider)
}

function App() {

  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0)

  useEffect( ()=>{

    const getMyNfts = async ()=>{

     const openseaData = await axios('https://slumlords-backend.herokuapp.com/',{

     headers: {
      'Access-Control-Allow-Origin': '*'
     }
     })
     
     setPunkListData(openseaData.data.assets)
    }
    return getMyNfts()
  }, [])

  return (
    <>
      <Web3ReactProvider getLibrary={getLibrary}>
        <div className='app'>
            <Header />
            {
              punkListData.length > 0 && (
                <>
            <Main punkListData={punkListData} selectedPunk={selectedPunk}/>
            <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk}/>
                </>
              )
            }
          </div>
      </Web3ReactProvider>
    </>

  );
}

export default App;
