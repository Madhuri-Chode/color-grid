
import styled from 'styled-components';
import './App.css';
import Grids from './Grids';
import { useState } from 'react';

function App() {

  const [play, setPlay]=useState(false);
  const[ val,setVal]=useState(null);
  const [color,setColor]=useState(null);

  function handlePlay(e){
    e.preventDefault();
    if(val<=0){
      return;
    }
    else{
      setPlay(!play);
    }

  }
  return (
    <div className="App">

      {play ? <div className='playGround'> <Grids val={val} color={color}/> <Palette setColor={setColor} /></div>: <div><label>Please enter the number:</label>
      <input type='number' onChange={(e)=>setVal(e.target.value)}/>
      <button onClick={handlePlay}>Play</button></div>}
      
    </div>
  );
}

function Palette({setColor}){

  const PaletteBox=styled.div`
      display:grid;
      grid-template-columns: repeat(7,1fr);
      grid-template-rows: 1;
      border : 1px solid black;
      height:5%;
      width:50%;
      
      margin:auto;
  `;
  function handleColor(e){
    setColor(e.target.dataset.value);
  }
  return (
    <PaletteBox>
      <div onClick={handleColor} data-value="pink" style={{aspectRatio:1, backgroundColor:'pink'}}></div>
      <div onClick={handleColor} data-value="green" style={{aspectRatio:1, backgroundColor:'green'}}></div>
      <div onClick={handleColor} data-value="blue" style={{aspectRatio:1, backgroundColor:'blue'}}></div>
      <div onClick={handleColor} data-value="yellow" style={{aspectRatio:1, backgroundColor:'yellow'}}></div>
      <div onClick={handleColor} data-value="red" style={{aspectRatio:1, backgroundColor:'red'}}></div>
      <div onClick={handleColor} data-value="violet" style={{aspectRatio:1, backgroundColor:'violet'}}></div>
      <div onClick={handleColor} data-value="black" style={{aspectRatio:1, backgroundColor:'black'}}></div>
    </PaletteBox>
  );
}

export default App;
