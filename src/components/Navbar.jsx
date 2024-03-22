import React, { useState  } from 'react';
import { HiOutlineMenuAlt1  } from "react-icons/hi";
import { AiOutlineClose  } from "react-icons/ai";
import {Link} from 'react-router-dom'

const Navbar = () => {
    const [nav, setNav] = useState(true)
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className='flex border-b border-b-[#00df9a] justify-between items-center h-24 max-w-[1340px] mx-auto px-4 text-white'>
            <h1 className='w-[350px] p-3 neon_btn text-3xl cursor-pointer tracking-widest text-[#00df9a] font-bold'><Link to={'/'}>DEZINFECTION.</Link></h1>
            <ul className='hidden md:flex'>
                <li className='mr-5 p-4 text-[18px] neon_btn cursor-pointer'><Link to={'/asosiy'}>Asosiy</Link></li>
                <li className='mr-5 p-4 text-[18px] neon_btn cursor-pointer'><Link to={'haqimizda'}>Biz haqimizda</Link></li>
                <li className='mr-5 p-4 text-[18px] neon_btn cursor-pointer'><Link to={'/xizmatlar'}>Xizmatlar</Link></li>
                <button className='text-black neon_btn text-[20px] w-[140px] h-[50px] font-medium rounded-xl bg-[#00df9a]'><Link to={'/boglanish'}>Bog'lanish</Link></button>
            </ul>
            {/* <select name="" id="">
                <option value="">rus</option>
                <option value="">uzb</option>
            </select> */}
            <div onClick={handleNav} className="neon_btn block md:hidden">
                {!nav ? <AiOutlineClose size={30}/> : <HiOutlineMenuAlt1 size={30} />}
            </div>
            <div className={!nav ? 'left-0 top-0 fixed w-[60%] border-r border-r-[#00df9a] h-full bg-[#000300] ease-in-out duration-500':"fixed left-[-100%]"}>
                <ul className='p-4 uppercase'>
                    <li className='p-4 neon_btn cursor-pointer border-b border-b-[#00df9a]'><Link to={'/asosiy'}>Asosiy</Link></li>
                    <li className='p-4 neon_btn cursor-pointer border-b border-b-[#00df9a]'><Link to={'/haqimizda'}>Biz haqimizda</Link></li>
                    <li className='p-4 neon_btn cursor-pointer border-b border-b-[#00df9a]'><Link to={'/xizmatlar'}>Xizmatlar</Link></li>
                    <li className='p-4 neon_btn cursor-pointer border-b border-b-[#00df9a]'>FAQ</li>
                    <button className='text-black neon_btn m-10 text-[20px] w-[130px] h-[40px] font-medium rounded-xl bg-[#00df9a]'><Link to={'/boglanish'}>Bog'lanish</Link></button>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
