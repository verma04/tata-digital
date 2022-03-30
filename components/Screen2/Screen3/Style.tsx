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
   flex-direction: column;

  }
  .container-left {

    width: 90%;
    height: 30%;

    display: flex;
   justify-content: center;
   align-items: center;

   position: relative;
   
  }


  .container-left h2 {
 
    font-family: 'Manrope';
font-style: normal;
font-weight: 200;
font-size: 2rem;

width: 50%;
color: #1A1A1A;
text-align: center;

   
  }

  .container-right {
   
    width: 50%;
    height: 30%;
    display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
  
  }

  .container-right-top {
    width: 90%;
    height: 100%;

    display: flex;
   justify-content: space-between;
   align-items: center;
  } 

  .img-wrapper {

    width: 100%;
    height: 100%;
    display: flex;
   justify-content: center;
   align-items: center;
   position: relative;

  }

.ReactSwipeButton {
  
  width: 100%;

  height: 65px;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.ReactSwipeButton,
.ReactSwipeButton * {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none;   /* Chrome/Safari/Opera */
  -khtml-user-select: none;    /* Konqueror */
  -moz-user-select: none;      /* Firefox */
  -ms-user-select: none;       /* Internet Explorer/Edge */
  user-select: none;           /* Non-prefixed version, currently
                                  not supported by any browser */
}
.rsbContainer{
  float: left;
  width: 70%;
  height: 100%;
 
  border-radius: 50px;
  position: relative;
  /* box-shadow: inset 1px 1px 4px rgba(0,0,0,0.1); */
  overflow: hidden;
  display: flex;
    justify-content: center;
    align-items: center;
}
.rsbContainerUnlocked{
  width: 50%!important;
  margin-left: 25%;
  transition: 0.5s;
  cursor: default;
}
.rsbContainerUnlocked .rsbcSlider{
  left: 100%!important;
  cursor: default;
  pointer-events: none;
}
.rsbContainerUnlocked .rsbcSliderArrow {

  margin-right: -60px;
}
.rsbContainerUnlocked .rsbcSliderCircle {
  transition: 0.5s;
  margin-right: -60px;
}
.rsbcSlider {
  float: left;
  width: 100%;
  position: absolute;
  height: 50px;

  top: 7px;

  left: 50px;
  margin-left:-96%;
 
  border-radius: 25px;
  z-index: 100;
  /* box-shadow: 1px 1px 5px rgba(0,0,0,0.3); */
  cursor: pointer;
}
.rsbcSliderText{
  position: absolute;
  top:0;
  left:0;
  right:0;
  line-height: 50px;
  text-align: center;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  letter-spacing: 2px;
  color: #fff;
  font-size: 13px;

}
.rsbcSliderArrow{
  float: left;
  position: absolute;
 background-image: url(/assets/ScrollButton.png);
 background-size: contain;
 background-repeat: no-repeat;
 background-position: center;
  height: 60px;
  width: 60px;
  top:0%;
  
  right: 22px;
  margin-top: -6px;
  border-left-color: transparent;
  border-bottom-color: transparent;
  transform-origin: center;
  z-index: 10;
}
.rsbcSliderCircle {
  position: absolute;
  right: 0;

  top:0;
  height: 50px;
  width: 50px;
  border-radius: 100%;
}
.rsbcText {
  float: left;
  position: absolute;
  top:0;
  left:0;
  right:0;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  letter-spacing: 2px;
  font-size: 13px;
  color: #aaa;
}


header .pizza-svg {
  width: 80px;
  overflow: visible;
  stroke: #fff;
  stroke-width: 4;
  stroke-linejoin: round;
  stroke-linecap: round;
}

 } 

 @media only screen and (min-width:  1024px) and (max-width: 1280px)   {

     
.container {

  width: "100%";


 height: 100vh;
 display: flex;
 justify-content: center;
 align-items: center;

 position: relative;
 flex-direction: column;

}
.container-left {

  width: 90%;
  height: 30%;

  display: flex;
 justify-content: center;
 align-items: center;

 position: relative;
 
}


.container-left h2 {

  font-family: 'Manrope';
font-style: normal;
font-weight: 200;
font-size: 2rem;

width: 50%;
color: #1A1A1A;
text-align: center;

 
}

.container-right {
 
  width: 50%;
  height: 30%;
  display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;

}

.container-right-top {
  width: 90%;
  height: 100%;

  display: flex;
 justify-content: space-between;
 align-items: center;
} 

.img-wrapper {

  width: 100%;
  height: 100%;
  display: flex;
 justify-content: center;
 align-items: center;
 position: relative;

}

.ReactSwipeButton {

width: 100%;

height: 65px;

position: relative;
display: flex;
justify-content: center;
align-items: center;
}
.ReactSwipeButton,
.ReactSwipeButton * {
-webkit-touch-callout: none; /* iOS Safari */
-webkit-user-select: none;   /* Chrome/Safari/Opera */
-khtml-user-select: none;    /* Konqueror */
-moz-user-select: none;      /* Firefox */
-ms-user-select: none;       /* Internet Explorer/Edge */
user-select: none;           /* Non-prefixed version, currently
                                not supported by any browser */
}
.rsbContainer{
float: left;
width: 70%;
height: 100%;

border-radius: 50px;
position: relative;
/* box-shadow: inset 1px 1px 4px rgba(0,0,0,0.1); */
overflow: hidden;
display: flex;
  justify-content: center;
  align-items: center;
}
.rsbContainerUnlocked{
width: 50%!important;
margin-left: 25%;
transition: 0.5s;
cursor: default;
}
.rsbContainerUnlocked .rsbcSlider{
left: 100%!important;
cursor: default;
pointer-events: none;
}
.rsbContainerUnlocked .rsbcSliderArrow {

margin-right: -60px;
}
.rsbContainerUnlocked .rsbcSliderCircle {
transition: 0.5s;
margin-right: -60px;
}
.rsbcSlider {
float: left;
width: 100%;
position: absolute;
height: 50px;

top: 7px;

left: 50px;
margin-left:-96%;

border-radius: 25px;
z-index: 100;
/* box-shadow: 1px 1px 5px rgba(0,0,0,0.3); */
cursor: pointer;
}
.rsbcSliderText{
position: absolute;
top:0;
left:0;
right:0;
line-height: 50px;
text-align: center;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
letter-spacing: 2px;
color: #fff;
font-size: 13px;

}
.rsbcSliderArrow{
float: left;
position: absolute;
background-image: url(/assets/ScrollButton.png);
background-size: contain;
background-repeat: no-repeat;
background-position: center;
height: 60px;
width: 60px;
top:0%;

right: 22px;
margin-top: -6px;
border-left-color: transparent;
border-bottom-color: transparent;
transform-origin: center;
z-index: 10;
}
.rsbcSliderCircle {
position: absolute;
right: 0;

top:0;
height: 50px;
width: 50px;
border-radius: 100%;
}
.rsbcText {
float: left;
position: absolute;
top:0;
left:0;
right:0;
height: 50px;
line-height: 50px;
text-align: center;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
letter-spacing: 2px;
font-size: 13px;
color: #aaa;
}


header .pizza-svg {
width: 80px;
overflow: visible;
stroke: #fff;
stroke-width: 4;
stroke-linejoin: round;
stroke-linecap: round;
}

} 

 @media (min-width: 768px) and (max-width: 1024px)   {

     
.container {

  width: "100%";


 height: 100vh;
 display: flex;
 justify-content: center;
 align-items: center;

 position: relative;
 flex-direction: column;

}
.container-left {

  width: 90%;
  height: 30%;

  display: flex;
 justify-content: center;
 align-items: center;

 position: relative;
 
}


.container-left h2 {

  font-family: 'Manrope';
font-style: normal;
font-weight: 200;
font-size: 2rem;

width: 70%;
color: #1A1A1A;
text-align: center;

 
}

.container-right {
 
  width: 60%;
  height: 30%;
  display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;

}

.container-right-top {
  width: 90%;
  height: 100%;

  display: flex;
 justify-content: space-between;
 align-items: center;
} 

.img-wrapper {

  width: 100%;
  height: 100%;
  display: flex;
 justify-content: center;
 align-items: center;
 position: relative;

}

.ReactSwipeButton {

width: 100%;

height: 65px;

position: relative;
display: flex;
justify-content: center;
align-items: center;
}
.ReactSwipeButton,
.ReactSwipeButton * {
-webkit-touch-callout: none; /* iOS Safari */
-webkit-user-select: none;   /* Chrome/Safari/Opera */
-khtml-user-select: none;    /* Konqueror */
-moz-user-select: none;      /* Firefox */
-ms-user-select: none;       /* Internet Explorer/Edge */
user-select: none;           /* Non-prefixed version, currently
                                not supported by any browser */
}
.rsbContainer{
float: left;
width: 70%;
height: 100%;

border-radius: 50px;
position: relative;
/* box-shadow: inset 1px 1px 4px rgba(0,0,0,0.1); */
overflow: hidden;
display: flex;
  justify-content: center;
  align-items: center;
}
.rsbContainerUnlocked{
width: 50%!important;
margin-left: 25%;
transition: 0.5s;
cursor: default;
}
.rsbContainerUnlocked .rsbcSlider{
left: 100%!important;
cursor: default;
pointer-events: none;
}
.rsbContainerUnlocked .rsbcSliderArrow {

margin-right: -60px;
}
.rsbContainerUnlocked .rsbcSliderCircle {
transition: 0.5s;
margin-right: -60px;
}
.rsbcSlider {
float: left;
width: 100%;
position: absolute;
height: 50px;

top: 7px;

left: 50px;
margin-left:-96%;

border-radius: 25px;
z-index: 100;
/* box-shadow: 1px 1px 5px rgba(0,0,0,0.3); */
cursor: pointer;
}
.rsbcSliderText{
position: absolute;
top:0;
left:0;
right:0;
line-height: 50px;
text-align: center;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
letter-spacing: 2px;
color: #fff;
font-size: 13px;

}
.rsbcSliderArrow{
float: left;
position: absolute;
background-image: url(/assets/ScrollButton.png);
background-size: contain;
background-repeat: no-repeat;
background-position: center;
height: 60px;
width: 60px;
top:0%;

right: 22px;
margin-top: -6px;
border-left-color: transparent;
border-bottom-color: transparent;
transform-origin: center;
z-index: 10;
}
.rsbcSliderCircle {
position: absolute;
right: 0;

top:0;
height: 50px;
width: 50px;
border-radius: 100%;
}
.rsbcText {
float: left;
position: absolute;
top:0;
left:0;
right:0;
height: 50px;
line-height: 50px;
text-align: center;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
letter-spacing: 2px;
font-size: 13px;
color: #aaa;
}


header .pizza-svg {
width: 80px;
overflow: visible;
stroke: #fff;
stroke-width: 4;
stroke-linejoin: round;
stroke-linecap: round;
}

} 

