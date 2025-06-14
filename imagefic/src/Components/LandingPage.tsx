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

const Navbar = () => {
  return (
        <section className=' relative w-full h-screen bg-cover bg-center bg-no-repeat flex flex-col '
        style={{backgroundImage: `url(${bgimage})`}} >

<div className="absolute inset-0 bg-black bg-opacity-75"></div>

<div className='z-20 flex justify-center pt-8'>
    <img src={Zhentryx} alt="" className='w-52 md:w-80 h-24 md:h-32' />
</div>
            <div className=' text-white z-20 flex flex-col max-w-[700px] flex items-start leading-normal text-left'
            style={{marginTop:'700px',marginLeft:'10px'}} >
                <h2 className='text-5xl md:text-6xl font-castoro leading-tight mb-6 justify-items-end'>
                    GALLERY OF 
                </h2>
                <h2 className='ext-5xl md:text-6xl font-castoro leading-tight mb-4'>
                LIFE AND DEATH
                </h2>
                <p className='font-roboto leading-relaxed max-w-[800px] mb-4 '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quae iure accusantium quasi laudantium voluptate repellendus nulla?
                </p>

                <div className='flex gap-4'>
                <button className='text-white border-2 rounded w-40 h-12'>
                    LOG IN
                </button>
                <button className='text-white border-0 rounded w-40 h-12 bg-[#1B10A4] ' >
                    SIGN UP
                </button>
                </div>
                <div>
                    <img src={Frame7} alt="" style={{
                        marginLeft:'500px', top:'-400px', position:'relative'
                    }} />
                </div>
            </div>
            <section className=' py-16 px-6 mt-20 ' style={{ width:'100%'}}>
        <div className='text-center mx-auto max-w-7xl border-blue-800' style={{
            width:'100%'
        }}>
            <h2 className='text-3xl font-roboto mb-4 mt-8 font-medium '>
                Create Your Best Work, with High Quality Images
            </h2>
            <p className='mx-auto mb-12 font-roboto text-lg'>
            Unique hand-picked photos, affordable HD and 4K video clips, editable vectors—and much, much more. You'll find it all, right here.
            </p>
            
            <div className='flex flex-row gap-8 justify-center mb-6'>
                <img src={image1} alt="" className=' h-auto' />
                <img src={image2} alt="" className=' h-auto' />
                <img src={image3}  alt="" className=' ' />
                </div>
            
            <div className='flex flex-row gap-8 justify-center mb-6'>
                <img src={image4} alt="" className=' h-auto' />
                <img src={image5} alt="" className=' h-auto' />
                <img src={image6}  alt=""  className=' h-auto'/>
                </div>
                
                <div className='flex gap-12 mr-12 mt-[7rem]'>
                    <img src={image8} alt=""  className=' -ml-[18rem]  '/>
                    <div className='mt-[30rem] ' >
                    <h4 className='font-roboto font-bold text-5xl'>
                    See it, Create it, <br />
                    Try it, Do it
                    </h4>
                    <p className='font-roboto text-lg mt-3'>
                        The Best Part of Gallery is <br /> discoving images and ideas <br /> from all over the world
                    </p>
                    <button className='text-white border-2 rounded w-[11rem] h-12 mt-4 font-roboto font-semibold bg-[#DB02DC] border-none'>
                    Explore
                </button>
                    </div>
                    
                </div>
            
                
                
            
        </div>

      </section>
        </section>

  )
}

export default Navbar