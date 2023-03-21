import React from 'react'

const TabContent = (props) => {
    const {index} = props
    console.log(index)
  return (
    <div>{index}</div>
  )
}

export default TabContent