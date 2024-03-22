import React from 'react';
import $ from "jquery";



const Boglanish = () => {
    var telegram_bot_id = "6924167937:AAG8ZldKwZSHvTdrnq_4F1u4kaIM4XQScy4";
    var chat_id = 1167031824;
    var u_name, number_1;
    var ready = function () {
        u_name = document.getElementById("name").value;
        number_1 = document.getElementById("number").value;
        // message = "Ismi: " + u_name + "\nNumber: " + number_1;
    };
    var sendtelegram = function () {
        ready();
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "cache-control": "no-cache"
            },
            "data": JSON.stringify({
                "chat_id": chat_id,
                // "text": message
            })
        };
        $.ajax(settings).done(function(response) {
            console.log(response);
        });
        document.getElementById("name").value = "";
        document.getElementById("number").value = "";
        return false;
    };
    return (
        <div className='w-full py-16'>
            <div className='max-w-[1280px] mx-10 grid sm:grid-cols-2 gap-3'>
                <div>
                    <img className='w-[450px] h-[360px] object-cover rounded-tl-[30px] rounded-br-[30px]' src="https://bezbukashek.ru/wp-content/uploads/2023/08/01x6c1bmdtz0b3la9.jpg" alt="" />
                </div>
                <form className='flex flex-col items-center w-[300px] h-[230px] justify-between' action="" method='get'>
                    <div className='w-[250px] h-[130px] flex flex-col items-center justify-between'>
                        <input id='name' required type="text" placeholder='Ismingizni kiriting:' className='p-3 flex w-[300px] rounded-md text-black' />
                        <input id='number' required type="number" placeholder='+998 93 xxx zz ww' className='p-3 flex w-[300px] rounded-md text-black' />
                    </div>
                    <button onClick={sendtelegram} type='submit' className='text-black neon_btn text-[20px] w-[140px] h-[50px] font-medium rounded-md bg-[#00df9a] my-6 py-3'>Bog'lanish</button>
                </form>
            </div>
        </div>
    );
}

export default Boglanish;

