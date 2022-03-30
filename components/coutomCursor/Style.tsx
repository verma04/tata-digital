import css from 'styled-jsx/css'

export default css.global`
  .app-cursor {
    z-index: 1000;
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
     background-color: black;
    pointer-events: none;
  
    position: fixed;
   display: flex;
   justify-content: center;
   align-items: center;
   color:white;
  }
  
`