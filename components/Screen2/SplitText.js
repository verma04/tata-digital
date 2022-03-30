import React from 'react'

export default function SplitText({copy , role}) {
  return (
    <span aria-label={copy} role={role}>
    {copy.split("").map(function(char, index){
      let style = {"animation-delay": (0.0 + index / 10) + "s"}
      return <span
        aria-hidden="true"
        key={index}
        style={style}>
        {char}
      </span>;
    })}
  </span>
  )
}
