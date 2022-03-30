import Image from 'next/image';
import React, { Component } from 'react' 


const slider = React.createRef();
const container = React.createRef();
  






export default class SwipeableButton extends Component {

  
    
  
  state = {}

  componentDidMount() {
    if(this.props.isTouchDevice) {
      document.addEventListener('touchmove', this.onDrag);
      document.addEventListener('touchend', this.stopDrag);
    } else {
      document.addEventListener('mousemove', this.onDrag);
      document.addEventListener('mouseup', this.stopDrag);  
    }
    this.containerWidth = container.current.clientWidth - 50;



  }

  onDrag =e=> {
    if(this.unmounted || this.state.unlocked) return;
  
    if(this.isDragging) {
      this.props.setDrag(true)
      if(this.props.isTouchDevice) {
        this.sliderLeft = Math.min(Math.max(0, e.touches[0].clientX - this.startX), this.containerWidth);
     
  
      } else {
        this.sliderLeft = Math.min(Math.max(0, e.clientX - this.startX), this.containerWidth);
      }
      this.updateSliderStyle();
    }
  }

  updateSliderStyle =()=> {
    if(this.unmounted || this.state.unlocked) return;
    slider.current.style.left = (this.sliderLeft + 50)+'px';
  }

  stopDrag =()=> {
    if(this.unmounted || this.state.unlocked) return;
    this.props.setDrag(false)
    if(this.isDragging) {
      this.isDragging = false;
      if(this.sliderLeft > this.containerWidth * 0.9) {
        this.sliderLeft = this.containerWidth;
        if(this.props.onSuccess) {
          this.props.onSuccess();
          this.onSuccess();
        }
      } else {
        this.sliderLeft = 0;
        if(this.props.onFailure) {
          this.props.onFailure();
        }
      }
      this.updateSliderStyle();
    }
  }

  startDrag =e=> {
  
  

   

    if(this.unmounted || this.state.unlocked) return;
    this.isDragging = true;
   
    if(this.props.isTouchDevice) {
      this.startX = e.touches[0].clientX;

    } else {
      this.startX = e.clientX;
      console.log(this.startX , "else")
     
    }

    
  }

  onSuccess =()=> {

   
    this.setState({
      unlocked: true
    })
  }


  
  getText =()=> {
    return this.state.unlocked ? (this.props.text_unlocked || 'UNLOCKED') : (this.props.text || 'SLIDE')
  }

  reset =()=> {
    if(this.unmounted) return;
    this.setState({unlocked: false}, ()=> {
      this.sliderLeft = 0;
      this.updateSliderStyle();
    });
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  arr =[1, 2, ,44,4,4,,4,4,4,4,4,4,4,4,4,4,4,4,,4,4,4,4,4,4,4,4,4,4,4,4,4,,4]

  render() { 
    return (
      <div className='ReactSwipeButton'>
        <div className={'rsbContainer ' + (this.state.unlocked ? 'rsbContainerUnlocked' : '')} ref={container}>
         
         <div  className='slider-set' style={{width:"100%" ,  marginLeft:"5rem", height:"100%" ,  display:"flex" , justifyContent:"space-between" , alignItems:"center" , flexDirection:"row" }} >
 {this.arr.map((set , key) =>
  
  <div className='scroolButton'  style={{color:"black"   }}  key={key}>

    -

      </div>

 )

 }
 </div>
          <div className='rsbcSlider' 
            ref={slider} 
            onMouseDown={this.startDrag} 
           
            onTouchStart={this.startDrag}>
           
            <span className='rsbcSliderArrow'>

     

                
            </span>
            <span className='rsbcSliderCircle'></span>
          </div>


<div>


</div>

          
          
        </div>
      </div>
    )
  }
}