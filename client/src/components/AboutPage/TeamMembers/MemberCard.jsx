import React from 'react'

const MemberCard = (props) => {
    const {name, title, accomplishments, headshotURL} = props
  return (
    <div>{name}</div>
  )
}

export default MemberCard