@media only screen and (max-width: 767px) {

     
.container {

  width: "100%";


 height: 100vh;
 display: flex;
 justify-content: center;
 align-items: center;

 position: relative;
 flex-direction: column;

}
.container-left {

  width: 90%;
  height: 30%;

  display: flex;
 justify-content: center;
 align-items: center;

 position: relative;
 
}


.container-left h2 {

  font-family: 'Manrope';
font-style: normal;
font-weight: 200;
font-size: 1.5rem;

width: 90%;
color: #1A1A1A;
text-align: center;

 
}

.container-right {
 
  width: 90%;
  height: 30%;
  display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;

}

.container-right-top {
  width: 90%;
  height: 100%;

  display: flex;
 justify-content: space-between;
 align-items: center;
} 

.img-wrapper {

  width: 100%;
  height: 100%;
  display: flex;
 justify-content: center;
 align-items: center;
 position: relative;

}

.ReactSwipeButton {

width: 100%;

height: 65px;

position: relative;
display: flex;
justify-content: center;
align-items: center;
}
.ReactSwipeButton,
.ReactSwipeButton * {
-webkit-touch-callout: none; /* iOS Safari */
-webkit-user-select: none;   /* Chrome/Safari/Opera */
-khtml-user-select: none;    /* Konqueror */
-moz-user-select: none;      /* Firefox */
-ms-user-select: none;       /* Internet Explorer/Edge */
user-select: none;           /* Non-prefixed version, currently
                                not supported by any browser */
}
.rsbContainer{
float: left;
width: 70%;
height: 100%;

border-radius: 50px;
position: relative;
/* box-shadow: inset 1px 1px 4px rgba(0,0,0,0.1); */
overflow: hidden;
display: flex;
  justify-content: center;
  align-items: center;
}
.rsbContainerUnlocked{
width: 50%!important;
margin-left: 25%;
transition: 0.5s;
cursor: default;
}
.rsbContainerUnlocked .rsbcSlider{
left: 100%!important;
cursor: default;
pointer-events: none;
}
.rsbContainerUnlocked .rsbcSliderArrow {

margin-right: -60px;
}
.rsbContainerUnlocked .rsbcSliderCircle {
transition: 0.5s;
margin-right: -60px;
}
.rsbcSlider {
float: left;
width: 100%;
position: absolute;
height: 50px;

top: 7px;

left: 50px;
margin-left:-96%;

border-radius: 25px;
z-index: 100;
/* box-shadow: 1px 1px 5px rgba(0,0,0,0.3); */
cursor: pointer;
}
.rsbcSliderText{
position: absolute;
top:0;
left:0;
right:0;
line-height: 50px;
text-align: center;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
letter-spacing: 2px;
color: #fff;
font-size: 13px;

}
.rsbcSliderArrow{
float: left;
position: absolute;
background-image: url(/assets/ScrollButton.png);
background-size: contain;
background-repeat: no-repeat;
background-position: center;
height: 60px;
width: 60px;
top:0%;

right: 22px;
margin-top: -6px;
border-left-color: transparent;
border-bottom-color: transparent;
transform-origin: center;
z-index: 10;
}
.rsbcSliderCircle {
position: absolute;
right: 0;

top:0;
height: 50px;
width: 50px;
border-radius: 100%;
}
.rsbcText {
float: left;
position: absolute;
top:0;
left:0;
right:0;
height: 50px;
line-height: 50px;
text-align: center;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
letter-spacing: 2px;
font-size: 13px;
color: #aaa;
}


header .pizza-svg {
width: 80px;
overflow: visible;
stroke: #fff;
stroke-width: 4;
stroke-linejoin: round;
stroke-linecap: round;
}

} 
`