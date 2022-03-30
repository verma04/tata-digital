import React, { useState } from 'react'
import globalStyles from './Style'
import { motion  , useCycle } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { useLongPress, LongPressDetectEvents } from "use-long-press";
import ProgressBar from "../ProgressBar/ProgressBar";
import Digital from './Digital';
import Image from 'next/image'
import Navbar from '../Navbar/Navbar';
import { isMobile, browserName  , isTablet , isDesktop , } from "react-device-detect";
import Mobile from './Mobile';


import Screen2 from '../Screen2';
import ProductExplore from '../Section3';
function Main() {
  const [explore, setExplore] = useState(false)
  const [product, setProduct] = useState(false)
  const img3x = []
  const img3y = []
  for(var i = 0; i <= 600; i++){
     img3x.push(i)
  }
  for(var i = 0; i <= 200; i++){
    img3y.push(i)
 }



 const img1x = []
 const img1y = []
 for(var i = 0; i<= 600; i++){
    img1x.push(-i)
 }
 for(var i = 0; i <= 300; i++){
   img1y.push(-i)
}


const img2x = []
const img2y = []
for(var i = 0; i<= 600; i++){
   img2x.push(i)
}
for(var i = 0; i <= 350; i++){
  img2y.push(-i)
}


const img4x = []
const img4y = []
for(var i = 0; i<= 530; i++){
   img4x.push(-i)
}
for(var i = 0; i <= 220; i++){
  img4y.push(i)
}

const img7x = []

for(var i = 0; i<= 400; i++){
   img7x.push(-i)
}


const img5x = []

for(var i = 0; i<= 200; i++){
   img5x.push(i)
}



const img6x = []
const img6y = []
for(var i = 0; i<=450; i++){
   img6x.push(i)
}

for(var i = 0; i<= 160; i++){
  img6y.push(i)
}






  const [animation, cycleAnimation] = useState(false);



  const [cousor, setcursor] = useState(false);


  React.useEffect(() => {
    
    setTimeout(() => {
        setcursor(true)
  
    }, 5000);

  }, [])
  

  const [first, setfirst] = useState(false)


  const [progress, setProgress] = useState(0);
  const [color, setColor] = useState('');



  const [enabled, setEnabled] = React.useState(true);
  const callback = React.useCallback(() => {
     setfirst(true)
  }, []);
  const bind = useLongPress(enabled ? callback : null, {
    onStart:  async () => { 
      
      
   


      

       await  setProgress(100)

   
    
       await cycleAnimation(true)  
  

    
    },
    onFinish:  async () => { 
  
      await setProgress(100)
    await  setColor('#3555FF');
 


    },
    
    onCancel: async () => { await 
      
      cycleAnimation(false)
      
      await setProgress(0)
     await setColor('#3555FF');
      
    },
    //onMove: () => console.log("Detected mouse or touch movement"),
    threshold: 4000,
    captureEvent: true,
    cancelOnMovement: false,
    detect: LongPressDetectEvents.BOTH
  });

  


  const img1 = {
    hidden: { x: 0, y:0  },
    visible: {
   
       
        x: img1x,
        y:img1y,
        transition: {
          x: {
            ease: [0.17, 0.67, 0.83, 0.67],
            duration: 4,
         type: "tween", stiffness: 20
          },
          y: {
            ease: [0.17, 0.67, 0.83, 0.67],
            duration: 4,
          
         type: "tween", stiffness: 20
          }
        }
      }


    
   
  }

  const img1Reverse = {
    hidden: { x: -600, y:-350  },
    visible: {
   
       
      x: [  0 , -10 , -20 , -30 , -40 , -50, -60, -70, -80, -90  , -100 , -110 , -120, -130, -140 ,-150 , -160, -170, -180 , -190,   -200, -210, -220 , -230, -240,   -250 , -260 , -270 , -280 , -290,  -300, -310 , -320, -330, -340, -350 , -360, -370, -380, -390,  -400 , -410, -420, -430, -440, -450 , -460 , -470, -480 , -490 ,-500, -510, -520 , -530 , -540, -550 , -560, -570, -580, -590 ,  -600 ].reverse(),
      y: [   10 , -10 , -20 , -30 , -40, -50 , -60 , -70 , -80 , -90 ,-100 , -110, -120, -130, -140,-150 , -160, -170 ,-180, -190, -200,  -210 , -220 , -230 , -240 , -250, -260 , -270 , -280 , -290, -300 , -310 , -320, -330, -340,  -350 ,   ].reverse(),
        transition: {
          x: {
            when: "afterChildren",
            duration: 4,
            ease: [0.17, 0.67, 0.83, 0.67],
            type: "tween", stiffness: 20,
                  },
          y: {
           
            duration: 4,
            ease: [0.17, 0.67, 0.83, 0.67],
          
            type: "tween", stiffness: 20,
        
          }
        }
      }


    
   
  }

  const img2 = {
    hidden: { x: 0, y:0  },
    visible: {
   
       
        x: img2x,
        y: img2y,
        transition: {
          x: {
            
            duration: 4,
            ease: [0.17, 0.67, 0.83, 0.67],
            type: "tween", stiffness: 20,
          },
          y: {
           
            duration: 4,
            ease: [0.17, 0.67, 0.83, 0.67],
          
            type: "tween", stiffness: 20,
          }
        }
      }


    
   
  }
  

  const img2Reverse = {
    hidden: { x: -600, y:-350  },
    visible: {
   
   
      x:[ 0 , 10 , 20 , 30 , 40 , 50 , 60 , 70 , 80 , 90 , 100, 110 , 120 , 130 , 140 , 150 , 160 , 170 , 180 , 190 ,  200 ,  210 , 220 , 230 , 240 , 250 , 260 , 270 ,280 , 290 ,  300 , 310 , 320 , 330 , 340 , 350 , 360 , 370 , 380 , 390 ,   400 , 410 , 420 , 430 , 440, 450 , 460 , 470 , 480 , 490 ,  500 , 510 , 520,  530 , 540 , 550 , 560 , 570 , 580, 590, 600 ].reverse(),
      y: [   0 , -10 , -20 , -30 , -40, -50 , -60 , -70 , -80 , -90 ,-100 , -110, -120, -130, -140,-150 , -160, -170 ,-180, -190, -200,  -210 , -220 , -230 , -240 , -250, -260 , -270 , -280 , -290, -300 , -310 , -320, -330, -340,  -350 ,   ].reverse(),
        transition: {
          x: {
            
            duration: 4,
            ease: [0.17, 0.67, 0.83, 0.67],
            type: "tween", stiffness: 20,
                    },
          y: {
           
            duration: 4,
            ease: [0.17, 0.67, 0.83, 0.67],
          
            type: "tween", stiffness: 20,
          
          }
        }
      }


    
   
  }


  const img3 = {
    hidden: { x: 0, y:0  },
    visible: {
   

        x: img3x,
        y: img3y,
        transition: {
          x: {
            
            duration: 4,
            ease: [0.17, 0.67, 0.83, 0.67],
            type: "tween", stiffness: 20,
          
          },
          y: {
           duration: 4,
            ease: [0.17, 0.67, 0.83, 0.67],
            type: "tween", stiffness: 20,
            
          }
        }
      }


    
   
  }

  const img3Reverse = {
    hidden: { x: 0, y:0  },
    visible: {
   
       
      x: [0 , 10 , 20, 30 , 40 , 50 , 60 , 70 , 80 , 90, 110 , 120 , 130 , 140 , 150 , 160 , 170 , 180 , 190 ,  200 ,  210 , 220 , 230 , 240 , 250 , 260 , 270 ,280 , 290 ,  300 , 310 , 320 , 330 , 340 , 350 , 360 , 370 , 380 , 390 ,   400 , 410 , 420 , 430 , 440, 450 , 460 , 470 , 480 , 490 ,  500 ,   510 , 520,  530 , 540 , 550 , 560 , 570 , 580, 590, 600 , 610 , 620 , 630, 640 , 650 , 660 , 670 , 680 , 690 , 700  ].reverse(),
      y: [  0 , 10 , 20 , 30 , 40, 50 , 60 , 70 , 80 , 90 ,100 , 110, 120, 130, 140,150 , 160, 170 ,180, 190, 200,  210 , 220 ,      ].reverse(),
        transition: {
          x: {
            
            duration: 4,
            ease: [0.17, 0.67, 0.83, 0.67],
            type: "tween", stiffness: 20,
          },
          y: {
           
            duration: 4,
            ease: [0.17, 0.67, 0.83, 0.67],
          
            type: "tween", stiffness: 20,
          }
        }
      }


    
   
  }
  

  const img4 = {
    hidden: { x: 0, y:0  },
    visible: {
   
       
        x: img4x,
        y: img4y,
        transition: {
          x: {
            
            duration: 4,
            ease: [0.17, 0.67, 0.83, 0.67],
            type: "tween", stiffness: 20,
          },
          y: {
           
            duration: 4,
            ease: [0.17, 0.67, 0.83, 0.67],
          
            type: "tween", stiffness: 20,
          }
        }
      }


    
   
  }

  const img4Reverse = {
    hidden: { x: 0, y:0  },
    visible: {
   
       
      x: [0 , -10 , -20 , -30 , -40 , -50, -60, -70, -80, -90  , -100 , -110 , -120, -130, -140 ,-150 , -160, -170, -180 , -190, -200, -210, -220 , -240, -250 , -260 , -270, -280, -290 , -300, -310 , -320, -330, -330, -340, -350 , -360, -370, -380, -390, -400 , -410, -420, -430, -440, -450 , -460 , -470, -480 , -490 ,-500, -510, -520 , -530  ].reverse(),
      y: [   0 , 10 , 20 , 30 , 40, 50 , 60 , 70 , 80 , 90 ,100 , 110, 120, 130, 140,150 , 160, 170 ,180, 190, 200,  210 , 220  ].reverse(),
        transition: {
          x: {
            
            duration: 4,
            ease: [0.17, 0.67, 0.83, 0.67],
            type: "tween", stiffness: 20,
          },
          y: {
           
            duration: 4,
            ease: [0.17, 0.67, 0.83, 0.67],
          
            type: "tween", stiffness: 20,
          }
        }
      }


    
   
  }


  const img7 = {
    hidden: { x: 0, y:0    },
    visible: {
   
      
     
      y: img7x,
     
        transition: {
          x: {

            
            
            duration: 4,
            type: "tween", stiffness: 20,
            delay:2,
          },
          y: {
           
            duration: 4,
            ease: [0.17, 0.67, 0.83, 0.67],
          
            type: "tween", stiffness: 20,
            delay:2,
          }
        }
      }


    
   
  }


  const img7Reverse = {
    hidden: { x: 0, y:0  },
    visible: {
      y:  [   0 , -10 , -20 , -30 , -40, -50 , -60 , -70 , -80 , -90 ,-100 , -110, -120, -130, -140,-150 , -160, -170 ,-180, -190, -200,  -210 , -220 , -230 , -240 , -250, -260 , -270 , -280 , -290, -300 , -310 , -320, -330, -340,  -350 , -360 , -370 , -380 , -390 , -400 , -410, -420, -430, -440, -450 , -460 , -470, -480 ,    ].reverse(),
       
        transition: {
          x: {
            
            duration: 4,
            type: "tween", stiffness: 20,
          },
          y: {
           
            duration: 4,
            ease: [0.17, 0.67, 0.83, 0.67],
          
            type: "tween", stiffness: 20,
          }
        }
      }


    
   
  }


  const img5 = {
    hidden: { x: 0, y:0    },
    visible: {
   
      
      y: img5x,
        transition: {
          x: {
            
            duration: 3,
            ease: [0.17, 0.67, 0.83, 0.67],
            type: "tween", stiffness: 20,
            delay:2,
          },
          y: {
           
            duration: 3,
            ease: [0.17, 0.67, 0.83, 0.67],
          
            type: "tween", stiffness: 20,
            delay:2,
          }
        }
      }


    
   
  }

  const img5Reverse = {
   
    visible: {
   
      y:[ 0 , 10 , 20 , 30 , 40, 50 , 60 , 70 , 80 , 90 ,100 , 110, 120, 130, 140,150 , 160, 170 ,180, 190, 200,  210 , 220     ].reverse(),
      
      
      
        transition: {
          x: {
            
            duration: 5,
            ease: [0.17, 0.67, 0.83, 0.67],
            type: "tween", stiffness: 20,
          },
          y: {
           
            duration: 4,
            ease: [0.17, 0.67, 0.83, 0.67],
          
            type: "tween", stiffness: 20,
          }
        }
      }


    
   
  }



  const img6 = {
    hidden: { x: 0, y:0   },
    visible: {
   
       x:img6x,
       y:img6y,
 
        transition: {
          x: {
            
            duration: 3.5,
            ease: [0.17, 0.67, 0.83, 0.67],
            type: "tween", stiffness: 20,
            delay:2
          },
          y: {
           
            duration: 3.5,
            ease: [0.17, 0.67, 0.83, 0.67],
          
            type: "tween", stiffness: 20,
            delay:2
          }
        }
      }


    
   
  }

  const img6Reverse = {
    hidden: { x: 0, y:0  },
    visible: {
   
      x: [ -10 , 0 , 10 , 20 , 30 , 40 , 50, 60 , 70 , 80 , 90 , 100,  110 , 120 , 130 , 140 , 150 , 160 , 170 , 180 , 190 ,  200 ,  210 , 220 , 230 , 240 , 250 , 260 , 270 ,280 , 290 ,  300 , 310 , 320 , 330 , 340 , 350 , 360 , 370 , 380 , 390 ,   400 , 410 , 420 , 430 , 440, 450 , ].reverse(),
        y: [  -10 , 0 , 10 , 20 , 30 , 40 , 50, 60 , 70 , 80 , 90 , 100,  110 , 120 , 130 , 140 , 150 , 160 , ].reverse(),
  
        transition: {
          x: {
            
            duration: 5,
            ease: [0.17, 0.67, 0.83, 0.67],
            type: "tween", stiffness: 20,
          },
          y: {
           
            duration: 5,
            ease: [0.17, 0.67, 0.83, 0.67],
          
            type: "tween", stiffness: 20,
          }
        }
      }


    
   
  }


  const img8 = {
    hidden: { x: 600, y:0  },
    visible: {
   
          
     
        transition: {
          x: {
            
            duration: 4,
            ease: [0.17, 0.67, 0.83, 0.67],
            type: "tween", stiffness: 20,
          },
          y: {
           
            duration: 4,
            ease: [0.17, 0.67, 0.83, 0.67],
          
            type: "tween", stiffness: 20,
          }
        }
      }


    
   
  }


  const img8Reverse = {
    hidden: { x: 600, y:0  },
    visible: {
   
          
     
        transition: {
          x: {
            
            duration: 4,
            ease: [0.17, 0.67, 0.83, 0.67],
            type: "tween", stiffness: 20,
          },
          y: {
           
            duration: 4,
            ease: [0.17, 0.67, 0.83, 0.67],
          
            type: "tween", stiffness: 20,
          }
        }
      }


    
   
  }


    const svgVariants = {
        hidden: { scale:0.1 },
        visible: { 
          scale:1,
          transition: {     duration : 7 }
        },
      }


      const svgVariantsImg = {
        hidden: { scale:0.1 },
        visible: { 
          scale:1,
          transition: {     duration : 5 }
        },
      }

      const svgVariantsImg2 = {
        hidden: { scale:1 },
        visible: { 
          scale:0.1,
          transition: {     duration : 5 }
        },
      }


      const svgVariantsDelay = {
        hidden: { scale:-10 , opacity:-10  ,
          
        },
        visible: { 
          scale:1,
          opacity:1,
          transition: {  delay:4,   duration : 7 }
        },
      }
      
      const svgVariantsDelay2 = {
        hidden: { scale:0.1 },
        visible: { 
          scale:1,
          transition: {   delay:4,   duration : 7 }
        },
      }

      const backImgVariants = {
        hidden: { scale:0.1 , opacity:0 },
        visible: { 
          scale:1.4,
          opacity:1,
          transition: {   duration : 3 , delay:3 }
        },
      }


      const backImgVariantsReverse = {
     
        visible: { 
          scale:0.1,
          opacity:0,
          transition: {   duration : 1 ,}
        },
      }
      const containerVariants = {

        hidden: { scale:0.1 , opacity:0 },
        visible: { 
          scale:1,
          opacity:1,
          transition: {   duration : 5 , delay:4 }
        },
      
        
      };

      const containerVariantsReverse = {

        
        visible: { 
          scale:0.1 , opacity:0,
          transition: {   duration : 2 }
        },
      
        
      };


      const FadeText = {
        visible: { 
          scale:0.1 , opacity:0,
          transition: {   duration : 2 }
        },
      
        
      };

      const spinner = {

        
        visible: { 
          scale:2 , opacity:[1, 0.9 , 0.8 , 0.7 , 0.6 ,0.5 , 0.4 , 0.3  , 0.2 , 0.1 , 0],
          transition: {   duration : 3.5 }
        },
      
        
      };


      const spinner2 = {

        
        visible: { 
          scale:2 , opacity:[1, 0.9 , 0.8 , 0.7 , 0.6 ,0.5 , 0.4 , 0.3  , 0.2 , 0.1 , 0],
          transition: {   duration : 3.5 }
        },
      
        
      };

      const spinner3 = {

        
        visible: { 
          scale:0.5 , opacity:[1, 0.9 , 0.8 , 0.7 , 0.6 ,0.5 , 0.4 , 0.3  , 0.2 , 0.1 , 0],
          transition: {   duration : 3.5 }
        },
      
        
      };
      const containerVariants2 = {

        hidden: { scale:0.1 , opacity:0 },
        visible: { 
          scale:1,
          opacity:1,
          transition: {   duration : 5 , delay:4 }
        },
      
      
        
      };
      const containerVariants2Reverse = {

       
        visible: { 
          scale:0.1 , opacity:0 ,
          transition: {delay:1 }
        },
      
      
        
      };
    
      const svgVariants1 = {
        hidden: { scale:1 },
        visible: { 
          scale:0.1,
          transition: {     duration : 7 }
        },
      }
      const navbarVariants = {
        hidden: { scale:0 , y:-100 },
        visible: { 
          scale:1,
          y:0,
          transition: {     duration : 1 , delay:4 }
        },
      }
  return (
    <AnimatePresence exitBeforeEnter>



 

    {first && !explore ? 
    (
      <>
         <style jsx global>
    {globalStyles}

    </style>
    <Digital  setfirst={setfirst}  setExplore={setExplore} />

      </>
    )
    :
    (
    null)
}


{!first && !explore && !product ? (

    <>
     <style jsx global>
    {globalStyles}

    </style>
  <motion.div   variants={navbarVariants}

initial="hidden"
animate="visible"  >
<Navbar/>
</motion.div   >

      <div className='container' >

    
      <div  className='backImg'>
      <motion.img



variants={  animation ?  backImgVariantsReverse  :    backImgVariants}
initial="hidden"
animate="visible"
   src="/assets/backImg.png"
   alt="Picture of the author"
   
  style={{width:"100%", height:"100%"}}
 />


      </div>
      
      <div  {...bind} className='imgArray' style={{position:"relative"}}  >

     
 

   

<motion.div    className='spinner' 

variants={  animation ?  spinner :    containerVariants}

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

}}
 src="/spinner/Ellipse.png"

 alt="logo"

   
   />






</motion.div>

<motion.div    className='spinner' 

variants={  animation ?  spinner2  :    containerVariants}

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

}}
 src="/spinner/Ellipse2.png"

 alt="logo"

   
   />

   






