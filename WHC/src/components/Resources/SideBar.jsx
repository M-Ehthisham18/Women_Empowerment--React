import React from 'react'
import Navlink from '../Navlink'

const SideBar = () => {
  return (
    <div className='min-h-screen p-6 bg-[#e5e5ff] border-r-2 border-b-2 border-solid border-gray-300'>
      <h2 className="text-3xl font-bold mb-4">Resources</h2>
        <div className='flex flex-col items-start gap-y-4 text-xl font-semibold' >
          <Navlink name='Health' route='/resources-health' />
          <Navlink name='Education' route='/resources-education' />
          <Navlink name='Challenges' route='/resources-challenges'/>
          <Navlink name='Gender Equality' route='/resources-gender-equality' />
          <Navlink name='Child & Adult' route="/resources-child-and-adult"/>
        </div>
    </div>
  )
}

export default SideBar
