import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

import useMousePosition from "./useMousePosition";

const ProgressBarMobile = props => {

    console.log(props , "hgh")
    const { clientX, clientY } = useMousePosition();
    const [offset, setOffset] = useState(0);
    const circleRef = useRef(null);
    const {
        size,
        progress,
        strokeWidth,
        circleOneStroke,
        circleTwoStroke,
        first
    } = props;



    const center = 130 / 2;
    const radius = 130 / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;

    useEffect(() => {
        const progressOffset = ((100 - progress) / 100) * circumference;
        setOffset(progressOffset);

        circleRef.current.style = 'transition: stroke-dashoffset 4000ms ';

    }, [setOffset, progress, circumference, offset]);

    return (

        <>
    <div 
    
    >
                        <svg
                className="svg"
                width={size}
                height={size}
                style={{
                    position: "absolute",
                    left: clientX,
                    top: clientY,
                    transform: "translate(-50%, -50%)",
                  }}
            >
                <circle
                    className="svg-circle-bg"
                    stroke={circleOneStroke}
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={strokeWidth}
                />
                <circle
                    className="svg-circle"
                    ref={circleRef}
                    stroke={circleTwoStroke}
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
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
              <tspan  > Keep </tspan>
<tspan  > Holding</tspan>
        </text>
          )
        } 
      })()}

              

         
             
            </svg>

            </div>
        </>
    );
}

ProgressBarMobile.propTypes = {
    size: PropTypes.number.isRequired,
    progress: PropTypes.number.isRequired,
    strokeWidth: PropTypes.number.isRequired,
    circleOneStroke: PropTypes.string.isRequired,
    circleTwoStroke: PropTypes.string.isRequired
}

export default ProgressBarMobile;