import React from 'react'
import NavBar from '../components/SharedComponents/nav/NavBar'
import TeamCTA from '../components/AboutPage/TeamCTA/TeamCTA'
import TeamMembers from '../components/AboutPage/TeamMembers/TeamMembers'
import Footer from '../components/SharedComponents/Footer/Footer'


const Team = () => {
  return (
    <>
        <NavBar/>
        <TeamCTA/>
        <TeamMembers />
        <Footer />
    </>
  )
}

export default Team