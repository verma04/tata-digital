import React from 'react'
import { motion  , useCycle } from 'framer-motion'
export default function List({second , setfirst , set2nd}) {

  
    const modal = {
        hidden: { y: "100vh", opacity: 1 },
        visible: { 
          y: 0, 
          opacity: 1,
          transition: { type: "spring", stiffness: 20 , duration:1}
        },
      }

      const modal1Reverse = {
        hidden: { y: "0", opacity: 1 },
        visible: { 
          y: "100vh", 
          opacity: 1,
          transition: { type: "spring", stiffness: 20 , duration:0.5}
        },
      }
    
      const modal2 = {
        hidden: { y: "-100vh", opacity: 1 },
        visible: { 
          y: 0, 
          opacity: 1,
          transition: { type: "spring", stiffness: 20 , duration:1}
        },
      }

      const modal2Reverse = {
        hidden: { y: 0, opacity: 1 },
        visible: { 
          y: "-100vh", 
          opacity: 1,
          transition: { type: "spring", stiffness: 20 , duration:0.5}
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

<motion.img



style={{width:"80%", height:'80%'  , left:"-3rem", top:"-3rem", zIndex:1000}}

src="/BussinessListing/1mg-fb 5 (1).png"

alt="logo"

  

  
  />

  <h2>TataNeu</h2>

  <span>Live the Neu</span>






</motion.div>



      

<motion.div 
variants={ second ?  modal2Reverse : modal2 }
initial="hidden"
animate="visible"
exit="hidden"

className='left-list' >









</motion.div>



  

  

   
    </>
  )
}
