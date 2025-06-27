import React from 'react'

const Footer:React.FC = () => {
  return (
    <footer className='bg-[#F6F6F6] pt-4 pb-4  text-black flex justify-center items-center gap-4'>
        <div className='font-semibold cursor-pointer hover:decoration-2 hover:underline transition-all duration-300'>
            Terms and Conditions
        </div>
        <div className='font-semibold cursor-pointer hover:decoration-2 hover:underline transition-all duration-300'>
           Policy
        </div>
        <div className='font-semibold cursor-pointer hover:decoration-2 hover:underline transition-all duration-300'>
            Help
        </div>
    </footer>
  )
}

export default Footer
