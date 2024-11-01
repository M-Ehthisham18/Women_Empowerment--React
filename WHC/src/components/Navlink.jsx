import React, { useState } from 'react'
import {Link,NavLink} from 'react-router-dom'
const Navlink = ({route,name}) => {


  return (
    
      <NavLink to={route} className={({isActive})=> isActive ? ' bg-white opacity-95 p-2 rounded-md text-violet-700 transition-all' : ''}
      >{name}</NavLink>
    
  )
}

export default Navlink
