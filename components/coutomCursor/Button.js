import React from "react";
import useMousePosition from "./useMousePosition";
  const ButtonCursor = () => {
  const { clientX, clientY } = useMousePosition();
  
  return (
    <div 
      style={{ 
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        pointerEvents: "none"
        
      }}
    >
      <svg
        width={300}
        height={300}
        viewBox="0 0 50 50"
        style={{
          position: "absolute",
          left: clientX,
          top: clientY,
          transform: "translate(-50%, -50%)",
        }}
      >
        <circle
          cx="25"
          cy="25"
          r="8"
          
        />
    
      </svg>
      <p  style={{color:"white"}} >
    Terms & Info
  </p>
    </div>
  );
};


export default ButtonCursor;

