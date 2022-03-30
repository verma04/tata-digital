import React from 'react'
import { motion  , useCycle } from 'framer-motion';
export default function Tata1mg() {
  const modal = {
    hidden: { y: "100vh", opacity: 1 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { delay: 1  ,  type: "spring", stiffness: 20}
    },
  }
  return (
    <motion.div
    variants={{
      pageInitial: {
        opacity: 0
      },
      pageAnimate: {
        opacity: 1
      },
      pageExit: {
        backgroundColor: 'red',
        filter: `invert()`,
        opacity: 0
      }
    }}
     style={{width:"100%", height:"100vh" ,  justifyContent:"flex-end", display:"flex", alignItems:'center', right:"20%"}}
    >
        
        

<div  className='img-left' >

<motion.div    className='tata-Cliq'  >  
<motion.img

variants={modal}
initial="hidden"
animate="visible"
exit="hidden"

style={{width:"120%", height:'100%' , position:"absolute" , left:"-3rem", top:"-3rem", zIndex:1000}}

src="/BussinessListing/1mg-fb 5 (1).png"

alt="logo"

  

  
  />
</motion.div>


<motion.div    className='tata-around'  >  
<motion.img




 
    

style={{width:"100%", height:'100%' , position:"absolute" }}

src="/Vector3.png"

alt="logo"

  

  
  />
</motion.div>


</div>
      
    </motion.div>



  )
}
