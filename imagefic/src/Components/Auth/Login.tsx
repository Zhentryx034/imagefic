import React from 'react'
import logo from '../../assets/Zhentryx.png'
import img from '../../assets/Pictures/auth-img.png'
import { Link } from 'react-router-dom'

const Login:React.FC = () => {
  return (
    <div className='font-["Poppins"]'>
       <img src={logo} alt="" className='w-[15%] ml-20' />

       <div className="flex flex-col md:flex-row border border-gray-200">
         <img src={img} alt="" className='hidden md:block w-[70%]' />
          <div className="py-12 md:py-32 px-4 md:px-8">
            <div className="text">
              <h2 className='font-bold text-xl md:text-2xl mb-4 text-left'>Welcome Back ⚡</h2>
               <div className="text-base md:text-1xl">
                 <div className="text-[#474747] text-left w-full md:w-4/5 mb-4">
                  <p>
                  Log in to manage your photos, update your collections, and share your best moments with the world.
                  </p>
                </div>
                <form className="block text-left text-sm mt-8">

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
                   <input type="checkbox" name="remember" id="remember" className='w-4 h-4'/>
                   <label htmlFor="remember" className='text-sm text-[#474747] ml-2 '>Remember me</label>
                   <Link to="/forgot-password" className="text-[#1B10A4] text-sm ml-36  ">Forgot Password?</Link>

                    <button className='w-full bg-[#1B10A4] mt-6 text-white border-none py-[18px] px-6 rounded-[10px] cursor-pointer text-sm'>Sign In</button>
                    <div className="mt-4">
                      <p>Don't have an account? <Link to="/signup" className="text-[#1B10A4]">Sign Up</Link></p>
                    </div>
                </form>
              </div>
            </div>
          </div>
       </div>
    </div>
  )
}

export default Login
