import React, { useRef, useState } from 'react'

const HooksRef = () => {

  const [isVisible,setIsVisible]= useState(true)
  let usePara = useRef(null);

  function clickMagic(){
    
    console.log('Click Effect show this')

    usePara.current.style.display= isVisible ? 'none' : 'block';
  }
  return (
    <div>
      <p ref={usePara}>Im the apply here multiple focussing</p>
      <button onClick={clickMagic}>Apply Now</button>
    </div>
  )
}

export default HooksRef