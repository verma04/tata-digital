import React from 'react'
import { motion  , useCycle } from 'framer-motion'
export default function List3({second , setfirst , set2nd}) {

  
    const modal = {
        hidden: { y: "100vh", opacity: 1 },
        visible: { 
          y: 0, 
          opacity: 1,
          transition: { type: "spring", stiffness: 20 }
        },
      }

      const modal1Reverse = {
        hidden: { y: "0", opacity: 1 },
        visible: { 
          y: "100vh", 
          opacity: 1,
          transition: { type: "spring", stiffness: 20 }
        },
      }
    
      const modal2 = {
        hidden: { y: "-100vh", opacity: 1  },
        visible: { 
          y: 0, 
          opacity: 1,
          transition: { type: "spring", stiffness: 20 }
        },
      }

      const modal2Reverse = {
        hidden: { y: 0, opacity: 1  },
        visible: { 
          y: "-100vh", 
          opacity: 1,
          transition: { type: "spring", stiffness: 20 }
        },
      }

    const svgVariants = {
        hidden: { rotate: -180 },
        visible: { 
          rotate: 0,
          transition: { duration : 1 }
        },
      }
      const svgVariantsImg2 = {
        hidden: { scale:1 },
        visible: { 
          scale:0.1,
    
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


<motion.div 
variants={ second ?  modal1Reverse : modal }
initial="hidden"
animate="visible"
exit="hidden"

className='left-list' >



<motion.svg version="1.1" xmlns="http://www.w3.org/2000/svg" 
viewBox="0 0 500 500" width="100%" id="blobSvg" filter="blur(0px)" 
style={{opacity: 1}}

transform="rotate(5)">
  
  <motion.image x="0" y="0"
  
  width="100%" height="100%" clipPath="url(#shape)" 
href="/Tata1mg/MaskGroup.png" 
preserveAspectRatio="none"></motion.image>                        <defs>                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">                            <stop offset="0%" style={{stopColor: "rgb(238, 205, 163)"}}></stop>                            <stop offset="100%" style={{stopColor: "rgb(239, 98, 159)"}}></stop>                        </linearGradient>                        </defs>                                            <clipPath id="shape"><path id="blob" fill="url(#gradient)">                            <animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"></animate>                        </path></clipPath></motion.svg>
 

 <motion.div    className='bg-banner'  >  
<motion.img



initial="hidden"
animate="visible"
exit="hidden"

    style={{width:"70%", height:"70% "  }}



src="/TataCLiq/Vector.png"

alt="logo"

  

  
  />
</motion.div>
<div className='view-button' >

<li>View</li>
<li>Product</li>
</div>
  <h2>Tata 1mg</h2>

  <span>Powering good life</span>






</motion.div>

<motion.div 
variants={ second ?  modal2Reverse : modal2 }
initial="hidden"
animate="visible"
exit="hidden"

className='left-list' >


<motion.svg version="1.1" xmlns="http://www.w3.org/2000/svg" 
viewBox="0 0 500 500" width="100%" id="blobSvg" filter="blur(0px)" 
style={{opacity: 1}}

transform="rotate(5)">
  
  <motion.image x="0" y="0"
  
  width="100%" height="100%" clipPath="url(#shape)" 
href="/TataCLiq/MaskGroup.png" 
preserveAspectRatio="none"></motion.image>                        <defs>                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">                            <stop offset="0%" style={{stopColor: "rgb(238, 205, 163)"}}></stop>                            <stop offset="100%" style={{stopColor: "rgb(239, 98, 159)"}}></stop>                        </linearGradient>                        </defs>                                            <clipPath id="shape"><path id="blob" fill="url(#gradient)">                            <animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"></animate>                        </path></clipPath></motion.svg>
  <motion.div    className='bg-banner'  >  
<motion.img



initial="hidden"
animate="visible"
exit="hidden"

    style={{width:"70%", height:"70% "  }}



src="/TataCLiq/Vector.png"

alt="logo"

  

  
  />
</motion.div>
<div className='view-button' >

<li>View</li>
<li>Product</li>
</div>
<h2>Tata CliQ</h2>

  <span>Powering good life</span>






</motion.div>
      
   

  

  

   
    </>
  )
}
