import React from 'react';
import { Link } from 'react-router-dom';

const Asosiy = () => {
    return (
        <div className='max-w-[1280px] h-[850px] w-full mx-auto flex flex-col items-center border-b border-b-[#00df9a]'>
            <h1 className='text-[#00df9a] sm:text-5xl  md:text-6xl text-4xl text-center font-bold py-6'>Dizinfeksiya xizmati</h1>
            <img className='object-cover rounded-xl w-[1200px] h-[500px]' src="https://static.tildacdn.com/tild6437-3663-4362-b533-313035653039/exterminator-white-p.jpg" alt="asosiy_png" />
            <div className='flex flex-col items-center justify-between w-[90%]  h-[200px] pt-5'>
                <p className='text-white sm:text-[20px]  md:text-2xl text-[15px] text-center'>
                    Biz Toshkentda 10 yildan beri professional
                    dizinfeksiya ishlarini
                    olib boramiz,
                    shuning uchun birinchi marta
                    zararkunandalardan qanday qutilishni bilamiz.
                </p>
                <button className='text-black neon_btn text-[20px] w-[150px] h-[60px] font-medium rounded-2xl bg-[#00df9a]'><Link to={'/boglanish'}>Bog'lanish</Link></button>
            </div>
        </div>
    );
}

export default Asosiy;
