import React from 'react';
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaInstagramSquare,
    FaTwitterSquare,
    FaGithubSquare,
    FaCopyright,
    FaTelegram
} from 'react-icons/fa'
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='max-w-[1280px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 items-center text-gray-300 border-t border-t-[#00df9a]'>
            <h1 className='w-[310px] neon_btn p-3 text-3xl tracking-widest text-[#00df9a] font-bold '><Link to={'/'}>DEZINFECTION.</Link></h1>
            <p className='py-4 text-[17px]'>Bizni ijtimoiy tarmoqlar orqali kuzatib boring.</p>
            <p><span className='text-[#00df9a]'>Tel :</span> +998 93 697 90 67</p>
            <div className='flex md:w-[70%] my-6 justify-between'>
                <MdEmail className='text-[#00df9a] hover:scale-105 duration-300 neon_btn' size={35}/>
                <FaFacebookSquare className='text-[#00df9a] hover:scale-105 duration-300 neon_btn' size={35} />
                <FaInstagramSquare className='text-[#00df9a] hover:scale-105 duration-300 neon_btn' size={35} />
                <FaTwitterSquare className='text-[#00df9a] hover:scale-105 duration-300 neon_btn' size={35} />
                <a href="https://github.com/KamolJureyev"><FaGithubSquare className='text-[#00df9a] hover:scale-105 duration-300 neon_btn' size={35} /></a>
                <a href="https://t.me/portfolio_kmj"><FaTelegram className='text-[#00df9a] hover:scale-105 duration-300 neon_btn' size={35} /></a>
            </div>
            <p className='flex items-center w-[260px] justify-between tracking-tight'><FaCopyright />copyright <span className='text-[17px] text-[#00df9a]'>Kamol Juraev</span> 2024.</p>
        </div>
    );
}
// 
export default Footer;
