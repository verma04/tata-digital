import React from 'react'
import { useMediaQuery } from '@chakra-ui/react'
import Main from './Desktop/ProductExplore'
import Mobile from './Mobile'
import globalStyles from './Style'
import Navbar from '../../Navbar/Navbar'
function Index({setfirst , setEffect}) {
    const [isLargerThan1280] = useMediaQuery('(min-width: 1281px)')
    const [isSmallterThan767] = useMediaQuery('(max-width: 767px)')
    const [isIpad] = useMediaQuery('(min-width: 768px) and (max-width: 1023px)')
    const [isIpadPro] = useMediaQuery('(min-width:  1024px) and (max-width: 1280px)')
  return (
    <>
      <style jsx global>
    {globalStyles}

    

    

    </style>
    {isLargerThan1280 || isIpadPro  ?
    (
        <Main  setfirst={setfirst}  setEffect={setEffect}  />
    )

        :
        (
            null
        )

    

    }

{isSmallterThan767  || isIpad ?
    (
        <>
     
        <Mobile setfirst={setfirst}  setEffect={setEffect} />

    </>
    )

        :
        (
            null
        )

    

    }







    
    </>
  )
}

export default Index