</motion.div>


<motion.div    className='spinner' 

variants={  animation ?  spinner3  :    containerVariants}

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

}}
 src="/spinner/Ellipse3.png"

 alt="logo"

   
   />

   






</motion.div>
          <div className='text' >



<motion.div    className='tata-logo'  >  
<motion.img

variants={  animation ?  containerVariants2Reverse  :    containerVariants2}

initial="hidden"
animate="visible"

src="/assets/logo_TataDigital.png"

alt="logo"

  

  
  />
</motion.div>





  


            <motion.h2  
              
   variants={  animation ?  FadeText  :    backImgVariants}
initial="hidden"
animate="visible"
             className="head"
            > The  future 

            
           </motion.h2>

<motion.h2  
              
                 variants={  animation ?  FadeText  :    backImgVariants}
              initial="hidden"
           animate="visible"
                           className="head"
                          > is restless </motion.h2>

          </div>
   

  

          <ProgressBar 
 
 progress={progress}
 size={200}
 strokeWidth={7}
 circleOneStroke=''

 circleTwoStroke={color}

 
/>


<div className='set' >
          <motion.div
            variants={ animation ?  img1Reverse : img1}
             initial="hidden"
             animate="visible"
              
          id="img"  className="img1">
   <motion.div

 
variants={ animation ?  svgVariants1 : svgVariants}   style={{width:"15rem", height:'15rem'}} className='div' >
<motion.svg version="1.1" xmlns="http://www.w3.org/2000/svg" 
viewBox="0 0 500 500" width="100%" id="blobSvg" filter="blur(0px)" 
style={{opacity: 1}}

