import React from 'react'
import { useMediaQuery } from '@chakra-ui/react'
import Main from './Main'
import Mobile from './Mobile'
import Tablet from './Tablet'
import IpadPro from './IpadPro'
function Index() {
    const [isLargerThan1280] = useMediaQuery('(min-width: 1281px)')
    const [isSmallterThan767] = useMediaQuery('(max-width: 767px)')
    const [isIpad] = useMediaQuery('(min-width: 768px) and (max-width: 1023px)')
    const [isIpadPro] = useMediaQuery('(min-width:  1024px) and (max-width: 1280px)')
  return (
    <>
    {isLargerThan1280 ?
    (
        <Main/>
    )

        :
        (
            null
        )

    

    }

{isSmallterThan767 ?
    (
        <Mobile/>
    )

        :
        (
            null
        )

    

    }

{isIpad ?
    (
        <Tablet/>
    )

        :
        (
            null
        )

    

    }

{isIpadPro ?
    (
        <IpadPro/>
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