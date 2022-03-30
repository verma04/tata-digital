import React, { useState } from "react";
import TataCliq from "./TataCliq";
import Tata1mg from "./Tata1mg";
import Cult from './Cult'
import Croma from './Croma'
import Basket from './BigBasket'

function Explore() {
  const [last, lastvalue] = useState("bigbasket");
    const [inHover, sethover] = useState("bigbasket");
  

    const setHover = (data:string) => {


      if(data === last) {
        sethover(data)
      }
      else {
        lastvalue(inHover)
        sethover(data)
      }

    

    }

    const arr = [ "bigbasket" ,"croma",  "tata1mg" , "tatacliq" ,  "cult" ]


  return (
    <div>
       

    <div  className='container ' >

    {(() => {
        if (inHover === "tatacliq") {
          return (
            <TataCliq  active={arr.findIndex((t:any) =>  t === inHover) >  arr.findIndex((t:any) =>  t === last)  } />
          )
        } else if (inHover ==="tata1mg") {
          return (
            <Tata1mg active={arr.findIndex((t:any) =>  t === inHover) >  arr.findIndex((t:any) =>  t === last)  }/>
          )
        }
        else if (inHover ==="bigbasket") {
          return (
            <Basket active={arr.findIndex((t:any) =>  t === inHover) >  arr.findIndex((t:any) =>  t === last)  }/>
          )
        }        
        else if (inHover ==="croma") {
          return (
            <Croma active={arr.findIndex((t:any) =>  t === inHover) >  arr.findIndex((t:any) =>  t === last)  }/>
          )
        }
        else if (inHover ==="cultfit") {
          return (
            <Cult active={arr.findIndex((t:any) =>  t === inHover) >  arr.findIndex((t:any) =>  t === last)  }/>
          )
        }
        
        
        
      })()}

          
          <div className='left' >
          <div  className='category' >
   

   <h3>Subsidiaries</h3>

   <div  id={inHover === "bigbasket" ? "active" : "noneActive" }   onMouseLeave={() => setHover('bigbasket')}  onMouseEnter={() => setHover('bigbasket')} className='list' >
       
     <h2>Big Basket</h2>
       </div>

   <div  id={inHover === "croma" ? "active" : "noneActive" }   className='list' >
       <h2  onMouseEnter={() => setHover('croma')}  >Croma</h2>
       </div>

   <div id={inHover === "tata1mg" ? "active" : "noneActive" } className='list' >
       <h2  onMouseEnter={() => setHover('tata1mg')}>Tata 1mg</h2>
       </div>


   <div  id={inHover === "tatacliq" ? "active" : "noneActive" }  className='list' >
       

       <h2 onMouseEnter={() => setHover('tatacliq')}>Tata Cliq</h2>
 
       </div>

  
                
       </div>


  
       <div  className='category' >
   

   <h3>Investments</h3>


       

  

       <div  id={inHover === "cultfit" ? "active" : "noneActive" }  className='list' >
       

       <h2   onMouseEnter={() => setHover('cultfit')} 
   >Cult.fit</h2>
 
       </div>
     
                
       </div>
  
                
     

          </div>


        
        </div>
        
      </div>
  )
}

export default Explore