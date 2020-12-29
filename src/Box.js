import React from 'react'
import { Parallax } from 'react-scroll-parallax'

const Box = () => {

  return(
    <Parallax
      className='custom-class'
      offsetYMax={100}
      offsetYMin={-100}
      slowerScrollRate
      tag='figure'
    >
      <img 
        src='https://source.unsplash.com/random/250x350'
        alt='hi there'
        />
    </Parallax>
  )
}

export default Box;