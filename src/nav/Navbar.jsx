import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";;
import { Link } from "react-router-dom";

const Navbar = () => {
const logo = "https://res.cloudinary.com/dwq6bgyul/image/upload/v1740662635/ecofood-logo-template_njwbmn.png"

  return (
    <>
      {/*mobile view*/}
      <div className='flex md:hidden'>
      <div>
        <img className='w-52 pr-12' src={logo} alt="" />
      </div>
      <GiHamburgerMenu className="text-5xl text-black mt-14 ml-24" />
      <div>

      </div>
      </div>

      {/*desktop view*/}
      <main className='container lg:ml-16'>
      <div className='hidden md:block '>
        <div className='flex'>
        <div>
        <img className='w-52 pr-12' src={logo} alt="" />
        </div>
        <div className='mt-10 lg:mt-16  lg:space-x-8 flex'>
        <Link to="/"><button className='bg-[#FC8A06] rounded-full h-12 text-white'>Home</button></Link>
        <Link to="/menu"><button className='text-black h-12 '>Menu</button></Link>
        <Link to="/offers"><button className='text-black h-12 '>Special Offers</button></Link>
        <Link to="/dishes"><button className='text-black h-12 '>Dishes</button></Link>
        <Link to="order"><button className='text-black h-12'>Track Order</button></Link>
        <Link to="Signin"><button className='text-white bg-[#03081F] md:hidden lg:block lg:h-12'>Sign In / Sign Up</button>
        <button className='text-white bg-[#03081F] h-16 w-40  lg:hidden'>Sign In</button>
        </Link>
        </div>
        </div>
        
        
      </div>
      </main>
    </>
  )
}

export default Navbar
