import React from 'react'
import styled from 'styled-components'
import NavBar from '../nav/NavBar'

const CTA = styled.div`
height: 100vh;
background-color: #E7E6FD;
width: 100%;
`


const CallToAction = () => {
  return (
    <CTA>
        <NavBar/>
    </CTA>
  )
}

export default CallToAction