import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

import useMousePosition from "./useMousePosition";

const ButtonCursor = props => {

    console.log(props , "hgh")
    const { clientX, clientY } = useMousePosition();
    



    


    return (

        <>
    <div 
      style={{ 
          position: "absolute",
       
        zIndex: 9999,
        display: "flex",
        justifyContent:"center",
        alignItems:"center",
        width: "100%",
        height: "100%",
       
        pointerEvents: "none",
       
        
      }}
    >
                        <div
                className="svg"
               
                style={{
                    position: "absolute",
                    left: clientX,
                    top: clientY,
                    width: "105px",
                    height: "105px",
                    background: "radial-gradient(100% 100% at 50% 0%, #717172 0%, #2D2D2D 61.96%)",
                    transform: "translate(-50%, -50%)",
                    borderRadius:"50%",
                    display: 'flex',
                    justifyContent:"center",
                    alignItems:"center"
                  }}
            >
            
               
<span style={{fontSize:"1.19rem" , fontFamily:"Manrope"}} >View Product</span>

              

         
             
            </div>

            </div>
        </>
    );
}



export default ButtonCursor;