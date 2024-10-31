import React from 'react'
import {Link,NavLink} from 'react-router-dom'
const Navlink = ({route,name,onclickfun}) => {
  return (
    <div>
      <NavLink to={route} className={({isActive})=> isActive ? 'bg-white p-2 rounded-md text-violet-700 transition-all' : ''} onClick={onclickfun}>{name}</NavLink>
    </div>
  )
}

export default Navlink
