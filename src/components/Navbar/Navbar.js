import React from 'react';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import Avatar from '@material-ui/core/Avatar';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailSharpIcon from '@material-ui/icons/MailOutline';
import SearchIcon from '@material-ui/icons/Search';

const Navbar = () => {
  return (
    <div className="bg-white border-b border-gray-300 p-4 flex justify-between items-center">
      <div className="sidebar-btn mr-auto text-center">
        <MenuOpenIcon className="p-0" />
      </div>
      <div className="account flex justify-around items-center">
        <div className="search flex items-center relative">
          <input type="search" className="p-2 bg-gray-200 text-white rounded-3xl focus:bg-gray-300 
          focus:outline-none
          " placeholder="Search here..." />
          <SearchIcon className="absolute right-2"/>
        </div>
        <div className="avatar flex justify-around items-center">
          <div className="relative">
            <MailSharpIcon className="ml-5 p-0"/>
          <span className="absolute bg-red-500 h-2 w-2 left-10 text-white rounded-full"></span>
          </div>
          <div className="relative">
            <NotificationsNoneIcon className="ml-5 p-0"/>
          <span className="absolute bg-red-500 h-2 w-2 right-1 text-white rounded-full"></span>
          </div>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" className="ml-5" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;