import React from 'react'
import SwipeableButton  from '../Button/SwipperButton'
import globalStyles from './Style'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Navbar from '../Navbar/Navbar'
import SplitText from './SplitText'
import { useMediaQuery } from '@chakra-ui/react'
import { isMobile, browserName , isTablet , isDesktop } from "react-device-detect";


function Screen2({setfirst , setEffect}) {


  

  const [isLargerThan1280] = useMediaQuery('(min-width: 1281px)')
  const [isSmallterThan767] = useMediaQuery('(max-width: 767px)')
  const [isIpad] = useMediaQuery('(min-width: 768px) and (max-width: 1023px)')
  const [isIpadPro] = useMediaQuery('(min-width:  1024px) and (max-width: 1280px)')

  const router =    useRouter()
     const onSuccess = async ()=> {
    
      await setEffect(true)
    setTimeout(() => {
       setfirst(true)
    }, 1000);
      
  }

  const img6x = []
const img6y = []
for(var i = 0; i<=1500; i++){
   img6x.push(-i)
}




  const img6 = {
    hidden: { x: 0, y:0   },
    visible: {
   
       x:img6x,
    
 
        transition: {
          x: {
            
            duration: 4,
            ease: [0.17, 0.67, 0.83, 0.67],
            type: "tween", stiffness: 20,
        
          },
          
        }
      }


    
   
  }

  const img6Rev= {
    hidden: { x: 0, y:0   },
    visible: {
   
       x:0,
       y:0,
 
        transition: {
          x: {
            
            duration: 1,
            
         
          },
          y: {
           
            duration: 3,
            
          
          }
        }
      }


    
   
  }

  const svgVariantsDelay = {
    hidden: { opacity:1 },
    visible: {
   
      opacity:0,
    
      transition: {
        duration:0.2
      }
       
      }
  }
  

  const svgVariantsDelay2 = {
    hidden: { opacity:1 },
    visible: {
   
      opacity:0,
    
      transition: {
        delay:1.5 , duration:0.2
      }
       
      }
  }
  

  const svgVariantsDelay3 = {
    hidden: { opacity:1 },
    visible: {
   
      opacity:0,
    
      transition: {
        delay:3  , duration:0.2
      }
       
      }
  }

  const svgVariants = {
    hidden: { opacity:1 ,
      
    },
    visible: { 
   
      opacity:1,
      transition: {    duration : 0.2 }
    },
  }
  

  const [Drag, setDrag] = React.useState(false)
  if (typeof window !== "undefined") {

    const isTouchDevice = 'ontouchstart' in document.documentElement

  return (
    <div className='container'>
     
             <style jsx global>
    {globalStyles}

    </style>

    <div className='container-left' >
{isSmallterThan767 || isIpad ? 
(
<h2  id="fade">

With a smartphone in every hand, the world is online more than ever. It is restless for tomorrow to be fulfilled today.

</h2>
):
(
null
)

}

{ isLargerThan1280 || isIpadPro  ? 
(
<h2 id="fade">

More people than ever are finding what they need online. At Tata, we have always understood the needs of our customers. It was time to connect our understanding and our tech-spertise with the demands of our customers while upholding our values of ethics, pioneering spirit, and trust

</h2>
):
(
null
)

}



    </div>

    <div className='container-right' >

    <div className='container-right-top' >

        <motion.div
          variants={ Drag ?  svgVariantsDelay : svgVariants}
          initial="hidden"
     animate="visible"
      
        className='img-wrapper' >

<motion.img


variants={ Drag ?  img6 : img6Rev}
initial="hidden"
animate="visible"
 

                             src='/Vector.png'    
                             
                          style={{position:"absolute" , width:"70%" , height:'60%'}} 
                             alt="logo"  ></motion.img>
           <motion.svg

             variants={ Drag ?  img6 : img6Rev}
             initial="hidden"
             animate="visible"
           version="1.1" xmlns="http://www.w3.org/2000/svg" 
viewBox="0 0 500 500" width="75%" id="blobSvg" filter="blur(0px)" 
style={{opacity: 1}}

transform="rotate(5)">
  
  <motion.image x="0" y="0"
  
  width="100%" height="100%" clipPath="url(#shape)" 
href="/phone3.png" 
preserveAspectRatio="none"></motion.image>                        <defs>                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">                            <stop offset="0%" style={{stopColor: "rgb(238, 205, 163)"}}></stop>                            <stop offset="100%" style={{stopColor: "rgb(239, 98, 159)"}}></stop>                        </linearGradient>                        </defs>                                            <clipPath id="shape"><path id="blob" fill="url(#gradient)">                            <animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"></animate>                        </path></clipPath></motion.svg>
 

        </motion.div>


        <motion.div
          variants={ Drag ?  svgVariantsDelay2 : svgVariants}
          initial="hidden"
     animate="visible"
        className='img-wrapper' >

<motion.img
   
variants={ Drag ?  img6 : img6Rev}
initial="hidden"
animate="visible"
                             src='/Vector-1.png'    
                             
                          style={{position:"absolute" , width:"70%" , height:'60%'}} 
                             alt="logo"  ></motion.img>
      <motion.svg
      
      
variants={ Drag ?  img6 : img6Rev}
initial="hidden"
animate="visible"
      version="1.1" xmlns="http://www.w3.org/2000/svg" 
viewBox="0 0 500 500" width="70%" id="blobSvg" filter="blur(0px)" 
style={{opacity: 1}}

transform="rotate(5)">
  
  <motion.image x="0" y="0"
  
  width="100%" height="100%" clipPath="url(#shape)" 
href="/meesho2.png" 
preserveAspectRatio="none"></motion.image>                        <defs>                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">                            <stop offset="0%" style={{stopColor: "rgb(238, 205, 163)"}}></stop>                            <stop offset="100%" style={{stopColor: "rgb(239, 98, 159)"}}></stop>                        </linearGradient>                        </defs>                                            <clipPath id="shape"><path id="blob" fill="url(#gradient)">                            <animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"></animate>                        </path></clipPath></motion.svg>
 


        </motion.div>

        

        <motion.div
          variants={ Drag ?  svgVariantsDelay3 : svgVariants}
  
        initial="hidden"
        animate="visible"
        className='img-wrapper' >
          <motion.img
   variants={ Drag ?  img6 : img6Rev}
   initial="hidden"
   animate="visible"

                             src='/Vector.png'    
                             
                          style={{position:"absolute" , width:"70%" , height:'60%'}} 
                             alt="logo"  ></motion.img>
         <motion.svg
           variants={ Drag ?  img6 : img6Rev}
           initial="hidden"
           animate="visible"
         
         version="1.1" xmlns="http://www.w3.org/2000/svg" 
viewBox="0 0 500 500" width="70%" id="blobSvg" filter="blur(0px)" 
style={{opacity: 1}}

transform="rotate(5)">
  
  <motion.image x="0" y="0"
  
  width="100%" height="100%" clipPath="url(#shape)" 
href="/phone4.png" 
preserveAspectRatio="none"></motion.image>                        <defs>                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">                            <stop offset="0%" style={{stopColor: "rgb(238, 205, 163)"}}></stop>                            <stop offset="100%" style={{stopColor: "rgb(239, 98, 159)"}}></stop>                        </linearGradient>                        </defs>                                            <clipPath id="shape"><path id="blob" fill="url(#gradient)">                            <animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"></animate>                        </path></clipPath></motion.svg>
 
        </motion.div>
        
        <motion.div
        variants={ Drag ?  img6 : img6Rev}
        initial="hidden"
        animate="visible"
        className='img-wrapper' >
          <motion.img
   animate={{
    rotate: 360 
   
   
   }}
   transition={{
    flip: Infinity,
    duration: 120,
    ease: "easeInOut",
   }}

                             src='/Vector-1.png'    
                             
                          style={{position:"absolute" , width:"70%" , height:'60%'}} 
                             alt="logo"  ></motion.img>

<motion.svg version="1.1" xmlns="http://www.w3.org/2000/svg" 
viewBox="0 0 500 500" width="70%" id="blobSvg" filter="blur(0px)" 
style={{opacity: 1}}

transform="rotate(5)">
  
  <motion.image x="0" y="0"
  
  width="100%" height="100%" clipPath="url(#shape)" 
href="/phoe1.png" 
preserveAspectRatio="none"></motion.image>                        <defs>                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">                            <stop offset="0%" style={{stopColor: "rgb(238, 205, 163)"}}></stop>                            <stop offset="100%" style={{stopColor: "rgb(239, 98, 159)"}}></stop>                        </linearGradient>                        </defs>                                            <clipPath id="shape"><path id="blob" fill="url(#gradient)">                            <animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"></animate>                        </path></clipPath></motion.svg>
 
        </motion.div>
  
</div>
    <SwipeableButton onSuccess={onSuccess} color='#6ab04c' text='SLIDE TO UNLOCK' isTouchDevice={isTouchDevice}  drag={Drag}  setDrag={setDrag} /> 
</div>


   
  
</div>
  )
}
else {
    return null
}
}

export default Screen2