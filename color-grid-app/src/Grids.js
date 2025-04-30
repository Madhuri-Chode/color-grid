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

   

    
    
    return (
        
        <Grid size={val}>
            {[...Array(val*val)].map(()=>
                <GridItem color={color}/>
            )}
        </Grid>
    );
}

function GridItem({color}){

    
    const[boxcolor,setBoxcolor]=useState(null);
    const Box=styled.div`
        
        aspect-ratio:1;
        background-color:${boxcolor || "white"};
        border:1px solid black;

    `;

    function handleClick(){
        setBoxcolor(color);
    }
    
    return(
        <Box onClick={handleClick}></Box>
    );
}