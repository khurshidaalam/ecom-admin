import React, {useState,useCallback} from 'react';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import Avatar from '@material-ui/core/Avatar';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailSharpIcon from '@material-ui/icons/MailOutline';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Sidebar from "./Sidebar";

const Navbar = (props) => {
  // const [showSidebar, setShowSidebar] = useState(true);
  //   const toggleSidebar = useCallback(() => setShowSidebar(value => !value));
  // const [open, setOpen] = useState(true);

  // const handleClick =()=>{
  //   setOpen(false);
  //   console.log("clicked");
  // }

  return (
    
      <div className="bg-white border-b border-gray-300 h-20 p-4 flex justify-between items-center relative">
        <div className="sidebar-btn mr-auto text-center ">
          <button><MenuOpenIcon className="relative" /></button>
        </div>
        <div className="account flex justify-evenly items-center">
          <div className="search flex items-center relative pl-2">
            <input type="search" className="p-2 bg-gray-200 text-white rounded-3xl focus:bg-gray-300 
          focus:outline-none
          " placeholder="Search here..." />
            <SearchIcon className="absolute right-2" />
          </div>
          <div className="account-menu-btn sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden">
            <button><MoreVertIcon /></button>
          </div>
          <div className="avatar hidden sm:flex md:flex lg:flex xl:flex 2xl:flex justify-around items-center">
            <div className="relative">
              <MailSharpIcon className="ml-5 p-0" />
              <span className="absolute bg-red-500 h-2 w-2 left-10 text-white rounded-full"></span>
            </div>
            <div className="relative">
              <NotificationsNoneIcon className="ml-5 p-0" />
              <span className="absolute bg-red-500 h-2 w-2 right-1 text-white rounded-full"></span>
            </div>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" className="ml-5" />
          </div>
        </div>
      </div>
       
  );
};

export default Navbar;