import React, { useState } from 'react'
import globalStyles from './Style'
import Loader from './Loader'
import { Button, Flex, Progress } from "@chakra-ui/react";
import Image from 'next/image'
import lottie from "lottie-web";
import reactLogo from "../wobble_3.json"
import ProgressBar from "../ProgressBar/ProgressBar";
import Cursor from '../coutomCursor/cursor'
import { motion  , useCycle } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { useLongPress, LongPressDetectEvents } from "use-long-press";
export default function Landing() {

  const [progress, setProgress] = useState(0);
  const [color, setColor] = useState('');
  const colorArray = ['#7ea9e1'];

  const [enabled, setEnabled] = React.useState(true);
  const callback = React.useCallback(() => {

  }, []);
  const bind = useLongPress(enabled ? callback : null, {
    onStart:  async () => { await cycleAnimation()  


      

       await  setProgress(100 )

   
 
  

    
    },
    onFinish:  async () => { await setfirst(true),
  
      await setProgress(100)
    await  setColor('#000000');

    },
    onCancel: async () => { await cycleAnimation()
      
      await setProgress(0)
     await setColor('#000000');
      
    },
    //onMove: () => console.log("Detected mouse or touch movement"),
    threshold: 4000,
    captureEvent: true,
    cancelOnMovement: false,
    detect: LongPressDetectEvents.BOTH
  });

  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#react-logo"),
      animationData: reactLogo
    });
  }, []);


  const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");


  const [first, setfirst] = React.useState(false)
  console.log(animation)

  const data = {
    animationOne: {
   
       
        x: [-100 , -200 , -300 , -400 ,-500 , -600 ],
        y: [ -100 , -200 , -300 , -350 ,   ],
        transition: {
          x: {
            
            duration: 3,
            type: 'spring',
          },
          y: {
           
            duration: 3,
          
            type: 'spring',
          }
        }



    },
    animationTwo: {
     
       
        x: [-600 , -500 , -400 , -300 ,-200 , -100 ],
        y: [ -250 , -300 , -200 , -100 ,   ],
        transition: {
          x: {
            
            duration: 3,
            type: 'spring',
          },
          y: {
           
            duration: 3,
          
            type: 'spring',
          }
        
      },
    }
  }
  

  const loaderVariants2 = {
    hidden: { x: 0, y:0  },
    visible: {
     
      x: [100 , 150 , 200 , 250 ,300 , 350    ],
      y: [ 100 , 200 , 250 , 300 ,400   ],
      transition: {
        x: {
        
          duration: 3,
          type: 'spring',
        },
        y: {
         
          duration: 3,
          ease: 'easeOut',
          type: 'spring',
        }
      }
    },
    
 
  };

  const loaderVariants3 = {
    hidden: { x: 0, y:0  },
    visible: {
     
      x: [100 , 200 , 300 , 400 ,500 , 600 , 700 , -500  ],
      y: [ 100 , 200 , 500 , 350 ,400  , ],
      transition: {
        x: {
          yoyo: Infinity,
          duration: 5,
          type: 'spring',
        },
        y: {
          yoyo: Infinity,
          duration: 5,
          ease: 'easeOut',
          type: 'spring',
        }
      }
    },
    
 
  };

  const svgVariants = {
    hidden: { scale:0.1 },
    visible: { 
      scale:1,
      transition: {     duration : 5 }
    },
  }


  const svgVariants1 = {
    hidden: { scale:1 },
    visible: { 
      scale:0.1,
      transition: {     duration : 5 }
    },
  }

  const containerVariants = {

    hidden: { 
    opacity: 0, 
    x: '100vw' 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { type: 'spring', delay: 3 }
  },
  exit: {
    x: "-100vh",
    transition: { ease: 'easeInOut' }
  }
  
    
  };

  const containerVariants2 = {

    hidden: { 
    opacity: 0, 
    x: '100vw' 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { type: 'spring', delay: 5 }
  },
  exit: {
    x: "-100vh",
    transition: { ease: 'easeInOut' }
  }
  
    
  };

 
  

  const img1 = {

    hidden: { 
    opacity: 0, 
    x: '-100' 
  },
  visible: { 
    opacity: 1, 
    x: 900,
    transition: { type: 'spring', delay: 1 }
  },
  exit: {
    x: "-100vh",
    transition: { ease: 'easeInOut' }
  }
  
    
  };

  const img2 = {

    hidden: { 
    opacity: 0, 
    x: '-100' 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { type: 'spring', delay: 1 }
  },
  exit: {
    x: "-100vh",
    transition: { ease: 'easeInOut' }
  }
  
    
  };
  const img3 = {

    hidden: { 
    opacity: 0, 
    x: '-100' 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { type: 'spring', delay: 1 }
  },
  exit: {
    x: "-100vh",
    transition: { ease: 'easeInOut' }
  }
  
    
  };
  const img4 = {

    hidden: { 
    opacity: 0, 
    x: '-100' 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { type: 'spring', delay: 1 }
  },
  exit: {
    x: "-100vh",
    transition: { ease: 'easeInOut' }
  }
  
    
  };
  const img5 = {

    hidden: { 
    opacity: 0, 
    x: '-100' 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { type: 'spring', delay: 1 }
  },
  exit: {
    x: "-100vh",
    transition: { ease: 'easeInOut' }
  }
  
    
  };
  return (
    <>

    <div

      
  
    >
     <AnimatePresence>



      <style jsx global>
      {globalStyles}

      </style>
      <ProgressBar 
          progress={progress}
          size={200}
          strokeWidth={15}
          circleOneStroke='#d9edfe'
          circleTwoStroke={color}
        />

      {first ?
      (
        <div style={{width:"100%", height:'100vh' , backgroundColor:"black" , display:'flex', justifyContent:"center", alignItems:"center"}} >
  
<h1 style={{color:"white"}} >Digital is today</h1>
        </div>
      )
      :
      (
<div className="page-layout" >
 
   

 <motion.div
 className='img'
 variants={data}
 animate={animation}
    >  
 <motion.img
   
    
   
    variants={animation === "animationOne" ? svgVariants : svgVariants1   }
    initial="hidden"
 animate="visible"
       src="/assets/Mask Group-3.svg"
       alt="Picture of the author"
       width={200}
       height={200}
     />
 </motion.div>
 
 
 
 <motion.div
  variants={loaderVariants2}
 initial="hidden"
 animate="visible"
 className='img' >  
 <motion.img
    variants={svgVariants}
 
       src="/assets/Mask Group-3.svg"
       alt="Picture of the author"
       width={200}
       height={200}
     />
 
 
 
 
 
 </motion.div>
 
 
    
 
 
 
 
 
 
 
 
 <div    className='heading'   >
 
 
 
 
 
 
  <motion.div    className='spinner' 
  
 
 variants={containerVariants}
 initial="hidden"
 animate="visible"
  
  >
  
  <motion.img
 
 
 
 animate={{
   rotate: [0, 90, 180, 270 , 360],
 
 
 }}
 transition={{
   flip: Infinity,
   duration: 60,
   ease: "easeInOut",
 }}
   src="/assets/circle.png"
   layout="fill" 
   alt="logo"
   objectFit="contain"   
     
  
     
     />
 
 </motion.div>
 
 
  
 
 <motion.div
 

 variants={containerVariants2}
 initial="hidden"
 animate="visible"
 className='object'>
 <div    className='tata-logo'  >  
 <motion.img
 
 
   src="/assets/logo_TataDigital.png"
   layout="fill" 
   alt="logo"
   objectFit="contain"   
     
  
     
     />
 </div>
 
 
 
 
 
     </motion.div>
 
     <motion.ul
     variants={containerVariants2}
     initial="hidden"
     animate="visible"
     
     style={{position:"absolute" , bottom:20 , display:"flex", justifyContent:"center", alignItems:"center"  , flexDirection:"column", zIndex:1000}}>
   
     <li className='list' >Make every  </li>
 
     <div {...bind} className='button' >
  
  Click & Hold
 
 
     </div> 

     </motion.ul>


   
     </div>
     </div>
      )

      }
  
    
    </AnimatePresence>

    </div>
 
    </>
  )
}
