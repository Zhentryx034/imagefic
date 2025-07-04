import React from 'react'
import Zhentryx from '../assets/Zhentryx.png'
import bgimage from '../assets/bgimage.png'
import Frame7 from '../assets/Frame 761.png'
import image1 from '../assets/Pictures/image1.png'
import image2 from '../assets/Pictures/image2.png'
import image3 from '../assets/Pictures/image3.png'
import image4 from '../assets/Pictures/image4.png'
import image5 from '../assets/Pictures/image5.png'
import image6 from '../assets/Pictures/image6.png'
import image8 from '../assets/Pictures/image8.png'
import { Link } from 'react-router-dom';
import Footer from './Footer'


const Navbar:React.FC = () => {
  return (
        <section className=' relative w-full h-[150vh] sm:h-[100vh] h-[100vh] bg-cover bg-center bg-no-repeat flex flex-col 'style={{backgroundImage: `url(${bgimage})`, backgroundPosition:'center'}} >

            <div className="absolute inset-0 bg-black bg-opacity-75"></div>

            <div className='z-20 flex justify-center pt-8'>
                <img src={Zhentryx} alt="" className='w-40 md:w-60 lg:w-72 xl:w-80 h-auto' />
            </div>

            <div className=' sm:text-white sm:h-[10vh]  z-20 flex flex-col items-start max-w-[100%] sm:max-w-[600px] md:max-w-[700px] px-4 sm:px-6 md:px-10 mt-20 md:mt-32 lg:mt-40'style={{marginTop:'600px',marginLeft:'9px'}} >
                <div className='mt-[-25rem] sm:mt-[-13rem]'>
                        <h2 className='text-5xl text-left sm:text-5xl md:text-6xl font-castoro mb-4  sm:mb-0 text-white'>
                            GALLERY OF 
                        </h2>
                        <h2 className='text-5xl text-left sm:text-5xl md:text-6xl font-castoro mb-4 text-white'>
                        LIFE AND DEATH
                        </h2>
                        <p className='text-left text-white font-roboto leading-relaxed mb-4 max-w-[800px] text-sm sm:text-base mr-16'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quae iure accusantium quasi laudantium voluptate repellendus nulla?
                        </p>

                        <div className='flex gap-4'>
                        <button className='text-white  border-2 rounded w-40 h-12 bg-grey-500 hover:bg-white hover:text-black '>
                        <Link to='/login'>LOG IN</Link> 
                        </button>
                        <button className='text-white border-0 rounded w-40 h-12 bg-[#1B10A4] hover:bg-[#1B10A5]/80 ' >
                        <Link to='/signup'>SIGN UP </Link>
                        </button>
                        </div>
                </div>
                
                <div className='mt-10'>
                    <img src={Frame7} alt="" className='sm:hidden md:block relative mx-auto w-48 md:w-64 lg:w-80 xl:w-[400px] -top-40 md:-top-72 ' style={{
                        marginLeft:'550px', top:'-400px', position:'relative'
                    }} />
                </div>
            </div>
            <section className=' py-16 px-4 sm:px-6 md:px-10 mt-20 w-full ' style={{ width:'100%'}}>
        <div className='text-center mx-auto max-w-7xl border-blue-800' style={{
            width:'100%'
        }}>
            <h2 className='text-xl sm:text-2xl md:text-3xl font-roboto mb-4 mt-8 font-medium '>
                Create Your Best Work, with High Quality Images
            </h2>
            <p className='font-roboto text-sm sm:text-base mb-12'>
            Unique hand-picked photos, affordable HD and 4K video clips, editable vectors—and much, much more. You'll find it all, right here.
            </p>
            
            <div className='grid grid-cols-2 sm:grid-cols-1 md:grid-cols-3 gap-4 mb-6'>
                <img src={image1} alt="" className=' h-auto sm:w-full md:w-full lg:w-full xl:w-full' />
                <img src={image2} alt="" className=' h-auto sm:w-full md:w-full lg:w-full xl:w-full' />
                <img src={image3}  alt="" className=' sm:w-full md:w-full lg:w-full xl:w-full' />
                <img src={image4} alt="" className=' h-auto sm:w-full md:w-full lg:w-full xl:w-full' />
                <img src={image5} alt="" className=' h-auto sm:w-full md:w-full lg:w-full xl:w-full' />
                <img src={image6}  alt=""  className=' h-auto sm:w-full md:w-full lg:w-full xl:w-full'/>
                </div>                
                
                <div className='flex flex-col lg:flex-row gap-12 items-center justify-center mt-20'>
                    <img src={image8} alt=""  className=' -ml-[18rem] sm:ml-0  '/>
                    <div className='mt-[30rem] sm:mt-0' >
                        <h4 className='font-roboto font-bold text-3xl sm:text-4xl md:text-5xl '>
                        See it, Create it, <br />
                        Try it, Do it
                        </h4>
                        <p className='font-roboto text-lg sm:text-base mt-3 '>
                            The Best Part of Gallery is <br /> discoving images and ideas <br /> from all over the world
                        </p>
                        <button className='text-white border-2 rounded w-[11rem] h-12 mt-4 font-roboto font-semibold bg-[#DB02DC] hover:bg-[#DB02DC]/70 border-none'>
                        Explore
                    </button>
                    </div>
                    
                </div>
            
                
                
            
        </div>

      </section>
      <Footer />
    </section>
        

  )
}

export default Navbar