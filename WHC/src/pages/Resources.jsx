import React from "react";
import SideBarMenu from '../components/Resources/SideBarMenu'
import SideBar from "../components/Resources/SideBar";
import Content from "../components/Resources/Content"

const Resources = () => {
  return <div className="grid max-lg:grid-cols-[300px_1fr] grid-cols-1 ">
    <div>
      <aside className="max-lg:hidden">
        <SideBarMenu/>
      </aside>     
  <aside className="hidden max-lg:block">
    
        <SideBar/>
      </aside>
    </div>
    <div className="bg-white">
      <Content content='main data'/>
    </div>
  </div>;
};

export default Resources;
