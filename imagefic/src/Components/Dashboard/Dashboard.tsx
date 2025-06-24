import React from 'react';
import logo from '../../assets/Zhentryx.png';
import userImg from '../../assets/Pictures/dashboard images/user.png'

const Dashboard: React.FC = () => {
  return (
     <div className='font-["Poppins"] bg-[#F5F5F5] h-screen'>
        <nav>
            <div className='flex justify-between items-center bg-white p-4 shadow-md fixed top-0 left-0 right-0 z-50 h-24'>
                <img src={logo} alt="Logo" className='w-[15%] ml-20' />
                <div className='flex items-center space-x-4 font-semibold cursor-pointer text-[#333] mr-4'>
                    <p>Home</p>
                    <p>Explore</p>
                    <p>Create</p>
                <img src={userImg} alt="User" className='w-10 h-10 rounded-full' />
               
                </div>
            </div>
        </nav>
     </div>
  );
}

export default Dashboard;