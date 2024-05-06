import { useEffect, useState } from 'react'
import './App.css'
import Landing from './Components/Landing';
import PropTypes from 'prop-types';
// import { BusinessCard } from './Components/BusinessCard';

function App() {


const[render, setRender] =useState()



useEffect(()=>setRender(<Landing setRender={setRender}   />),[])

  return (
    <>
    <PresentRender>{render}</PresentRender>
    {/* <BusinessCard {...UserDetails}></BusinessCard> */}
        
    </>
  )
}

function PresentRender({children}){
    return <>
    {children}
  </>
}

PresentRender.propTypes = {
  children: PropTypes.node
}


export default App
