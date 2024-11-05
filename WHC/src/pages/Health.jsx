import React from 'react'
import SideBar from '../components/Resources/SideBar'
import SideBarMenu from '../components/Resources/SideBarMenu'
import Content from '../components/Resources/Content'

const Health = () => {
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
    <div className='py-6 px-3'>
      
      <Content content="Health page Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, fugiat totam ex magni alias enim aperiam, quam sed perferendis voluptatibus asperiores. Maxime ullam perferendis necessitatibus ab vel repellendus quia asperiores."/>
    </div>
  </div>
  ) 
}

export default Health
