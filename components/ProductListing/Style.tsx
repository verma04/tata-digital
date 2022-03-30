import css from 'styled-jsx/css'

export default css.global`
 @media only screen and (min-width: 1281px) {
  

     
  .container {

    width: 100%;
 

   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;

   position: relative;
   
 

  }

  .list {
    width: 100%;
    height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;

   position: relative;

  }

  .left-list {
    width: 50%;
    height: 90%;
   display: flex;
   justify-content: center;
   align-items: center;
margin-top:3rem;
 

   position: relative;
   flex-direction: column;
  }

  .bg-banner {
       position: absolute;
       width: 90%;
       height:90%;
    
       display: flex;
   justify-content: center;
   align-items: center;
       
   }

   .view-button {
       position: absolute;
       width: 7rem;
       height:7rem;
       background: radial-gradient(100% 100% at 50% 0%, #717172 0%, #2D2D2D 61.96%);
       display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
       z-index: 10;
       border-radius:50%;
       bottom: 20rem;
       right: 20%;
       cursor: pointer;
   }
    li {
      color:white;
      list-style: none;
    }
  #blobSvg  {
 z-index: 2;
  }

  h2 {
      font-family: Manrope;
      font-size:38px !important;
  }

  h3 {
    font-family: Manrope;
      font-size:22px !important; 
  }

  .right {
    width: 50%;
    height: 90%;
   display: flex;
   justify-content: center;
   align-items: center;

   position: relative;
  }


  .button {
     
      position: absolute;
      bottom: 5%;
      display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;

  }

  .heading {
     
     position: absolute;
     top: 12%;
     display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 2rem;

 }
 



} 

@media (min-width: 768px) and (max-width: 1024px) {
    
       
  .container {

width: 100%;


height: 100vh;
display: flex;
justify-content: center;
align-items: center;

position: relative;



}

.list {
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;

position: relative;

}

.left-list {
width: 50%;
height: 90%;
display: flex;
justify-content: center;
align-items: center;
margin-top:3rem;


position: relative;
flex-direction: column;
}

.bg-banner {
   position: absolute;
   width: 90%;
   height:90%;

   display: flex;
justify-content: center;
align-items: center;
   
}

.view-button {
   position: absolute;
   width: 7rem;
   height:7rem;
   background: radial-gradient(100% 100% at 50% 0%, #717172 0%, #2D2D2D 61.96%);
   display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
   z-index: 10;
   border-radius:50%;
   bottom: 20rem;
   right: 20%;
   cursor: pointer;
}
li {
  color:white;
  list-style: none;
}
#blobSvg  {
z-index: 2;
}

h2 {
  font-family: Manrope;
  font-size:38px !important;
}

h3 {
font-family: Manrope;
  font-size:22px !important; 
}

.right {
width: 50%;
height: 90%;
display: flex;
justify-content: center;
align-items: center;

position: relative;
}


.button {
 
  position: absolute;
  bottom: 5%;
  display: flex;
justify-content: center;
align-items: center;
width: 100%;

}

.heading {
 
 position: absolute;
 top: 12%;
 display: flex;
justify-content: center;
align-items: center;
width: 100%;

}



}
`