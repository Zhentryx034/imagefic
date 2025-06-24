import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Zhentryx.png";
import userImg from "../../assets/Pictures/dashboard images/user.png";
const DashboardNav: React.FC = () => {
  return (
    
            <nav>
            <div className='flex justify-between items-center bg-white p-4 shadow-md fixed top-0 left-0 right-0 z-50 h-24'>
              <Link to='/' className='w-full'><img src={logo} alt="Zhentryx logo" className='w-[10%] ml-20' /></Link>
                <div className='flex items-center space-x-4 font-semibold cursor-pointer text-[#333] mr-12'>
                    <p className='hover:text-purple-600 hover:scale-105'>Home</p>
                    <p className='hover:text-purple-600 hover:scale-105'>Explore</p>
                    <p className='hover:text-purple-600 hover:scale-105'>Create</p>
                <img src={userImg} alt="User" className='w-10 h-10 rounded-full' />
               
                </div>
            </div>
        </nav>
  );
};

export default DashboardNav;

