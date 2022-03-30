import React from 'react'
import Navbar from '../Navbar/Navbar'
import { motion  , useCycle } from 'framer-motion'
import Explore from './Explore/Index'
import Product from './Product/index'
function Index({}) {

    const [first, setfirst] = React.useState(false)

    const [effect, setEffect] = React.useState(false)
    const modal = {
        hidden: { x: "100vh", opacity: 1 },
        visible: { 
          x: 0, 
          opacity: 1,
          transition: { type: "spring", stiffness: 20 , duration:1}
        },
      }

      const modal1Reverse = {
        hidden: { x: 0, opacity: 1 },
        visible: { 
        x: "200vh", 
          opacity: 1,
          transition: { type: "spring", stiffness: 20 , duration:2}
        },
      }

      const modal2 = {
        hidden: { x: "200vh", opacity: 1 },
        visible: { 
          x: 0, 
          opacity: 1,
          transition: { type: "spring", stiffness: 20 , duration:1}
        },
      }
      const modal2Reverse = {
        hidden: { x: 0, opacity: 1 },
        visible: { 
          x: "100vh", 
          opacity: 1,
          transition: { type: "spring", stiffness: 20 , duration:1}
        },
      }

 
    return (
      <>

<>
    
    {effect ?
        (

            <motion.div 
initial="hidden"
animate="visible"
exit="hidden"variants={modal2}
>
            <Explore/>
            </motion.div>
        )
        :
        (
            <motion.div 
variants={ effect ? modal1Reverse : modal }
initial="hidden"
animate="visible"
exit="hidden">
            <Product setfirst={setfirst}  setEffect={setEffect} />
            </motion.div>
        )

    }
    </>


    </>
  )
}

export default Index