transform="rotate(5)">
  
  <motion.image x="0" y="0"
  
  width="100%" height="100%" clipPath="url(#shape)" 
href="/assets/img1.png" 
preserveAspectRatio="none"></motion.image>                        <defs>                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">                            <stop offset="0%" style={{stopColor: "rgb(238, 205, 163)"}}></stop>                            <stop offset="100%" style={{stopColor: "rgb(239, 98, 159)"}}></stop>                        </linearGradient>                        </defs>                                            <clipPath id="shape"><path id="blob" fill="url(#gradient)">                            <animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"></animate>                        </path></clipPath></motion.svg>
 
 </motion.div>


              </motion.div>

          <motion.div
                variants={ animation ?  img2Reverse : img2}
             initial="hidden"
             animate="visible" id="img" className="img2">
      
      <motion.div

 
variants={ animation ?  svgVariantsImg2 : svgVariantsImg}   style={{width:"20rem", height:'15rem'}} className='div' >
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" 
viewBox="0 0 500 500" width="100%" id="blobSvg" filter="blur(0px)" 
style={{opacity: 1}}

transform="rotate(5)"><image x="0" y="0" width="100%" height="100%" clipPath="url(#shape)" 
href="/assets/img2.png" 
preserveAspectRatio="none"></image>                        <defs>                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">                            <stop offset="0%" style={{stopColor: "rgb(238, 205, 163)"}}></stop>                            <stop offset="100%" style={{stopColor: "rgb(239, 98, 159)"}}></stop>                        </linearGradient>                        </defs>                                            <clipPath id="shape"><path id="blob" fill="url(#gradient)">                            <animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"></animate>                        </path></clipPath></svg>
 
 </motion.div>

              </motion.div>

           <motion.div
             variants={ animation ?  img3Reverse : img3}
             initial="hidden"
             animate="visible"  id="img"  className="img3">
 <motion.div

 
variants={ animation ?  svgVariants1 : svgVariants}   style={{width:"12rem", height:'12rem'}} className='div' >
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" 
viewBox="0 0 500 500" width="100%" id="blobSvg" filter="blur(0px)" 
style={{opacity: 1}}

transform="rotate(5)"><image x="0" y="0" width="100%" height="100%" clipPath="url(#shape)" 
href="/assets/img3.png" 
preserveAspectRatio="none"></image>                        <defs>                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">                            <stop offset="0%" style={{stopColor: "rgb(238, 205, 163)"}}></stop>                            <stop offset="100%" style={{stopColor: "rgb(239, 98, 159)"}}></stop>                        </linearGradient>                        </defs>                                            <clipPath id="shape"><path id="blob" fill="url(#gradient)">                            <animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"></animate>                        </path></clipPath></svg>
 
 </motion.div>
              </motion.div>
          
            <motion.div
           variants={ animation ?  img4Reverse : img4}
             initial="hidden"
             animate="visible" id="img"  className="img4">
              
              <motion.div

 
variants={ animation ?  svgVariants1 : svgVariants}   style={{width:"8rem", height:'8rem'}} className='div' >
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" 
viewBox="0 0 500 500" width="100%" id="blobSvg" filter="blur(0px)" 
style={{opacity: 1}}

transform="rotate(5)"><image x="0" y="0" width="100%" height="100%" clipPath="url(#shape)" 
href="/assets/img4.png" 
preserveAspectRatio="none"></image>                        <defs>                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">                            <stop offset="0%" style={{stopColor: "rgb(238, 205, 163)"}}></stop>                            <stop offset="100%" style={{stopColor: "rgb(239, 98, 159)"}}></stop>                        </linearGradient>                        </defs>                                            <clipPath id="shape"><path id="blob" fill="url(#gradient)">                            <animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"></animate>                        </path></clipPath></svg>
 
 </motion.div>
              </motion.div>

              <motion.div
           variants={ animation ?  img5Reverse : img5}
             initial="hidden"
             animate="visible" id="img" className="img5">
              
              <motion.div

 
variants={ animation ?  svgVariantsDelay : svgVariantsDelay2}   style={{width:"8rem", height:'rem'}} className='div' >
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" 
viewBox="0 0 500 500" width="100%" id="blobSvg" filter="blur(0px)" 
style={{opacity: 1}}

transform="rotate(5)"><image x="0" y="0" width="100%" height="100%" clipPath="url(#shape)" 
href="/assets/img5.png" 
preserveAspectRatio="none"></image>                        <defs>                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">                            <stop offset="0%" style={{stopColor: "rgb(238, 205, 163)"}}></stop>                            <stop offset="100%" style={{stopColor: "rgb(239, 98, 159)"}}></stop>                        </linearGradient>                        </defs>                                            <clipPath id="shape"><path id="blob" fill="url(#gradient)">                            <animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"></animate>                        </path></clipPath></svg>
 
 </motion.div>
                  </motion.div>

                  <motion.div
              variants={ animation ?  img6Reverse : img6}
             initial="hidden"
             animate="visible"
                     id="img"  className="img6">
              
              <motion.div

 
variants={ animation ?  svgVariantsDelay : svgVariantsDelay2}   style={{width:"4rem", height:'4rem'}} className='div' >
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" 
viewBox="0 0 500 500" width="100%" id="blobSvg" filter="blur(0px)" 
style={{opacity: 1}}

transform="rotate(5)"><image x="0" y="0" width="100%" height="100%" clipPath="url(#shape)" 
href="/assets/img3.png" 
preserveAspectRatio="none"></image>                        <defs>                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">                            <stop offset="0%" style={{stopColor: "rgb(238, 205, 163)"}}></stop>                            <stop offset="100%" style={{stopColor: "rgb(239, 98, 159)"}}></stop>                        </linearGradient>                        </defs>                                            <clipPath id="shape"><path id="blob" fill="url(#gradient)">                            <animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"></animate>                        </path></clipPath></svg>
 
 </motion.div>
                  </motion.div>

                  <motion.div
          variants={ animation ?  img7Reverse : img7}
             initial="hidden"
             animate="visible"  id="img"  className="img7">
              
              <motion.div

 
variants={ animation ?  svgVariantsDelay : svgVariantsDelay2}   style={{width:"8rem", height:'8rem'}} className='div' >
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" 
viewBox="0 0 500 500" width="100%" id="blobSvg" filter="blur(0px)" 
style={{opacity: 1}}

transform="rotate(5)"><image x="0" y="0" width="100%" height="100%" clipPath="url(#shape)" 
href="/assets/img7.png" 
preserveAspectRatio="none"></image>                        <defs>                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">                            <stop offset="0%" style={{stopColor: "rgb(238, 205, 163)"}}></stop>                            <stop offset="100%" style={{stopColor: "rgb(239, 98, 159)"}}></stop>                        </linearGradient>                        </defs>                                            <clipPath id="shape"><path id="blob" fill="url(#gradient)">                            <animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"></animate>                        </path></clipPath></svg>
 
 </motion.div>
                  </motion.div>
                  </div>
         
          </div>

        
      
      </div>
  </>
    
)
:
null 
}
  
{explore  ?
(
<Screen2  setProduct={setProduct}   setExplore={setExplore}  />
)
:
null


}

{product   ?
(
<ProductExplore/>
)
:
null


}




    </AnimatePresence>
  )
}

export default Main