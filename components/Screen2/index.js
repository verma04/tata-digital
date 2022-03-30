import React from 'react'
import Screen2 from './Screen2'
import Screen3 from './Screen3/Screen3'
import { motion  , useCycle } from 'framer-motion'
import Navbar from '../Navbar/Navbar'
export default function Index({setProduct , setExplore}) {

    const [first, setfirst] = React.useState(false)

    const [effect, setEffect] = React.useState(false)
    const modal = {
        hidden: { y: "100vh", opacity: 1 },
        visible: { 
          y: 0, 
          opacity: 1,
          transition: { type: "spring", stiffness: 20 , duration:1}
        },
      }

      const modal1Reverse = {
        hidden: { y: 0, opacity: 1 },
        visible: { 
          y: "100vh", 
          opacity: 1,
          transition: { type: "spring", stiffness: 20 , duration:1}
        },
      }

      const modal2 = {
        hidden: { y: "100vh", opacity: 1 },
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
          transition: { type: "spring", stiffness: 20 , duration:1}
        },
      }

      console.log(effect)

  return (
      <>
      <Navbar/>
    {first ?
        (

            <motion.div 
initial="hidden"
animate="visible"
exit="hidden"variants={ !effect ?  modal1Reverse : modal }
>
            <Screen3 setProduct={setProduct} setExplore={setExplore}/>
            </motion.div>
        )
        :
        (
            <motion.div 
variants={ effect ? modal1Reverse : modal }
initial="hidden"
animate="visible"
exit="hidden">
            <Screen2 setfirst={setfirst}  setEffect={setEffect} />
            </motion.div>
        )

    }
    </>
  )
  
}
