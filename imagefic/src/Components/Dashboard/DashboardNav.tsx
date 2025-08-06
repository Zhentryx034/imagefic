import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/Zhentryx.png";
// Using react-icons instead of image file
import { FaUserCircle } from "react-icons/fa";
import { logOutUser } from "../Auth/authConfig";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const DashboardNav: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOutUser();
      toast.success("Logged out successfully");
      navigate("/login");
    } catch (error) {
      toast.error("Logout failed");
      console.error("Logout error:", error);
    }
  };

  return (
    <nav>
      <ToastContainer />
      <div className='flex justify-between items-center bg-white p-4 shadow-md fixed top-0 left-0 right-0 z-50 h-24'>
        <Link to='/' className='w-full'><img src={logo} alt="Zhentryx logo" className='w-[10%] ml-20' /></Link>
        <div className='flex items-center space-x-4 font-semibold cursor-pointer text-[#333] mr-12'>
            <p className='hover:text-purple-600 hover:scale-105'>Home</p>
            <p className='hover:text-purple-600 hover:scale-105'>Explore</p>
            <p className='hover:text-purple-600 hover:scale-105'>Create</p>
            <div className="relative">
              <FaUserCircle 
                size={40} 
                className='text-gray-600 cursor-pointer hover:text-purple-600' 
                onClick={() => setDropdownOpen(!dropdownOpen)}
              />
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <button 
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNav;
