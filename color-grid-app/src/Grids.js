import { useState } from "react";
import styled from "styled-components";

const Grid=styled.div`
        display: grid;
        grid-template-columns: repeat(${props=>props.size},1fr);
        grid-template-rows: repeat(${props=>props.size},1fr);
        
        width:40%;
        height:40%;
        aspect-ratio:1;
        border: 2px solid black;
        margin:auto;

    `;
   

export default function Grids({val,color}){
    const[isDragging,setIsDragging]=useState(false);
    
    function handleMouseDown(e){
        
        setIsDragging(true);
   
    }

    return (
        
        <Grid size={val}>
            {[...Array(val*val)].map(()=>
                <GridItem handleMouseDown={handleMouseDown} isDragging={isDragging} setIsDragging={setIsDragging} color={color} />
            )}
        </Grid>
    );
}

function GridItem({color,isDragging,setIsDragging,handleMouseDown}){

    
    const[boxcolor,setBoxcolor]=useState(null);
    
    const Box=styled.div`
        
        aspect-ratio:1;
        background-color:${boxcolor || "white"};
        border:1px solid black;

    `;

    
    
    function handleMouseUp(){

        if(isDragging){
            setBoxcolor(color);
            setIsDragging(false);
        }

    }
    function handleMouseMove(){
        
        if(isDragging){
            
            setBoxcolor(color);
            
            
        }
    }
        
    function handleSetColor(){
        setBoxcolor(color);
    } 
    

    
    return(
        <Box onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onClick={handleSetColor}></Box>
    );
}