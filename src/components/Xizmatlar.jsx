import React from 'react';
import {Link} from 'react-router-dom'

const Xizmatlar = () => {
    return (
        <div className='w-full py-[5rem] bg-white border-b-8 border-b-[#00df9a]'>
            <h1 className='text-[35px] text-[#00df9a] mx-[30px]'>Xizmatlarimiz</h1>
            <div className='max-w-[1280px] mx-8 grid md:grid-cols-3 gap-8'>
                <div className='w-full border bg-[#dfe3ee] shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300 items-center'>
                    <img className='w-[120px] h-[120px] rounded-[50%] shadow-lg object-cover' src="https://www.nicepng.com/png/detail/112-1129691_bed-bug-png-bed-bug-image-png.png" alt="klopa" />
                    <p className="text-2xl font-bold text-center py-8">Klopani qanday yo'q qilamiz ?</p>
                    <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, beatae?Lorem ipsum dolor sit amet.</p>
                    <button className='text-black neon_btn md:mx-0 text-[20px] w-[150px] h-[60px] font-medium rounded-2xl bg-[#00df9a]'><Link to={'/boglanish'}>Bog'lanish</Link></button>
                </div>
                <div className='w-full border bg-[#eed5d1] shadow-xl flex flex-col p-4 my-8 rounded-lg  hover:scale-105 duration-300 items-center'>
                    <img className='w-[120px] h-[120px] rounded-[50%] shadow-lg object-cover' src="https://avatars.mds.yandex.net/i?id=335157e0811d141e0fa39da92f940ce6ad07b161-4570529-images-thumbs&n=13" alt="klopa" />
                    <p className="text-2xl font-bold text-center py-8">Tarakanni qanday yo'q qilamiz ?</p>
                    <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, beatae?Lorem ipsum dolor sit amet.</p>
                    <button className='text-black neon_btn md:mx-0 text-[20px] w-[150px] h-[60px] font-medium rounded-2xl bg-[#00df9a]'><Link to={'/boglanish'}>Bog'lanish</Link></button>
                </div>
                <div className='w-full border bg-[#e0ddca] shadow-xl flex flex-col p-4 my-8 rounded-lg  hover:scale-105 duration-300 items-center'>
                    <img className='w-[120px] h-[120px] rounded-[50%] shadow-lg object-cover' src="https://cdn-st1.rtr-vesti.ru/vh/pictures/it/703/744.jpg" alt="klopa" />
                    <p className="text-2xl font-bold text-center py-8">Kalamushlarni qanday yo'q qilamiz ?</p>
                    <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, beatae?Lorem ipsum dolor sit amet.</p>
                    <button className='text-black neon_btn md:mx-0 text-[20px] w-[150px] h-[60px] font-medium rounded-2xl bg-[#00df9a]'><Link to={'/boglanish'}>Bog'lanish</Link></button>
                </div>
                <div className='w-full border bg-[#f1d39d] shadow-xl flex flex-col p-4 my-8 rounded-lg  hover:scale-105 duration-300 items-center'>
                    <img className='w-[120px] h-[120px] rounded-[50%] shadow-lg object-cover' src="https://i.pinimg.com/originals/38/6f/d6/386fd68c48b2ba44a03246c034610bba.jpg" alt="klopa" />
                    <p className="text-2xl font-bold text-center py-8">Chayonlarni qanday yo'q qilamiz ?</p>
                    <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, beatae?Lorem ipsum dolor sit amet.</p>
                    <button className='text-black neon_btn md:mx-0 text-[20px] w-[150px] h-[60px] font-medium rounded-2xl bg-[#00df9a]'><Link to={'/boglanish'}>Bog'lanish</Link></button>
                </div>
                <div className='w-full border bg-[#a5dbdd] shadow-xl flex flex-col p-4 my-8 rounded-lg  hover:scale-105 duration-300 items-center'>
                    <img className='w-[120px] h-[120px] rounded-[50%] shadow-lg object-cover' src="https://avatars.mds.yandex.net/i?id=de6120fed6cd3160484ea3afab51ac5318693fa9-8497159-images-thumbs&ref=rim&n=33&w=325&h=200" alt="klopa" />
                    <p className="text-2xl font-bold text-center py-8">Burgalarni qanday yo'q qilamiz ?</p>
                    <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, beatae?Lorem ipsum dolor sit amet.</p>
                    <button className='text-black neon_btn md:mx-0 text-[20px] w-[150px] h-[60px] font-medium rounded-2xl bg-[#00df9a]'><Link to={'/boglanish'}>Bog'lanish</Link></button>
                </div>
            </div>
        </div>
    );
}

export default Xizmatlar;
