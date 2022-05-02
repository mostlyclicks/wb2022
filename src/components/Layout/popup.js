import React from 'react'
import styled from 'styled-components'

const popup = () => {
  return (
    <Backdrop>
    
    </Backdrop>
  )
}

export default popup

const Backdrop = styled.div`
  position:fixed;
  top:0;
  left:0;
  z-index:10001;
  height:100vh;
  width:100%;
  background-color:rgba(0,0,0,.8);
`