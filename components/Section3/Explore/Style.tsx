import css from 'styled-jsx/css'

export default css.global`
 @media only screen and (min-width: 1281px) {

     
  .container {
 
    width: "100%";
 

   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;

   position: relative;

 
   

  }

  .show {
    width: 100%;
    height: 100%;
   

    justify-content: flex-end;
    display: flex;
    align-items: center;
    right: 20%;
  }
  .cate {
    width: 100%;
      height: 90%;
      display: flex;
      justify-content:center;
      align-items: center;
      transform: rotate(-15deg);
      position: absolute;
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
  .banner-image {
      width: 90%;
      height: 90%;
      z-index: 2;
    
    
  }

  .category {
       width:100%;
     
   
       display: flex;
       left: 0;
   justify-content: space-evenly;
   align-items:flex-start;

  
   flex-direction: column;
  
 

   }

   .bg-banner {
       position: absolute;
       width: 90%;
       height:90%;
    
       
   }
   .list {
       width: 60%;
       height: 6rem;


       border-bottom:  1px solid   grey;;
       display: flex;
       align-items: flex-start;

  justify-content: center;

   flex-direction: column;
       
   }
   #active {
       color:black;
       font-weight: 1000;

   } 
   .list h2 {
       font-size: 2rem;
       font-family: "Manrope";
      color: grey;
      cursor: pointer;

   }
   h3 {
    font-family: "Manrope";
    cursor: pointer;
   }

   .img-left {
       height: 100%;
       width: 50%;
    

       position: relative;
   }

 } 

 @media  (min-width:  1024px) and (max-width: 1280px) {
    .container {
 
 width: "100%";


height: 100vh;
display: flex;
justify-content: center;
align-items: center;

position: relative;




}

.show {
 width: 100%;
 height: 100vh;

 transition: all 1s ease-in 0s;
 justify-content: flex-end;
 display: flex;
 align-items: center;
 right: 20%;
}
.cate {
 width: 100%;
   height: 90%;
   display: flex;
   justify-content:center;
   align-items: center;
   transform: rotate(-15deg);
   position: absolute;
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
.banner-image {
   width: 90%;
   height: 90%;
   z-index: 2;
   display: flex;
   justify-content: center;
 
 
}

.category {
    width:100%;
  

    display: flex;
    left: 0;
justify-content: space-evenly;
align-items:flex-start;


flex-direction: column;



}

.bg-banner {
    position: absolute;
    width: 60%;
    height:60%;
 
    
}
.list {
    width: 60%;
    height: 6rem;


    border-bottom:  1px solid   grey;;
    display: flex;
    align-items: flex-start;

justify-content: center;

flex-direction: column;
    
}
#active {
    color:black;
    font-weight: 1000;

} 
.list h2 {
    font-size: 2rem;
    font-family: "Manrope";
   color: grey;
   cursor: pointer;

}
h3 {
 font-family: "Manrope";
 cursor: pointer;
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

   font-size: 4rem !important;
   font-family: "Manrope";

  cursor: pointer;
  font-weight: 1000;


}

}
`