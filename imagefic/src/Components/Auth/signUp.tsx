import React from 'react'
import logo from '../../assets/Zhentryx.png'
import img from '../../assets/Pictures/auth-img.png'
import { Link } from 'react-router-dom'

const signUp:React.FC = () => {
  return (
    <div className='signup'>
       <img src={logo} alt="" className='page-logo' />

       <div className="container">
         <img src={img} alt="" />
          <div className="form-text">
            <div className="text">
              <div className="header-text">
                <div className="small-text">
                  <p>
                  Show case your Moments with Style Effortlessly upload, organize, and display your photos in stunning galleries - no design skills needed
                  </p>
                </div>
                <form action="#">
                  <label htmlFor="userName">Username</label>
                  <input type="text" name="userName" id="userName" placeholder='Enter your username' />

                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" placeholder='Enter your email' />

                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" id="password" placeholder='Enter your password' />

                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input type="password" name="confirmPassword" id="confirmPassword" placeholder='Enter your password' />
                    <button>Sign Up</button>
                    <div className="signup-text">
                      <p>Already a Memeber? <Link to="/login">Login</Link></p>
                    </div>
                </form>
              </div>
            </div>
          </div>
       </div>
    </div>
  )
}

export default signUp
