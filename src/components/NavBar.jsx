import { useState } from 'react'
import {AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs'
import { FaUserFriends, FaWallet } from 'react-icons/fa'
import { MdFavorite, MdHelp } from 'react-icons/md'
import { TbTruckDelivery } from 'react-icons/tb'

const NavBar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = ()=>{
        setNav(!nav)
    }
  return (
    <div className='max-w-[1040px] mx-auto flex justify-between items-center p-4'>
        {/* left side */}
        <div className='flex items-center '>
            <div onClick={handleNav} className=' cursor-pointer'>
                <AiOutlineMenu size={30} />

            </div>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
                Best <span className='font-bold'>Eats</span>
            </h1>
            <div className='hidden lg:flex items-center bg-gray-200 rounded-full text-[14px]'>
                <p className='bg-black text-white rounded-full p-2'>Delivery</p>
                <p className='p-2'>Pickup</p>
            </div>
        </div>
        {/* search input */}
        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
            <AiOutlineSearch size={25} />
            <input className='bg-transparent w-full p-2 focus:outline-none' type="text"  placeholder='Search foods'/>
        </div>

        {/* card button */}

        <button className='py-2 hidden md:flex items-center bg-black text-white rounded-full px-4'>
            <BsFillCartFill size={20} className='mr-2'/> Cart
        </button>

        {/* mobile menu */}
        {/* overlay */}
        {
            nav?<div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0 duration-100'></div>: ''
        }
        
        {/* side drawer menu */}
        <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-500 delay-100' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-500'}>
            <AiOutlineClose onClick={handleNav} size={30} className='absolute top-4 right-4 cursor-pointer'/>
            <h1 className='text-2xl p-4'>
                Best <span className='font-bold'>Eats</span>
            </h1>
            <nav>
                <ul className='flex flex-col p-4 text-gray-800'>
                    <li className='text-xl py-4 flex items-center'>
                        <TbTruckDelivery size={25} className='mr-4'/> Orders
                    </li>

                    <li className='text-xl py-4 flex items-center'>
                        <MdFavorite size={25} className='mr-4'/> Favorites
                    </li>

                    <li className='text-xl py-4 flex items-center'>
                        <FaWallet size={25} className='mr-4'/> Wallet
                    </li>

                    <li className='text-xl py-4 flex items-center'>
                        <MdHelp size={25} className='mr-4'/> Help
                    </li>

                    <li className='text-xl py-4 flex items-center'>
                        <AiFillTag size={25} className='mr-4'/> Promotions
                    </li>

                    <li className='text-xl py-4 flex items-center'>
                        <BsFillSaveFill size={25} className='mr-4'/> Bests ones
                    </li>

                    <li className='text-xl py-4 flex items-center'>
                        <FaUserFriends size={25} className='mr-4'/> Invite Friends
                    </li>
                </ul>
            </nav>

        </div>
    </div>
  )
}

export default NavBar