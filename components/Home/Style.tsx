import css from 'styled-jsx/css'

export default css.global`
  body {
    margin: 0;
    padding: 0;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.8;
    color: #333;
  
    font-family: sans-serif;
  }
  h1 {
    font-weight: 700;
  }
  p {
    margin-bottom: 10px;
  }
  .page-layout {
    width:100%;

    background-image: url('/assets/istockphoto-1086924524-170667a 1.png') ;
    height:100vh ;
    display:flex ; 
    justify-content:center;
    align-items:center;
 
     flex-direction: column;
  }
  .img {
    position:absolute; 
    z-index:1 ; 
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

  }
  .img2 {
    position:absolute;
     z-index:1 ;
    
     top: 0rem;
    right: 1rem;

  }
  .loader{
  width: 10px;
  height: 10px;
  margin: 40px auto;
  border-radius: 50%;
 
}
  .img2 {
    position:absolute;
     z-index:1;
     top:10rem;
    right:10rem
  }
  .img3 {
    position:absolute;
     z-index:9999 ;
     top:10rem;
    right:10rem
  }
  .img4 {
    position:absolute;;z-index:1 ;
    bottom:2rem;
    right:2rem;
  }
  .img5 {
    position:absolute;;z-index:1 ;
    bottom:2rem;
    left:2rem;
    bottom: 8rem;
    left: 16rem;
}
.img6 {
    position:absolute;;z-index:1 ;
    top:4rem;
    left:30rem
}
.img7 {
    position:absolute;
    z-index:1 ;bottom:10;left:50
}
.img7 {
    position:absolute;;z-index:1 ;
    bottom:-2rem;
    left:-3rem
}
.heading {
    display:flex ;
     justify-content:center;
      align-items:center;
      flex-direction:column;
      
      width: 60%;
      height: 80%;
      position: relative;
    
      
}

.spinner {
    display:flex ;
     justify-content:center;
      align-items:center;
      flex-direction:column;
      
      width: 60%;
      height: 50%;
      position: relative;
    
      
}
.tata-logo {
  position: relative;
 
 
 justify-content:center;
    flex-direction: column;
    align-items: center;
  
} 
.list {
    text-align: center;
    list-style: none;
    font-size: 3rem;
}
.button {
    background-color: darkblue;
    width: 8rem;
    height: 8rem;
border-radius: 8rem;
display:flex ;
     justify-content:center;
      align-items:center;
      color:white;
}
.object {
   
    position: absolute;
    width: 100%;
    height: 80%;
    display: flex;
    justify-content:center;
    flex-direction: column;
    align-items: center;
}
`