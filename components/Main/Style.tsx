import css from 'styled-jsx/css'

export default css.global`
 @media only screen and (min-width: 1281px) {
  

     
  .container {
    cursor: none;
    width: "100%";
 

   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;

   position: relative;
   

  }

 

span {
	color: transparent;
	animation: blur 10s ease-out ;

}


#fade {
	width: 70%;
	text-shadow: 0 0 200px #9600FF;;
	color: transparent;
	font-size: 2.5rem;
	text-align: center;
	letter-spacing: 6px;
	animation: animate-text 7s alternate ;
}

@keyframes animate-text {
	from {
    text-shadow: 0 0 0 #9600FF;
		
	}
	
	to {
    text-shadow: 0 0 200px #9600FF;;
	}
}





  .imgArray {
    width: 60%;
  
    height: 85%;
    position:relative;
    display: flex;
   justify-content: center;
   align-items: center;
   position: relative;
   flex-wrap: wrap;
   
  }
  .spinner {
    
    width: 100%;
    height: 100%;
    display: flex;
   justify-content: center;
   align-items: center;
   position: relative;
   position: absolute;
   
  }

  .text {
    width: 100%;
  display: flex;
   justify-content: center;
   align-items: center;
   position: relative;
   flex-direction: column;
  
   height: 100%;

  }


  
  .tata-logo {
margin-bottom: 3rem;
 
 
 justify-content:center;
    flex-direction: column;
    align-items: center;
  
} 
@import url(https://fonts.googleapis.com/css?family=Hind:700);

body {
	font-family: 'Hind', sans-serif;
	font-size: 400%;
	color: #fff;

	text-align: center;
}

 span {
	color: white;
	/* animation: blur 10s ease-out;
  animation-iteration-count: 1; */


}

/*
span:nth-child(1) {
	animation-delay: 0.1s;
	-webkit-animation-delay: 0.1s;
}
span:nth-child(2) {
	animation-delay: 0.2s;
	-webkit-animation-delay: 0.2s;
}
span:nth-child(3) {
	animation-delay: 0.3s;
	-webkit-animation-delay: 0.3s;
}
span:nth-child(4) {
	animation-delay: 0.4s;
	-webkit-animation-delay: 0.4s;
}
span:nth-child(5) {
	animation-delay: 0.5s;
	-webkit-animation-delay: 0.5s;
}
span:nth-child(6) {
	animation-delay: 0.6s;
	-webkit-animation-delay: 0.6s;
}
span:nth-child(7) {
	animation-delay: 0.7s;
	-webkit-animation-delay: 0.7s;
}

@keyframes blur {
	0%		{text-shadow:  0 0 100px #fff; opacity:1;}
	5%		{text-shadow:  0 0 90px #fff;}
	15%		{opacity: 1;}
	20%		{text-shadow:  0 0 0px #fff;}
	80%		{text-shadow:  0 0 0px #fff;}
	85%		{opacity: 1;}
	100%		{text-shadow:  0 0 90px #fff; }

} */

h2 {

  font-family: 'Manrope';
font-style: normal;
font-weight: 200;

font-family: Manrope;
line-height: 3.5rem;
color: #9600FF;

}

  #img {
position: absolute;
    width: 10em;
    height: 10rem;
  

left: 40%;
    bottom: 20%;

  }

  .img1 {
   
    left: 40%;
    bottom: 20%;
  }
  .img2 {
    right: 50%;
    bottom: 20%;
  }

  .img3 {
    right: 47%;
    bottom: 30%;
  }
  .img4 {
    right: 50%;
    bottom: 20%;
  }
  .img5 {
    right: 50%;
    bottom: 20%;
  }
  .head {
    font-size: 44px;

  }
  .backImg {
    position: absolute;
    
      background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    width: "100%";
    height: 100vh;
  }

 } 

 @media only screen and (max-width: 767px) {

     
.container {

 
  cursor: none;
    width: "100%";
 

   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;

   position: relative;
}

  .imgArray {
    width: 90%;
  
    height: 100%;
    position:relative;
    display: flex;
   justify-content: center;
   align-items: center;
   position: relative;
   flex-wrap: wrap;
   margin-bottom: 10rem;
   
  }
  .spinner {
    
    width: 100%;
    height: 100%;
    display: flex;
   justify-content: center;
   align-items: center;
   position: relative;
   position: absolute;
   
  }

  h2 {

    margin-top: 2rem;
font-family: 'Manrope';
font-style: normal;
font-weight: 200;
font-size: 2rem;
font-family: Manrope;
line-height: 2rem;
color: #9600FF;

}


  .text {
    width: 100%;
  display: flex;
   justify-content: center;
   align-items: center;
   position: relative;
   flex-direction: column;
  
   height: 100%;

  }


  




  .set {
    position: absolute;
 cursor: pointer;
    width: 8rem;
    top: 60%;
   height: 8rem;
   font-family: 'Manrope';
background-color: #000000;
border-radius:50%;
display: flex;
justify-content: center;
align-items: center;
  }
  h3 {
  text-align: center;
    color:white;
    font-family: 'Manrope';
  }
 
  #img {
position: absolute;
 
top: 53%;

  }
  

  .backImg {
    position: absolute;
    
      background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    width: "100%";
    height: 100vh;
  }






} 

@media (min-width: 768px) and (max-width: 1024px) {
    
  .container {

 
cursor: none;
  width: "100%";


 height: 100vh;
 display: flex;
 justify-content: center;
 align-items: center;

 position: relative;
}

.imgArray {
  width: 90%;

  height: 100%;
  position:relative;
  display: flex;
 justify-content: center;
 align-items: center;
 position: relative;
 flex-wrap: wrap;
 margin-bottom: 10rem;
 
}
.spinner {
  
  width: 100%;
  height: 100%;
  display: flex;
 justify-content: center;
 align-items: center;
 position: relative;
 position: absolute;
 
}

.text {
  width: 100%;
display: flex;
 justify-content: center;
 align-items: center;
 position: relative;
 flex-direction: column;

 height: 100%;

}



.tata-logo {
margin-bottom: 1rem;


justify-content:center;
  flex-direction: column;
  align-items: center;

} 
h2 {
  font-family: 'Manrope';
font-style: normal;
font-weight: 200;
font-size: 16px;

line-height: 2rem;

background: linear-gradient(90deg, #9600FF 50%, #E6C1FF 91.17%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;

}




.set {
  position: absolute;
cursor: pointer;
  width: 8rem;
  top: 60%;
 height: 8rem;
 
background-color: #000000;
border-radius:50%;
display: flex;
justify-content: center;
align-items: center;
}
h3 {
text-align: center;
  color:white
}

#img {
position: absolute;

top: 53%;

}

.head {
  font-size: 22px;

  line-height: 2rem;

}
.backImg {
  position: absolute;
  
    background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  width: "100%";
  height: 100vh;
}


}


@media  (min-width:  1024px) and (max-width: 1280px)  {


     
  .container {

    cursor: none;
    width: "100%";
 

   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;

   position: relative;
   

  }
  .imgArray {
    width: 60%;
  
    height: 85%;
    position:relative;
    display: flex;
   justify-content: center;
   align-items: center;
   position: relative;
   flex-wrap: wrap;
   
  }
  .spinner {
    
    width: 100%;
    height: 100%;
    display: flex;
   justify-content: center;
   align-items: center;
   position: relative;
   position: absolute;
   
  }

  #fade {
	width: 70%;
	text-shadow: 0 0 200px #9600FF;;
	color: transparent;
	font-size: 2.5rem;
	text-align: center;
	letter-spacing: 6px;
	animation: animate-text 7s alternate ;
}

@keyframes animate-text {
	from {
    text-shadow: 0 0 0 #9600FF;
		
	}
	
	to {
    text-shadow: 0 0 200px #9600FF;;
	}
}

  .text {
    width: 100%;
  display: flex;
   justify-content: center;
   align-items: center;
   position: relative;
   flex-direction: column;
  
   height: 100%;

  }


  
  .tata-logo {
margin-bottom: 3rem;
 
 
 justify-content:center;
    flex-direction: column;
    align-items: center;
  
} 
  h2 {
    font-family: Manrope;
font-style: normal;
font-weight: 200;
font-size: 22px;
line-height: 3.5rem;
background: linear-gradient(90deg, #9600FF 50%, #E6C1FF 91.17%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;

  }
  #img {
position: absolute;
    width: 10em;
    height: 10rem;
  

left: 40%;
    bottom: 20%;

  }

  .img1 {
   
    left: 40%;
    bottom: 20%;
  }
  .img2 {
    right: 50%;
    bottom: 20%;
  }

  .img3 {
    right: 47%;
    bottom: 30%;
  }
  .img4 {
    right: 50%;
    bottom: 20%;
  }
  .img5 {
    right: 50%;
    bottom: 20%;
  }
  .head {
    font-size: 44px;

  }
  .backImg {
    position: absolute;
    
      background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    width: "100%";
    height: 100vh;
  }


}
`