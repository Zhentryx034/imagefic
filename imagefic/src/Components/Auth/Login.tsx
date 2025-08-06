import logo from '../../assets/Zhentryx.png'
import img from '../../assets/Pictures/auth-img.png'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../Auth/authConfig'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { useAuth } from './context/AuthContext'
import { FaEyeSlash, FaEye } from 'react-icons/fa'


const Login:React.FC = () => {
  const {login } = useAuth()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({email:"",password:"", rememberMe:false})
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [apiStatus, setApiStatus] = useState<'idle' | 'connecting' | 'ready'>('idle')
  
  // Ping the API when component mounts to wake up the server
  useEffect(() => {
    const warmupApi = async () => {
      try {
        setApiStatus('connecting')
        // Simple ping to wake up the server
        await fetch('https://backend-imagfic.onrender.com/api/v1/categories/', { 
          method: 'HEAD',
          // Timeout after 5 seconds
          signal: AbortSignal.timeout(5000)
        }).catch(() => {
          // Silently catch any errors - the main goal is just to wake up the server
          console.log('API warmup completed')
        })
        setApiStatus('ready')
      } catch (err) {
        // Even if ping fails, still mark as ready to allow login attempts
        console.log('API warmup failed, but proceeding anyway')
        setApiStatus('ready')
      }
    }
    
    warmupApi()
  }, [])

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
    
    // Show an immediate toast that login is in progress
    const loginToast = toast.loading('Logging in... Please wait')
    
    try{
      // Call login API with timeout
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 20000) // 20 second timeout
      
      const data = await loginUser(formData.email, formData.password, controller.signal)
      
      clearTimeout(timeoutId)
      
      // Store tokens based on remember me preference
      if (formData.rememberMe) {
        localStorage.setItem('access_token', data.access);
        localStorage.setItem('refresh_token', data.refresh);
        // Clear session storage to avoid duplicate tokens
        sessionStorage.removeItem('access_token');
        sessionStorage.removeItem('refresh_token');
      } else {
        sessionStorage.setItem('access_token', data.access);
        sessionStorage.setItem('refresh_token', data.refresh);
        // Clear local storage to ensure tokens aren't persisted
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
      }
      
      // Update auth context
      login(data.access, data.refresh, formData.rememberMe)
      
      // Update the existing toast instead of creating a new one
      toast.update(loginToast, { 
        render: 'Login successful! Redirecting...', 
        type: 'success',
        isLoading: false,
        autoClose: 1000
      })
      
      // Navigate after a short delay to allow the toast to be seen
      setTimeout(() => navigate("/dashboard"), 500)
    } catch(err:unknown) {
      console.log("Login Error", err)
      setLoading(false)
      
      // Update the existing toast to show the error
      toast.update(loginToast, { 
        render: err instanceof Error && err.message === 'Aborted' 
          ? 'Login timed out. Please try again.' 
          : 'Login failed. Please check your credentials and try again.',
        type: 'error',
        isLoading: false,
        autoClose: 3000
      })
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
                  <div className="relative my-5">
                    <input 
                      type={showPassword ? "text" : "password"} 
                      name="password" 
                      id="password" 
                      value={formData.password}
                      onChange={handleChange}
                      placeholder='Enter your password'
                      className="w-full border border-[#D3D3D3] px-6 py-[18px] focus:outline focus:outline-[#1B10A4] focus:outline-1 rounded-[10px]" 
                    />
                    <button 
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                    </button>
                  </div>
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
                   

                    <button 
                      className={`w-full mt-6 text-white border-none py-[18px] px-6 rounded-[10px] text-sm ${
                        loading || apiStatus === 'connecting' 
                          ? 'bg-[#5d54c2] cursor-not-allowed' 
                          : 'bg-[#1B10A4] cursor-pointer hover:bg-[#150d8a]'
                      }`} 
                      onClick={handleSubmit}
                      disabled={loading || apiStatus === 'connecting'}
                    >
                      {loading ? "Logging in..." : 
                       apiStatus === 'connecting' ? "Preparing login..." : 
                       "Sign In"}
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
