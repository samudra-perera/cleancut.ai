import React from 'react'
import NavBar from '../components/SharedComponents/nav/NavBar'
import TeamCTA from '../components/AboutPage/TeamCTA/TeamCTA'
import TeamMembers from '../components/AboutPage/TeamMembers/TeamMembers'
import Footer from '../components/SharedComponents/Footer/Footer'
import AboutFooter from '../components/SharedComponents/Footer/About/AboutFooter'
import WorkTogether from '../components/AboutPage/Recruiting/WorkTogether'


const Team = () => {
  return (
    <>
        <NavBar/>
        <TeamCTA/>
        <TeamMembers />
        <WorkTogether/>
        <Footer element={<AboutFooter/>}/>
    </>
  )
}

export default Team