import React from 'react';
import { Link } from 'react-router-dom';

const Haqimizda = () => {
    return (
        <div className='w-full border-b border-b-[#00df9a] py-16 px-4'>
            <div className='max-w-[1280px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] rounded-tl-[20px] rounded-br-[20px] object-cover mx-auto my-4' src="https://176428.selcdn.ru/RosKvartal.CDN/Front.UploadedFiles/6476/f184-0eb6-4d4a-9aba-9ad94cbaf7b5/portal_13-min.jpg" alt="img_2" />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#00df9a] font-bold sm:text-2xl md:text-3xl text-xl py-2'>Klopa va boshqa zararli hashaorotlar endi yo'q deb hisoblang.</p>
                    <p className='text-[#fefefe] sm:text-xl md:text-[20px] text-[13px] py-2'>Bizning ko'p yillardan beri faoliyat olib borayotgan kompaniyamiz. Mijozlarimiz bizdan mamnun.</p>
                    <button className='text-black md:mx-0 text-[20px] w-[150px] h-[60px] font-medium rounded-2xl neon_btn bg-[#00df9a]'><Link to={'/boglanish'}>Bog'lanish</Link></button>
                </div>
            </div>
        </div>
    );
}

export default Haqimizda;
