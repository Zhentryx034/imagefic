import logo from '../../assets/Zhentryx.png'
import img from '../../assets/Pictures/auth-img.png'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../Auth/authConfig'
import { useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { useAuth } from './context/AuthContext'


const Login:React.FC = () => {
  const {login } = useAuth()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({email:"",password:"", rememberMe:false})
  const [loading, setLoading] = useState(false)
  // const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
   const {name, type, value, checked} = e.target;
   setFormData(prev => ({
    ...prev,
    [name]: type === "checkbox" ? checked : value
   }))
  }


  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try{
       const data = await loginUser(formData.email,formData.password)
  
      if (formData.rememberMe) {
        localStorage.setItem('access_token', data.access);
        localStorage.setItem('refresh_token', data.refresh);
      } else {
        sessionStorage.setItem('access_token', data.access);
        sessionStorage.setItem('refresh_token', data.refresh);
        
      }
     login(data.access, data.refresh, formData.rememberMe)
      toast.success('Login Successful')
       navigate("/dashboard")

    
    }catch(err:unknown){
      // setError(err instanceof Error ? err.message : "An error occurred")
      console.log("Login Error",err)
      setLoading(false)
       toast.error("Login failed. Please check your credentials and try again.")
    }
  }
  return (
    <div className='font-["Poppins"]'>
      <ToastContainer />
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
                    value={formData.password}
                    onChange={handleChange}
                    placeholder='Enter your password'
                    className="my-5 w-full border border-[#D3D3D3] px-6 py-[18px] focus:outline focus:outline-[#1B10A4] focus:outline-1 rounded-[10px]" 
                  />
                   <input 
                   type="checkbox" 
                   name="rememberMe" 
                   id="rememberMe" 
                   className='w-4 h-4'
                   checked={formData.rememberMe}
                   onChange={handleChange}
                   />
                   <label htmlFor="remember" className='text-sm text-[#474747] ml-2 '>Remember me</label>
                   {/* <Link to="/forgot-password" className="text-[#1B10A4] text-sm ml-36  ">Forgot Password?</Link> */}
                   

                    <button className='w-full bg-[#1B10A4] mt-6 text-white border-none py-[18px] px-6 rounded-[10px] cursor-pointer text-sm' onClick={handleSubmit}>
                      {loading ? "Logging in..." : "Sign In"}
                    </button>

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
