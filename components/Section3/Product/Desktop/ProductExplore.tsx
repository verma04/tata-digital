import React, { useState } from "react";
import { motion  , useCycle } from 'framer-motion';
import TataNeu from "./new";
import globalStyles from '../Style'
import { useRouter } from "next/router";
function ProductExplore({setfirst , setEffect}) {

    const router = useRouter()
    const [inHover, setHover] = useState("tataneu");
  
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
    <div>
      

    <div  className='container ' >

    {(() => {
        if (inHover === "tataneu") {
          return (
            <TataNeu/>
          )
        } 
      })()}

          
          <div className='left' >
          <div  className='category' >
   

   <h3>Super App</h3>

   <div  id={inHover === "tataneu" ? "active" : "noneActive" }   onMouseLeave={() => setHover('tataneu')}  onMouseEnter={() => setHover('tataneu')} className='list' >
       
     <h2>Tata Neu</h2>

     <span>Powering good life</span>


<div style={{ cursor:"pointer"}}  onClick={async ( )=> {
   await setEffect(true)
   setTimeout(() => {
      setfirst(true)
   }, 1000);

} } className="svg" >
     <motion.svg variants={svgVariants}
          initial="hidden"
          animate="visible"   width="51" height="53" viewBox="0 0 51 53" fill="none" xmlns="http://www.w3.org/2000/svg">
<motion.path   d="M29.6548 26.4492C29.6903 26.3581 29.6995 26.2579 29.6809 26.1614C29.6625 26.0649 29.6173 25.9763 29.5511 25.9068L25.3071 21.4282C25.1858 21.3186 25.02 21.2812 24.8666 21.329C24.7134 21.3768 24.5935 21.5033 24.5482 21.665C24.5029 21.8269 24.5384 22.0018 24.6422 22.1299L28.0845 25.7625H20.7333C20.5647 25.7625 20.4091 25.8574 20.3249 26.0114C20.2407 26.1653 20.2407 26.355 20.3249 26.509C20.4091 26.6629 20.5647 26.7578 20.7333 26.7578H28.0845L24.6471 30.3853C24.5473 30.4755 24.4877 30.6056 24.4826 30.7441C24.4775 30.8826 24.5275 31.0171 24.6204 31.1152C24.7133 31.2132 24.8408 31.2659 24.972 31.2606C25.1033 31.2552 25.2265 31.1923 25.312 31.087L29.5559 26.6084C29.5983 26.5625 29.6319 26.5084 29.655 26.4491L29.6548 26.4492Z" fill="black"/>
<motion.path   d="M6.16489 10.7424C6.16489 10.7424 -4.83087 21.3298 5.26522 34.2591C15.3613 47.1884 14.2619 47.0862 16.5611 48.5115C18.8602 49.9367 21.9591 51.5658 30.356 51.973C38.7529 52.3802 40.2522 48.1031 42.1517 44.3377C44.0512 40.5723 48.4492 32.2232 49.2491 29.6779C50.049 27.1326 50.7483 21.8392 48.3494 19.7012C45.9505 17.5631 42.085 11.489 40.3523 8.29912C32.7551 -1.88128 24.1583 1.17284 18.5603 2.39448C14.082 3.3718 6.16489 10.7424 6.16489 10.7424Z" stroke="black"/>
</motion.svg>
</div>


       </div>



   <div  id={inHover === "tatacliq" ? "active" : "noneActive" }  className='list' >
       

       <h2 onMouseEnter={() => setHover('tatacliq')}>Tata Pay</h2>
 
       </div>

  
                
       </div>


  
  
  
                
     

          </div>


        
        </div>

        
        
      </div>
  )
}

export default ProductExplore