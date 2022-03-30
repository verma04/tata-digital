import React from 'react'
  

import { motion  , useCycle } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Mobile from './Mobile';
export default function Digital({setExplore, setfirst}) {

   const router = useRouter()
    const backImgVariants = {
        hidden: { scale:1 , opacity:1 },
        visible: { 
          scale:1.4,
          opacity:1,
          transition: {   duration : 60   }
        },
      }
      const svgVariants = {
        hidden: { rotate: -180 },
        visible: { 
          rotate: 0,
          transition: { duration : 1 }
        },
      }
      
      const pathVariants = {
        hidden: {
          opacity: 0,
          pathLength: 0,
        },
        visible: {
          opacity: 1,
          pathLength: 1,
          transition: { 
            duration: 2,
            ease: "easeInOut",
          }
        }
      };
  return (
    <>
    <div  className='disgital'  style={{width:"100%", height:"100vh" , display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}} >

<motion.div 
variants={backImgVariants}
initial="hidden"
animate="visible"
style={{width:"100%", height:"100%"}}
className='backImg'>
      <Image


layout="fill"


   src="/assets/Bg_dark-digital.jpg"
   alt="Picture of the author"
   

 />

      </motion.div>
       <div id='stars'></div>
  
    <h1   style={{color:"white" , zIndex:1000, fontSize:"3rem" , marginBottom:"5rem",   fontFamily: "Manrope"}} >
      
    <span>Future </span> 
  <span>is </span> 
  <span>today</span> 
 
      
      
</h1>

    <div
              

              style={{width:"100%", height:"30%" , zIndex:1000 , justifyContent:"center", alignItems:"center", display:"flex"  , position:"relative" }}
              
                   className="logo">
              
  <div className='ab'  style={{width:"100%", height:"100%" , justifyContent:"center", alignItems:"center", display:"flex"  , position:"absolute" }} >
  <motion.div

 
  style={{width:"25rem", height:'25rem' , zIndex:1}} className='div' >
<motion.svg version="1.1" xmlns="http://www.w3.org/2000/svg" 
viewBox="0 0 500 500" width="100%" id="blobSvg" filter="blur(0px)" 
style={{opacity: 1}}

transform="rotate(5)">
  
  <motion.image x="0" y="0"
  
  width="100%" height="100%" clipPath="url(#shape)" 
href="/assets/PIXELEXTRUSTION.png" 
preserveAspectRatio="none"></motion.image>                        <defs>                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">                            <stop offset="0%" style={{stopColor: "rgb(238, 205, 163)"}}></stop>                            <stop offset="100%" style={{stopColor: "rgb(239, 98, 159)"}}></stop>                        </linearGradient>                        </defs>                                            <clipPath id="shape"><path id="blob" fill="url(#gradient)">                            <animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"></animate>                        </path></clipPath></motion.svg>
 
 </motion.div>
  
            
  </div>

  <motion.img
    

    animate={{
      rotate: [0, "10px" ,  "30px",  "50px" ,  "80px" , ],
     
     
     }}
     transition={{
      flip: Infinity,
      duration: 0.25,
      ease: "easeInOut",
     }}
 
    src="/assets/Vector.png"
    alt="Picture of the author"
    width={"25%"}
    height={"25%"}
    style={{marginTop:"3rem"}}
  />
                  </div>

  <motion.div
  
   onClick={()=>{
     
    setfirst(false)
    setExplore(true)}}
  drag
  dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
  dragElastic={0.7}
  
  style={{position:"absolute" , width:"10rem", height:'10rem' , zIndex:1000, bottom:10 , display:"flex" , justifyContent:"center" , alignItems:"center"  , cursor:'pointer'}} > 
  <motion.svg variants={svgVariants}
          initial="hidden"
          animate="visible"width="53" height="51" viewBox="0 0 53 51" fill="none" xmlns="http://www.w3.org/2000/svg">
<motion.path  variants={pathVariants} d="M26.5498 29.6548C26.6409 29.6903 26.7411 29.6995 26.8376 29.6809C26.9341 29.6625 27.0228 29.6173 27.0922 29.5511L31.5708 25.3071C31.6804 25.1858 31.7179 25.02 31.67 24.8666C31.6222 24.7134 31.4957 24.5935 31.334 24.5482C31.1721 24.5029 30.9972 24.5384 30.8691 24.6422L27.2365 28.0845L27.2365 20.7333C27.2365 20.5647 27.1416 20.4091 26.9877 20.3249C26.8337 20.2407 26.644 20.2407 26.49 20.3249C26.3361 20.4091 26.2412 20.5647 26.2412 20.7333L26.2412 28.0845L22.6137 24.6471C22.5235 24.5473 22.3934 24.4877 22.2549 24.4826C22.1164 24.4775 21.9819 24.5275 21.8838 24.6204C21.7858 24.7133 21.7331 24.8408 21.7384 24.972C21.7439 25.1033 21.8067 25.2265 21.912 25.312L26.3906 29.5559C26.4365 29.5983 26.4906 29.6319 26.5499 29.655L26.5498 29.6548Z" fill="white"/>
<motion.path  variants={pathVariants} d="M42.2576 6.16489C42.2576 6.16489 31.6702 -4.83087 18.7409 5.26522C5.81159 15.3613 5.91378 14.2619 4.48852 16.5611C3.06327 18.8602 1.43421 21.9591 1.02699 30.356C0.619777 38.7529 4.89688 40.2522 8.66229 42.1517C12.4277 44.0512 20.7768 48.4492 23.3221 49.2491C25.8674 50.049 31.1608 50.7483 33.2988 48.3494C35.4369 45.9505 41.511 42.085 44.7009 40.3523C54.8813 32.7551 51.8272 24.1583 50.6055 18.5603C49.6282 14.082 42.2576 6.16489 42.2576 6.16489Z" stroke="white"/>
</motion.svg>

</motion.div>


          </div>





          </>
  )
}
