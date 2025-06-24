import React, { useState} from 'react'
import logo from '../../assets/Zhentryx.png'
import img from '../../assets/Pictures/auth-img.png'
import { Link } from 'react-router-dom'
import { createUser } from './authConfig'

const SignUp:React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone_number: '',
    password: '',
    confirm_password: ''
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        })
  }

  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    if(formData.password !== formData.confirm_password) {
        setError("Passwords do not match");
        throw new Error("Passwords do not match");
        return; 
      }

    try{
      await createUser(
        formData.username,
        formData.email,
        Number(formData.phone_number),
        formData.password,
        formData.confirm_password
      )
      alert('Registration Successful') 
      
    } catch (err: unknown){
      if (err instanceof Error) {
        setError(err.message || "Something went Wrong")
      } else {
        setError("Something went Wrong")
      }
    }finally{
      setLoading(false)
    }
  }


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
                    name="username" 
                    id="userName" 
                    required
                    value={formData.username}
                    onChange={handleChange}
                    placeholder='Enter your username'
                    className="my-5 w-full border border-[#D3D3D3] px-6 py-[18px] focus:outline focus:outline-[#1B10A4] focus:outline-1 rounded-[10px]" 
                  />

                  <label htmlFor="email" className="block">Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Enter your email'
                    className="my-5 w-full border border-[#D3D3D3] px-6 py-[18px] focus:outline focus:outline-[#1B10A4] focus:outline-1 rounded-[10px]" 
                  />

                  <label htmlFor="password" className="block">Password</label>
                  <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    required
                    value={formData.password}
                    onChange={handleChange}
                    placeholder='Enter your password'
                    className="my-5 w-full border border-[#D3D3D3] px-6 py-[18px] focus:outline focus:outline-[#1B10A4] focus:outline-1 rounded-[10px]" 
                  />

                  <label htmlFor="confirmPassword" className="block">Confirm Password</label>
                  <input 
                    type="password" 
                    name="confirm_password" 
                    id="confirmPassword" 
                    value={formData.confirm_password}
                    onChange={handleChange}
                    placeholder='Enter your password'
                    className="my-5 w-full border border-[#D3D3D3] px-6 py-[18px] focus:outline focus:outline-[#1B10A4] focus:outline-1 rounded-[10px]" 
                  />
                  { error && <p className='text-red-500 mb-4'> {error}</p>}
                    <button className='w-full bg-[#1B10A4] text-white border-none py-[18px] px-6 rounded-[10px] cursor-pointer text-sm' disabled={loading} onClick={handleSubmit}>{loading ? "Signing up.....": "Sign Up"}</button>
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
