

import useMousePosition from "./useMousePosition";

import React, { useEffect, useState } from "react";

const CircularProgress = ({ size, strokeWidth, percentage, color }) => {
  const { clientX, clientY } = useMousePosition();
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setProgress(percentage);
  }, [percentage]);

  const viewBox = `0 0 ${size} ${size}`;
  const radius = (size - strokeWidth) / 2;
  const center = size/2
  const circumference = radius * Math.PI * 2;
  const dash = (progress * circumference) / 100;

  return (
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
    <svg 
    
    style={{
      position: "absolute",
      left: clientX,
      top: clientY,
      transform: "translate(-50%, -50%)",
    }}
    width={size} height={size} viewBox={viewBox}>
      <circle
        fill="#000000"
        stroke="#ffffff"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
      />
      <circle
        fill="none"
        stroke={percentage === 0 ? "" :"#3555FF"}
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        strokeDasharray={[dash, circumference - dash]}
        strokeLinecap="round"
        style={{ transition: "all 0.5s" }}
      />
  {(() => {
  if (progress === 0) {
    return (
      <text 
      x={`${center}`} 
      y={`${center}`} 
       style={{marginTop:"2rem"}}
      className="svg-circle-text">
        <tspan> Click the {`   `} </tspan>
<tspan>future</tspan>
  </text>
    )
  } else if (progress > 0 ) {
    return (
      <text 
      x={`${center}`} 
      y={`${center}`} 
       style={{marginTop:"2rem" ,   display: "flex",
       justifyContent: "center",
       alignItems: "center",
       flexDirection: "column"}}
      className="svg-circle-text">
        <tspan  > Hold  </tspan>
<tspan  > the 
future</tspan>
  </text>
    )
  } 
})()}
    </svg>
    </div>
  );
};

export default CircularProgress;





             

