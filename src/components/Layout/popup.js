import React from 'react'
import styled from 'styled-components'

const popup = () => {
  return (
    <Backdrop>
      <StyledPopup>
        Hello
      </StyledPopup>
    
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
  display:flex;
  justify-content:center;

`

const StyledPopup = styled.div`
  width:500px;
  height:200px;
  background-color:#ffffff;
  border-radius:10px;
  padding:2rem;
  margin-top:100px;
  
`