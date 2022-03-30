import React from 'react'
import SwipeableButton  from '../../Button/SwipperButton'
import globalStyles from './Style'
import { motion  , useCycle } from 'framer-motion';
import Image from 'next/image'
import { useRouter } from 'next/router'
import Navbar from '../../Navbar/Navbar'
function Screen3({setProduct , setExplore}) {
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

  const router =    useRouter()
  
  if (typeof window !== "undefined") {

    const isTouchDevice = 'ontouchstart' in document.documentElement

  
  return (
    <div className='container'>
   
             <style jsx global>
    {globalStyles}

    </style>

    <div className='container-left' >

<h2>
 We set off on a journey that saw us build bridges within the Tata universe, form connections that didn’t exist, and build an experience unlike one ever seen before.
</h2>
    </div>

    <div className='container-right' >

    <div className='container-right-top' >

        <div className='img-wrapper' >
        <Image  
                             src='/assets/PIXELEXTRUSTION.png'    
                             layout="fill" 
                             objectFit="contain" 
                             alt="logo"  ></Image>
        </div>


     
  
</div>
   
</div>

<motion.div
  
  onClick={()=> {setProduct(true)
  
    setExplore(false)
  }}
  drag
  dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
  dragElastic={0.7}
  
  style={{position:"absolute" , width:"10rem", height:'10rem' , zIndex:1000, bottom:10 , display:"flex" , justifyContent:"center" , alignItems:"center" , cursor:"pointer" }} > 
  <motion.svg variants={svgVariants}
          initial="hidden"
          animate="visible"width="53" height="51" viewBox="0 0 53 51" fill="none" xmlns="http://www.w3.org/2000/svg">
<motion.path  variants={pathVariants} d="M26.5498 29.6548C26.6409 29.6903 26.7411 29.6995 26.8376 29.6809C26.9341 29.6625 27.0228 29.6173 27.0922 29.5511L31.5708 25.3071C31.6804 25.1858 31.7179 25.02 31.67 24.8666C31.6222 24.7134 31.4957 24.5935 31.334 24.5482C31.1721 24.5029 30.9972 24.5384 30.8691 24.6422L27.2365 28.0845L27.2365 20.7333C27.2365 20.5647 27.1416 20.4091 26.9877 20.3249C26.8337 20.2407 26.644 20.2407 26.49 20.3249C26.3361 20.4091 26.2412 20.5647 26.2412 20.7333L26.2412 28.0845L22.6137 24.6471C22.5235 24.5473 22.3934 24.4877 22.2549 24.4826C22.1164 24.4775 21.9819 24.5275 21.8838 24.6204C21.7858 24.7133 21.7331 24.8408 21.7384 24.972C21.7439 25.1033 21.8067 25.2265 21.912 25.312L26.3906 29.5559C26.4365 29.5983 26.4906 29.6319 26.5499 29.655L26.5498 29.6548Z" fill="black"/>
<motion.path  variants={pathVariants} d="M42.2576 6.16489C42.2576 6.16489 31.6702 -4.83087 18.7409 5.26522C5.81159 15.3613 5.91378 14.2619 4.48852 16.5611C3.06327 18.8602 1.43421 21.9591 1.02699 30.356C0.619777 38.7529 4.89688 40.2522 8.66229 42.1517C12.4277 44.0512 20.7768 48.4492 23.3221 49.2491C25.8674 50.049 31.1608 50.7483 33.2988 48.3494C35.4369 45.9505 41.511 42.085 44.7009 40.3523C54.8813 32.7551 51.8272 24.1583 50.6055 18.5603C49.6282 14.082 42.2576 6.16489 42.2576 6.16489Z" stroke="black"/>
</motion.svg>
   
  </motion.div>
</div>
  )
}
else {
    return null
}
}

export default Screen3