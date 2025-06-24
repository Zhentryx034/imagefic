import React from 'react';
import logo from '../../assets/Zhentryx.png';
import userImg from '../../assets/Pictures/dashboard images/user.png'
import img1 from '../../assets/Pictures/dashboard images/dashboard-img (1).png'
import img2 from '../../assets/Pictures/dashboard images/dashboard-img (6).png'
import img3 from '../../assets/Pictures/dashboard images/dashboard-img (5).png' 
import img4 from '../../assets/Pictures/dashboard images/dashboard-img (4).png'
import img5 from '../../assets/Pictures/dashboard images/dashboard-img (3).png'
import img6 from '../../assets/Pictures/dashboard images/dashboard-img (2).png'

const Dashboard: React.FC = () => {
    const items = [
        {img: img1, title: "Presentation" },
        {img: img2, title: "Cars" },
        {img: img3, title: "Illustration" },
        {img: img4, title: "Art" },
        {img: img5, title: "Sport" },
        {img: img6, title: "Nature" }
    ]
  return (
     <div className='font-["Poppins"] bg-white h-screen'>
        <nav>
            <div className='flex justify-between items-center bg-white p-4 shadow-md fixed top-0 left-0 right-0 z-50 h-24'>
                <img src={logo} alt="Logo" className='w-[10%] ml-20' />
                <div className='flex items-center space-x-4 font-semibold cursor-pointer text-[#333] mr-4'>
                    <p className='hover:text-purple-600 hover:scale-105'>Home</p>
                    <p className='hover:text-purple-600 hover:scale-105'>Explore</p>
                    <p className='hover:text-purple-600 hover:scale-105'>Create</p>
                <img src={userImg} alt="User" className='w-10 h-10 rounded-full' />
               
                </div>
            </div>
        </nav>
        <div className='mt-36 pl-6 pr-6 '>
            <h1 className='text-[36px] font-bold mt-8 mb-6 text-left pl-8 '>Dashboard</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 p-6 bg-white'>
                {items.map((item, index) => (
                    <div key={index} className=' overflow-hidden'>
                        <img src={item.img} alt={item.title} className='w-[100%] h-68 object-cover rounded-lg shadow-md hover:scale-105' />
                        <div className='p-4'>
                            <h2 className='text-[26px] font-semibold text-[#333]'>{item.title}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
     </div>
  );
}

export default Dashboard;