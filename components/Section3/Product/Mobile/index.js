import React, { useState } from 'react'
import Slider from 'react-touch-drag-slider'
import styled, { createGlobalStyle, css } from 'styled-components'
import { motion  , useCycle } from 'framer-motion';
import images from './images'
import { useRouter } from 'next/router';

// define some basic styles

// The slider will fit any size container, lets go full screen...



function App({setfirst , setEffect}) {

  const router =  useRouter()

  const [index, setIndex] = useState(1)

  const setFinishedIndex = (i) => {
    console.log('finished dragging on slide', i)
    setIndex(i)
  }

  const next = () => {
    if (index < images.length - 1) setIndex(index + 1)
  }

  const previous = () => {
    if (index > 0) setIndex(index - 1)
  }

  return (
    <>
     
     <div className='main' >
   
      
        <Slider
          onSlideComplete={setFinishedIndex}
          onSlideStart={(i) => {
            console.clear()
            console.log('started dragging on slide', i)
          }}
          activeIndex={index}
          threshHold={100}
          transition={0.5}
          scaleOnDrag={true}
        >
          {images.map(({ url, title }, index) => (
           <div  className='darg' key={index} >
           <motion.svg version="1.1" xmlns="http://www.w3.org/2000/svg" 
viewBox="0 0 500 500" width="100%" id="blobSvg" filter="blur(0px)" 
style={{opacity: 1}}

transform="rotate(5)">
  
  <motion.image x="0" y="0"
  
  width="100%" height="100%" clipPath="url(#shape)" 
href={url} 
preserveAspectRatio="none"></motion.image>                        <defs>                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">                            <stop offset="0%" style={{stopColor: "rgb(238, 205, 163)"}}></stop>                            <stop offset="100%" style={{stopColor: "rgb(239, 98, 159)"}}></stop>                        </linearGradient>                        </defs>                                            <clipPath id="shape"><path id="blob" fill="url(#gradient)">                            <animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"></animate>                        </path></clipPath></motion.svg>
 
 <div   className='banner'  >  
<motion.img





    style={{  maxWidth: "100%",
      height: "auto"  }}



src="/TataCLiq/Vector.png"

alt="logo"

  

  
  />
</div>
<h2  onClick={async ( )=> {
   await setEffect(true)
   setTimeout(() => {
      setfirst(true)
   }, 1000);

} }  style={{marginTop:"5rem"}} >

<h2 style={{marginRight:"2rem"}} >{title}</h2>
<svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="12" fill="#1A1A1A"/>
<path d="M16.5184 12.1514C16.5527 12.068 16.5615 11.9764 16.5436 11.8881C16.5259 11.7998 16.4822 11.7187 16.4182 11.6552L12.3207 7.55865C12.2035 7.45837 12.0434 7.42413 11.8953 7.46792C11.7474 7.51161 11.6316 7.62734 11.5879 7.77526C11.5441 7.92329 11.5784 8.08332 11.6787 8.20047L15.0023 11.5233H7.9045C7.74179 11.5233 7.5915 11.61 7.51019 11.7508C7.42889 11.8917 7.42889 12.0652 7.51019 12.206C7.5915 12.3468 7.7418 12.4336 7.9045 12.4336H15.0023L11.6834 15.7517C11.587 15.8342 11.5295 15.9532 11.5245 16.0799C11.5197 16.2066 11.5679 16.3296 11.6576 16.4193C11.7473 16.5089 11.8704 16.5572 11.9971 16.5523C12.1238 16.5474 12.2428 16.4898 12.3253 16.3935L16.4229 12.2969C16.4639 12.255 16.4963 12.2055 16.5186 12.1512L16.5184 12.1514Z" fill="white"/>
</svg>



</h2>
<h2>Powering good life</h2>
           </div>
          ))}
        </Slider>

        </div>
  
    </>
  )
}

export default App
