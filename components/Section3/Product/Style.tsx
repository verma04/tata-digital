import css from 'styled-jsx/css'

export default css.global`
 @media only screen and (min-width: 1366px) {

     
  .container {
 
    width: "100%";
 

   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;

   position: relative;

 
   

  }

  .left {
 
       width:30%;
       height: 100%;
 
       display: flex;
       left: 5%;
   justify-content: space-evenly;
   align-items: center;

   position: absolute;
   flex-direction: column;
  }

  .category {
       width:100%;
     
   
       display: flex;
       left: 0;
   justify-content: space-evenly;
   align-items:flex-start;

  
   flex-direction: column;
  
 

   }
   .list {
       width: 60%;
       height: 6rem;
z-index: 1000;
position: relative;
       border-bottom:  1px solid   grey;;
       display: flex;
       align-items: flex-start;

  justify-content: center;

   flex-direction: column;
       
   }

   .svg {
    position: absolute;
    right: 0%;
   }
   #active {
       color:black;
       font-weight: 1000;

   } 
   .list h2 {
       font-size: 2rem;
       font-family: "Manrope";
      color: grey;

   }
  .list span {
    font-family: "Manrope";
   }
   h3 {
    font-family: "Manrope";
   }

   .img-left {
       height: 100%;
       width: 50%;
    

       position: relative;
   }

 } 

 @media  (min-width: 1024px) and (max-width: 1365px) {
    .container {
 
 width: "100%";


height: 100vh;
display: flex;
justify-content: center;
align-items: center;

position: relative;




}

.left {

    width:30%;
    height: 100%;

    display: flex;
    left: 5%;
justify-content: space-evenly;
align-items: center;

position: absolute;
flex-direction: column;
}

.category {
    width:100%;
  

    display: flex;
    left: 0;
justify-content: space-evenly;
align-items:flex-start;


flex-direction: column;



}
.list {
    width: 60%;
    height: 6rem;
z-index: 1000;
position: relative;
    border-bottom:  1px solid   grey;;
    display: flex;
    align-items: flex-start;

justify-content: center;

flex-direction: column;
    
}

.svg {
 position: absolute;
 right: 0%;
}
#active {
    color:black;
    font-weight: 1000;

} 
.list h2 {
    font-size: 2rem;
    font-family: "Manrope";
   color: grey;

}
.list span {
 font-family: "Manrope";
}
h3 {
 font-family: "Manrope";
}

.img-left {
    height: 100%;
    width: 50%;
 

    position: relative;
}
 }




 @media  (max-width: 767px) {

.main {
    height: 100vh;
width: 100vw; 
display: flex;
justify-content: center;
align-items: center;
}
.darg {
height:100%;
width:100%;

 display:flex;
 justify-content:flex-start;
 align-items:center;
  flex-direction:column;
  position: relative;
}
.banner {
position: absolute;
width: 90% !important;

height:35% !important;


}
#blobSvg {
z-index: 100;
}
h2 {

 
  
 display:flex;
 justify-content:flex-start;
 align-items: center;
   font-size: 2rem !important;
   font-family: "Manrope";

  cursor: pointer;
  font-weight: 1000;


}


}

@media  (min-width: 768px) and (max-width: 1023px) {

.main {
height: 100vh;
width: 100vw; 
display: flex;
justify-content: center;
align-items: center;
}
.darg {
height:100%;
width:100%;

display:flex;
justify-content:center;
align-items:'flex-start';
flex-direction:column;
position: relative;
}
.banner {
position: absolute;
width: 90% !important;

height:35% !important;


}
#blobSvg {
z-index: 100;
}
h2 {

 
  
display:flex;
justify-content:flex-start;
align-items: center;
  font-size: 2rem !important;
  font-family: "Manrope";

 cursor: pointer;
 font-weight: 1000;


}


}
`