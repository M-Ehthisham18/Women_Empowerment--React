import React from 'react'
import SideBar from '../components/Resources/SideBar'
import SideBarMenu from '../components/Resources/SideBarMenu'
import Content from '../components/Resources/Content'
const Challenges = () => {
  
  return (
    <div className="grid max-lg:grid-cols-[300px_1fr] grid-cols-1 ">
    <div>
      <aside className="max-lg:hidden">
        <SideBarMenu/>
      </aside>     
  <aside className="hidden max-lg:block">
        <SideBar />
      </aside>
    </div>
    <div>
      {/* abuse and harsment */}
      <Content content="Challenges page"/>
    </div>
  </div>
  )
}

export default Challenges
