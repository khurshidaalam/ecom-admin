import React from 'react';
import Sidebar from './Sidebar';
import Navbar from "./Navbar";

const Layout = props => {
    return (
        <div className="flex">
      <Sidebar />
      <div className="relative w-full">
        <Navbar/>
      {props.children}
      </div>
    </div>
    );
};

export default Layout;