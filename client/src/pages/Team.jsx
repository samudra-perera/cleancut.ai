import React from 'react'
import NavBar from '../components/SharedComponents/nav/NavBar'
import TeamCTA from '../components/AboutPage/TeamCTA/TeamCTA'
import Footer from '../components/SharedComponents/Footer/Footer'
import TeamMembers from '../components/AboutPage/TeamMembers/TeamMembers'

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