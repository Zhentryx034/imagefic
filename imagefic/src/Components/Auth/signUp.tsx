import React from 'react'
import logo from '../../assets/Zhentryx.png'
import img from '../../assets/Pictures/auth-img.png'
import { Link } from 'react-router-dom'

const SignUp:React.FC = () => {
  return (
    <div className='font-["Poppins"]'>
       <img src={logo} alt="" className='w-[15%] ml-20' />

       <div className="flex flex-col md:flex-row border border-gray-200">
         <img src={img} alt="" className='hidden md:block w-[70%]' />
          <div className="py-12 md:py-32 px-4 md:px-8">
            <div className="text">
              <h2 className='font-bold text-xl md:text-2xl mb-4 text-left'>Join ZHENTRYX Today</h2>
               <div className="text-base md:text-1xl">
                 <div className="text-[#474747] text-left w-full md:w-4/5 mb-4">
                  <p>
                  Show case your Moments with Style Effortlessly upload, organize, and display your photos in stunning galleries - no design skills needed
                  </p>
                </div>
                <form className="block text-left text-sm mt-8">
                  <label htmlFor="userName" className="block">Username</label>
                  <input 
                    type="text" 
                    name="userName" 
                    id="userName" 
                    placeholder='Enter your username'
                    className="my-5 w-full border border-[#D3D3D3] px-6 py-[18px] focus:outline focus:outline-[#1B10A4] focus:outline-1 rounded-[10px]" 
                  />

                  <label htmlFor="email" className="block">Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder='Enter your email'
                    className="my-5 w-full border border-[#D3D3D3] px-6 py-[18px] focus:outline focus:outline-[#1B10A4] focus:outline-1 rounded-[10px]" 
                  />

                  <label htmlFor="password" className="block">Password</label>
                  <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder='Enter your password'
                    className="my-5 w-full border border-[#D3D3D3] px-6 py-[18px] focus:outline focus:outline-[#1B10A4] focus:outline-1 rounded-[10px]" 
                  />

                  <label htmlFor="confirmPassword" className="block">Confirm Password</label>
                  <input 
                    type="password" 
                    name="confirmPassword" 
                    id="confirmPassword" 
                    placeholder='Enter your password'
                    className="my-5 w-full border border-[#D3D3D3] px-6 py-[18px] focus:outline focus:outline-[#1B10A4] focus:outline-1 rounded-[10px]" 
                  />
                    <button className='w-full bg-[#1B10A4] text-white border-none py-[18px] px-6 rounded-[10px] cursor-pointer text-sm'>Sign Up</button>
                    <div className="mt-4">
                      <p>Already a Member? <Link to="/login" className="text-[#1B10A4]">Login</Link></p>
                    </div>
                </form>
              </div>
            </div>
          </div>
       </div>
    </div>
  )
}

export default SignUp
