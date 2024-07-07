import React, {useState} from 'react';
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import { playSound, openUrl } from '../../../utils/misc';
import './Store.css'

export default function Store() {

    return (
        <div className='flex h-screen w-screen max-w-screen select-none bg-black bg-opacity-50 bg-center bg-no-repeat bg-cover p-[3%]'>
            <div className='flex flex-col gap-[3%] h-auto w-full max-w-screen scroll-auto touch-auto overflow-auto'>
            <div className='w-full h-[40%] flex flex-col 800:gap-[10px] 1280:gap-[12px] 1600:gap-[15px] 1920:gap-[18px]'>
                    <h1 className='text-black uppercase text-[10px] 800:text-[10px] 1024:text-[12px] 1280:text-[15px] 1440:text-[16px] 1600:text-[18px] 1920:text-[23px] 2560:text-[25px] rounded font-light font-Countach'><span className='bg-extreme-light-grey px-[0.5%] pb-1 rounded-sm'>Coins</span></h1>
                    <div className="grid grid-cols-4 grid-rows-2 gap-x-[1%] gap-y-[5%] w-full pb-[1%] h-full">
                        <div className='bg-gradient-to-tr from-[#1f1f1e] to-[#3b3b3a] flex flex-row justify-between border border-[#636763] cursor-pointer hover:border-light-blue rounded p-[5%]'
                        onClick={() => {
                            openUrl('https://website.revoltpvp.com/category/points');
                            playSound('click_loby');
                        }}
                        onMouseEnter={() => playSound('hover')}
                        >
                            <div className='flex flex-col w-[50%] items-center justify-center text-right gap-[9%]'>
                                <div className='flex flex-row gap-[4%] w-full justify-center'>
                                    <h1 className='text-[#9aa39a] 800:text-[15px] 1280:text-[20px] 1600:text-[25px] 1920:text-[30px] 2560:text-[35px] font-Countach tracking-widest leading-none'>200</h1>
                                    <div className='bg-points bg-contain bg-center bg-no-repeat 2560:w-[35px] 2560:h-[35px] 1920:w-[30px] 1920:h-[30px] 1600:w-[25px] 1600:h-[25px] 1280:w-[20px] 1280:h-[20px] 800:w-[15px] 800:h-[15px] mt-[1%]'></div>
                                </div>
                                <h1 className='text-[#9aa39a] 800:text-[13px] 1280:text-[17px] 1600:text-[20px] 1920:text-[22px] 2560:text-[25px] font-light font-Countach leading-none'>€2.39</h1>
                            </div>
                            <div className='w-[50%] bg-100_points bg-contain bg-center bg-no-repeat'></div>
                        </div>
                        <div className='bg-gradient-to-tr from-[#1f1f1e] to-[#3b3b3a] flex flex-row justify-between border border-[#636763] cursor-pointer hover:border-light-blue rounded p-[5%]'
                        onClick={() => {
                            openUrl('https://website.revoltpvp.com/category/points');
                            playSound('click_loby');
                        }}
                        onMouseEnter={() => playSound('hover')}
                        >
                            <div className='flex flex-col w-[50%] items-center justify-center text-right gap-[9%]'>
                                <div className='flex flex-row gap-[4%] w-full justify-center'>
                                    <h1 className='text-[#9aa39a] 800:text-[15px] 1280:text-[20px] 1600:text-[25px] 1920:text-[30px] 2560:text-[35px] font-Countach tracking-widest leading-none'>500</h1>
                                    <div className='bg-points bg-contain bg-center bg-no-repeat 2560:w-[35px] 2560:h-[35px] 1920:w-[30px] 1920:h-[30px] 1600:w-[25px] 1600:h-[25px] 1280:w-[20px] 1280:h-[20px] 800:w-[15px] 800:h-[15px] mt-[1%]'></div>
                                </div>
                                <h1 className='text-[#9aa39a] 800:text-[13px] 1280:text-[17px] 1600:text-[20px] 1920:text-[22px] 2560:text-[25px] font-light font-Countach leading-none'>€5.99</h1>
                            </div>
                            <div className='w-[50%] bg-100_points bg-contain bg-center bg-no-repeat'></div>
                        </div>
                        <div className='bg-gradient-to-tr from-[#1f1f1e] to-[#3b3b3a] flex flex-row justify-between border border-[#636763] cursor-pointer hover:border-light-blue rounded p-[5%]'
                        onClick={() => {
                            openUrl('https://website.revoltpvp.com/category/points');
                            playSound('click_loby');
                        }}
                        onMouseEnter={() => playSound('hover')}
                        >
                            <div className='flex flex-col w-[50%] items-center justify-center text-right gap-[9%]'>
                                <div className='flex flex-row gap-[4%] w-full justify-center'>
                                    <h1 className='text-[#9aa39a] 800:text-[15px] 1280:text-[20px] 1600:text-[25px] 1920:text-[30px] 2560:text-[35px] font-Countach tracking-widest leading-none'>1,100</h1>
                                    <div className='bg-points bg-contain bg-center bg-no-repeat 2560:w-[35px] 2560:h-[35px] 1920:w-[30px] 1920:h-[30px] 1600:w-[25px] 1600:h-[25px] 1280:w-[20px] 1280:h-[20px] 800:w-[15px] 800:h-[15px] mt-[1%]'></div>
                                </div>
                                <h1 className='text-[#9aa39a] 800:text-[13px] 1280:text-[17px] 1600:text-[20px] 1920:text-[22px] 2560:text-[25px] font-light font-Countach leading-none'>€11.99</h1>
                            </div>
                            <div className='w-[50%] bg-1100_points bg-contain bg-center bg-no-repeat'></div>
                        </div>
                        <div className='bg-gradient-to-tr from-[#1f1f1e] to-[#3b3b3a] flex flex-row justify-between border border-[#636763] cursor-pointer hover:border-light-blue rounded p-[5%]'
                        onClick={() => {
                            openUrl('https://website.revoltpvp.com/category/points');
                            playSound('click_loby');
                        }}
                        onMouseEnter={() => playSound('hover')}
                        >
                            <div className='flex flex-col w-[50%] items-center justify-center text-right gap-[9%]'>
                                <div className='flex flex-row gap-[4%] w-full justify-center'>
                                    <h1 className='text-[#9aa39a] 800:text-[15px] 1280:text-[20px] 1600:text-[25px] 1920:text-[30px] 2560:text-[35px] font-Countach tracking-widest leading-none'>2,400</h1>
                                    <div className='bg-points bg-contain bg-center bg-no-repeat 2560:w-[35px] 2560:h-[35px] 1920:w-[30px] 1920:h-[30px] 1600:w-[25px] 1600:h-[25px] 1280:w-[20px] 1280:h-[20px] 800:w-[15px] 800:h-[15px] mt-[1%]'></div>
                                </div>
                                <h1 className='text-[#9aa39a] 800:text-[13px] 1280:text-[17px] 1600:text-[20px] 1920:text-[22px] 2560:text-[25px] font-light font-Countach leading-none'>€23.99</h1>
                            </div>
                            <div className='w-[50%] bg-2400_points bg-contain bg-center bg-no-repeat'></div>
                        </div>
                        <div className='bg-gradient-to-tr from-[#1f1f1e] to-[#3b3b3a] flex flex-row justify-between border border-[#636763] cursor-pointer hover:border-light-blue rounded p-[5%]'
                        onClick={() => {
                            openUrl('https://website.revoltpvp.com/category/points');
                            playSound('click_loby');
                        }}
                        onMouseEnter={() => playSound('hover')}
                        >
                            <div className='flex flex-col w-[50%] items-center justify-center text-right gap-[9%]'>
                                <div className='flex flex-row gap-[4%] w-full justify-center'>
                                    <h1 className='text-[#9aa39a] 800:text-[15px] 1280:text-[20px] 1600:text-[25px] 1920:text-[30px] 2560:text-[35px] font-Countach tracking-widest leading-none'>5,000</h1>
                                    <div className='bg-points bg-contain bg-center bg-no-repeat 2560:w-[35px] 2560:h-[35px] 1920:w-[30px] 1920:h-[30px] 1600:w-[25px] 1600:h-[25px] 1280:w-[20px] 1280:h-[20px] 800:w-[15px] 800:h-[15px] mt-[1%]'></div>
                                </div>
                                <h1 className='text-[#9aa39a] 800:text-[13px] 1280:text-[17px] 1600:text-[20px] 1920:text-[22px] 2560:text-[25px] font-light font-Countach leading-none'>€47.99</h1>
                            </div>
                            <div className='w-[50%] bg-5000_points bg-contain bg-center bg-no-repeat'></div>
                        </div>
                        <div className='bg-gradient-to-tr from-[#1f1f1e] to-[#3b3b3a] flex flex-row justify-between border border-[#636763] cursor-pointer hover:border-light-blue rounded p-[5%]'
                        onClick={() => {
                            openUrl('https://website.revoltpvp.com/category/points');
                            playSound('click_loby');
                        }}
                        onMouseEnter={() => playSound('hover')}
                        >
                            <div className='flex flex-col w-[50%] items-center justify-center text-right gap-[9%]'>
                                <div className='flex flex-row gap-[4%] w-full justify-center'>
                                    <h1 className='text-[#9aa39a] 800:text-[15px] 1280:text-[20px] 1600:text-[25px] 1920:text-[30px] 2560:text-[35px] font-Countach tracking-widest leading-none'>9,500</h1>
                                    <div className='bg-points bg-contain bg-center bg-no-repeat 2560:w-[35px] 2560:h-[35px] 1920:w-[30px] 1920:h-[30px] 1600:w-[25px] 1600:h-[25px] 1280:w-[20px] 1280:h-[20px] 800:w-[15px] 800:h-[15px] mt-[1%]'></div>
                                </div>
                                <h1 className='text-[#9aa39a] 800:text-[13px] 1280:text-[17px] 1600:text-[20px] 1920:text-[22px] 2560:text-[25px] font-light font-Countach leading-none'>€95.99</h1>
                            </div>
                            <div className='w-[50%] bg-9500_points bg-contain bg-center bg-no-repeat'></div>
                        </div>
                        <div className='bg-gradient-to-tr from-[#1f1f1e] to-[#3b3b3a] flex flex-row justify-between border border-[#636763] cursor-pointer hover:border-light-blue rounded p-[5%]'
                        onClick={() => {
                            openUrl('https://website.revoltpvp.com/category/points');
                            playSound('click_loby');
                        }}
                        onMouseEnter={() => playSound('hover')}
                        >
                            <div className='flex flex-col w-[50%] items-center justify-center text-right gap-[9%]'>
                                <div className='flex flex-row gap-[4%] w-full justify-center'>
                                    <h1 className='text-[#9aa39a] 800:text-[15px] 1280:text-[20px] 1600:text-[25px] 1920:text-[30px] 2560:text-[35px] font-Countach tracking-widest leading-none'>13,000</h1>
                                    <div className='bg-points bg-contain bg-center bg-no-repeat 2560:w-[35px] 2560:h-[35px] 1920:w-[30px] 1920:h-[30px] 1600:w-[25px] 1600:h-[25px] 1280:w-[20px] 1280:h-[20px] 800:w-[15px] 800:h-[15px] mt-[1%]'></div>
                                </div>
                                <h1 className='text-[#9aa39a] 800:text-[13px] 1280:text-[17px] 1600:text-[20px] 1920:text-[22px] 2560:text-[25px] font-light font-Countach leading-none'>€119.99</h1>
                            </div>
                            <div className='w-[50%] bg-13000_points bg-contain bg-center bg-no-repeat'></div>
                        </div>
                        <div className='bg-gradient-to-tr from-[#1f1f1e] to-[#3b3b3a] flex flex-row justify-between border border-[#636763] cursor-pointer hover:border-light-blue rounded p-[5%]'
                        onClick={() => {
                            openUrl('https://website.revoltpvp.com/category/points');
                            playSound('click_loby');
                        }}
                        onMouseEnter={() => playSound('hover')}
                        >
                            <div className='flex flex-col w-[50%] items-center justify-center text-right gap-[9%]'>
                                <div className='flex flex-row gap-[4%] w-full justify-center'>
                                    <h1 className='text-[#9aa39a] 800:text-[15px] 1280:text-[20px] 1600:text-[25px] 2560:text-[35px] font-Countach tracking-widest leading-none'>21,000</h1>
                                    <div className='bg-points bg-contain bg-center bg-no-repeat 2560:w-[35px] 2560:h-[35px] 1920:w-[30px] 1920:h-[30px] 1600:w-[25px] 1600:h-[25px] 1280:w-[20px] 1280:h-[20px] 800:w-[15px] 800:h-[15px] mt-[1%]'></div>
                                </div>
                                <h1 className='text-[#9aa39a] 800:text-[13px] 1280:text-[17px] 1600:text-[20px] 1920:text-[22px] 2560:text-[25px] font-light font-Countach leading-none'>€179.99</h1>
                            </div>
                            <div className='w-[50%] bg-21000_points bg-contain bg-center bg-no-repeat'></div>
                        </div>
                    </div>
                </div>

                <div className='w-full h-auto flex flex-col 800:gap-[10px] 1280:gap-[12px] 1600:gap-[15px] 1920:gap-[18px]'>
                    <h1 className='text-black uppercase text-[10px] 800:text-[10px] 1024:text-[12px] 1280:text-[15px] 1440:text-[16px] 1600:text-[18px] 1920:text-[23px] 2560:text-[25px] rounded font-light font-Countach'><span className='bg-extreme-light-grey px-[0.5%] pb-1 rounded-sm'>Crate</span></h1>
                    <div className="snap-x scroll-auto touch-auto overflow-auto flex flex-row gap-[1%] w-full pb-[1%]">
                        <div className="shrink-0 p-[1%] justify-between overflow-hidden group 2560:w-[575px] 2560:h-[325px] 1920:w-[430px] 1920:h-[250px] 1600:w-[350px] 1600:h-[215px] 1280:w-[275px] 1280:h-[165px] 1024:w-[245px] 1024:h-[135px] 800:w-[200px] 800:h-[100px] cursor-pointer rounded border-y-4 border-dark-grey hover:border-light-blue bg-Caisse_Bronze bg-center bg-cover bg-no-repeat flex flex-col gap-[2%]"
                        onClick={() => {
                            playSound('click_loby');

                            const options = {
                                method: 'post',
                                headers: {
                                    'Content-Type': 'application/json; charset=UTF-8',
                                },
                                body: JSON.stringify({
                                    "crate": 1,
                                }),
                            };
                            fetch(`https://YBN/YBN.Store:GetCrate`, options)
                        }}
                        onMouseEnter={() => playSound('hover')}
                        >
                            <div className='flex flex-col gap-[1%] w-full'>
                                <h1 className='uppercase leading-none tracking-widest opacity-0 group-hover:opacity-100 ease-in duration-100 800:text-[12px] 1280:text-[15px] 1600:text-[17px] 1920:text-[21px] 2560:text-[22px] text-[#9aa39a] font-Countach'>ITEMS IN THIS BOX (You will get 1 of these items)</h1>
                                <h1 className='text-[#7f857e] opacity-0 group-hover:opacity-100 ease-in duration-100 text-[10px] 800:text-[8px] 1024:text-[10px] 1280:text-[12px] 1440:text-[14px] 1600:text-[16px] 1920:text-[18px] 2560:text-[20px] rounded 800:leading-[7px] 1024:leading-3 1280:leading-3 1440:leading-3 1600:leading-4 1920:leading-5 2560:leading-6 font-light tracking-widest font-Countach'
                                style={{textShadow: '0px 0px 2px #404140'}}>
                                    - x50 Service Carbine<br></br>
                                    - x50 Special Carbine<br></br>
                                    - x50 Bullpup Rifle Mk II<br></br>
                                    - x35 Special Carbine Mk II<br></br>
                                    - x50 Carbine Rifle Mk II<br></br>
                                    - x6 Paragon R (Armored)<br></br>
                                    - x6 Deity<br></br>
                                </h1>
                            </div>
                            <div className='flex flex-row gap-[1%] w-full'>
                                <h1 className='text-[#e7e7e7] font-Countach leading-none tracking-wider 800:text-[15px] 1280:text-[20px] 1600:text-[25px] 1920:text-[30px] 2560:text-[35px]'>200</h1>
                                <div className='bg-points bg-contain bg-center bg-no-repeat 2560:w-[35px] 2560:h-[35px] 1920:w-[30px] 1920:h-[30px] 1600:w-[25px] 1600:h-[25px] 1280:w-[20px] 1280:h-[20px] 800:w-[15px] 800:h-[15px]'></div>
                            </div>
                        </div>

                        <div className="shrink-0 p-[1%] justify-between overflow-hidden group 2560:w-[575px] 2560:h-[325px] 1920:w-[430px] 1920:h-[250px] 1600:w-[350px] 1600:h-[215px] 1280:w-[275px] 1280:h-[165px] 1024:w-[245px] 1024:h-[135px] 800:w-[200px] 800:h-[100px] cursor-pointer rounded border-y-4 border-dark-grey hover:border-light-blue bg-Caisse_Argent bg-center bg-cover bg-no-repeat flex flex-col gap-[2%]"
                        onClick={() => {
                            playSound('click_loby');

                            const options = {
                                method: 'post',
                                headers: {
                                    'Content-Type': 'application/json; charset=UTF-8',
                                },
                                body: JSON.stringify({
                                    "crate": 2,
                                }),
                            };
                            fetch(`https://YBN/YBN.Store:GetCrate`, options)
                        }}
                        onMouseEnter={() => playSound('hover')}
                        >
                            <div className='flex flex-col gap-[1%] w-full'>
                            <h1 className='uppercase leading-none tracking-widest opacity-0 group-hover:opacity-100 ease-in duration-100 800:text-[12px] 1280:text-[15px] 1600:text-[17px] 1920:text-[21px] 2560:text-[22px] text-[#9aa39a] font-Countach'>ITEMS IN THIS BOX (You will get 1 of these items)</h1>
                                <h1 className='text-[#7f857e] opacity-0 group-hover:opacity-100 ease-in duration-100 text-[10px] 800:text-[8px] 1024:text-[10px] 1280:text-[12px] 1440:text-[14px] 1600:text-[16px] 1920:text-[18px] 2560:text-[20px] rounded 800:leading-[7px] 1024:leading-3 1280:leading-3 1440:leading-3 1600:leading-4 1920:leading-5 2560:leading-6 font-light tracking-widest font-Countach'
                                style={{textShadow: '0px 0px 2px #404140'}}>
                                    - x20 Combat MG Mk II<br></br>
                                    - x35 Combat MG<br></br>
                                    - x55 MG<br></br>
                                    - x50 Special Carbine Mk II<br></br>
                                    - x5 Brickade 6x6<br></br>
                                    - x12 Paragon R (Armored)<br></br>
                                    - x12 Deity<br></br>
                                </h1>
                            </div>
                            <div className='flex flex-row gap-[1%] w-full'>
                                <h1 className='text-[#e7e7e7] font-Countach leading-none tracking-wider 800:text-[15px] 1280:text-[20px] 1600:text-[25px] 1920:text-[30px] 2560:text-[35px]'>500</h1>
                                <div className='bg-points bg-contain bg-center bg-no-repeat 2560:w-[35px] 2560:h-[35px] 1920:w-[30px] 1920:h-[30px] 1600:w-[25px] 1600:h-[25px] 1280:w-[20px] 1280:h-[20px] 800:w-[15px] 800:h-[15px]'></div>
                            </div>
                        </div>

                        <div className="shrink-0 p-[1%] justify-between overflow-hidden group 2560:w-[575px] 2560:h-[325px] 1920:w-[430px] 1920:h-[250px] 1600:w-[350px] 1600:h-[215px] 1280:w-[275px] 1280:h-[165px] 1024:w-[245px] 1024:h-[135px] 800:w-[200px] 800:h-[100px] cursor-pointer rounded border-y-4 border-dark-grey hover:border-light-blue bg-Caisse_Diamond bg-center bg-cover bg-no-repeat flex flex-col gap-[2%]"
                        onClick={() => {
                            playSound('click_loby');

                            const options = {
                                method: 'post',
                                headers: {
                                    'Content-Type': 'application/json; charset=UTF-8',
                                },
                                body: JSON.stringify({
                                    "crate": 3,
                                }),
                            };
                            fetch(`https://YBN/YBN.Store:GetCrate`, options)
                        }}
                        onMouseEnter={() => playSound('hover')}
                        >
                            <div className='flex flex-col gap-[1%] w-full'>
                            <h1 className='uppercase leading-none tracking-widest opacity-0 group-hover:opacity-100 ease-in duration-100 800:text-[12px] 1280:text-[15px] 1600:text-[17px] 1920:text-[21px] 2560:text-[22px] text-[#9aa39a] font-Countach'>ITEMS IN THIS BOX (You will get 1 of these items)</h1>
                                <h1 className='text-[#7f857e] opacity-0 group-hover:opacity-100 ease-in duration-100 text-[10px] 800:text-[8px] 1024:text-[10px] 1280:text-[12px] 1440:text-[14px] 1600:text-[16px] 1920:text-[18px] 2560:text-[20px] rounded 800:leading-[7px] 1024:leading-3 1280:leading-3 1440:leading-3 1600:leading-4 1920:leading-5 2560:leading-6 font-light tracking-widest font-Countach'
                                style={{textShadow: '0px 0px 2px #404140'}}>
                                    - x40 Combat MG Mk II<br></br>
                                    - x4 Musket<br></br>
                                    - x2 RPG<br></br>
                                    - x3 Sniper Rifle<br></br>
                                    - x5 Apocalypse Scarab<br></br>
                                    - x10 Oppressor<br></br>
                                    - x5 Nightshark<br></br>
                                </h1>
                            </div>
                            <div className='flex flex-row gap-[1%] w-full'>
                                <h1 className='text-[#e7e7e7] font-Countach leading-none tracking-wider 800:text-[15px] 1280:text-[20px] 1600:text-[25px] 1920:text-[30px] 2560:text-[35px]'>1,100</h1>
                                <div className='bg-points bg-contain bg-center bg-no-repeat 2560:w-[35px] 2560:h-[35px] 1920:w-[30px] 1920:h-[30px] 1600:w-[25px] 1600:h-[25px] 1280:w-[20px] 1280:h-[20px] 800:w-[15px] 800:h-[15px]'></div>
                            </div>
                        </div>

                        <div className="shrink-0 p-[1%] justify-between overflow-hidden group 2560:w-[575px] 2560:h-[325px] 1920:w-[430px] 1920:h-[250px] 1600:w-[350px] 1600:h-[215px] 1280:w-[275px] 1280:h-[165px] 1024:w-[245px] 1024:h-[135px] 800:w-[200px] 800:h-[100px] cursor-pointer rounded border-y-4 border-dark-grey hover:border-light-blue bg-Caisse_Or bg-center bg-cover bg-no-repeat flex flex-col gap-[2%]"
                        onClick={() => {
                            playSound('click_loby');

                            const options = {
                                method: 'post',
                                headers: {
                                    'Content-Type': 'application/json; charset=UTF-8',
                                },
                                body: JSON.stringify({
                                    "crate": 4,
                                }),
                            };
                            fetch(`https://YBN/YBN.Store:GetCrate`, options)
                        }}
                        onMouseEnter={() => playSound('hover')}
                        >
                            <div className='flex flex-col gap-[1%] w-full'>
                            <h1 className='uppercase leading-none tracking-widest opacity-0 group-hover:opacity-100 ease-in duration-100 800:text-[12px] 1280:text-[15px] 1600:text-[17px] 1920:text-[21px] 2560:text-[22px] text-[#9aa39a] font-Countach'>ITEMS IN THIS BOX (You will get 1 of these items)</h1>
                                <h1 className='text-[#7f857e] opacity-0 group-hover:opacity-100 ease-in duration-100 text-[10px] 800:text-[8px] 1024:text-[10px] 1280:text-[12px] 1440:text-[14px] 1600:text-[16px] 1920:text-[18px] 2560:text-[20px] rounded 800:leading-[7px] 1024:leading-3 1280:leading-3 1440:leading-3 1600:leading-4 1920:leading-5 2560:leading-6 font-light tracking-widest font-Countach'
                                style={{textShadow: '0px 0px 2px #404140'}}>
                                    - x2 Homing Launcher<br></br>
                                    - x2 Marksman Rifle Mk II<br></br>
                                    - x2 Heavy Sniper Mk II<br></br>
                                    - x2 Heavy Sniper<br></br>
                                    - x2 Marksman Rifle<br></br>
                                    - x2 RPG<br></br>
                                    - x5 Deluxo<br></br>
                                </h1>
                            </div>
                            <div className='flex flex-row gap-[1%] w-full'>
                                <h1 className='text-[#e7e7e7] font-Countach leading-none tracking-wider 800:text-[15px] 1280:text-[20px] 1600:text-[25px] 1920:text-[30px] 2560:text-[35px]'>2,400</h1>
                                <div className='bg-points bg-contain bg-center bg-no-repeat 2560:w-[35px] 2560:h-[35px] 1920:w-[30px] 1920:h-[30px] 1600:w-[25px] 1600:h-[25px] 1280:w-[20px] 1280:h-[20px] 800:w-[15px] 800:h-[15px]'></div>
                            </div>
                        </div>
                    </div>
                </div>



                {/* <div className='w-full h-auto flex flex-col 800:gap-[10px] 1280:gap-[12px] 1600:gap-[15px] 1920:gap-[18px]'>
                    <h1 className='text-black uppercase text-[10px] 800:text-[10px] 1024:text-[12px] 1280:text-[15px] 1440:text-[16px] 1600:text-[18px] 1920:text-[23px] 2560:text-[25px] rounded font-light font-Countach'><span className='bg-extreme-light-grey px-[0.5%] pb-1 rounded-sm'>PACK</span></h1>
                    <div className="snap-x scroll-auto touch-auto overflow-auto flex flex-row gap-[1%] w-full pb-[1%]">
                        <div className="shrink-0 p-[1%] justify-end overflow-hidden group 2560:w-[575px] 2560:h-[325px] 1920:w-[430px] 1920:h-[250px] 1600:w-[350px] 1600:h-[215px] 1280:w-[275px] 1280:h-[165px] 1024:w-[245px] 1024:h-[135px] 800:w-[200px] 800:h-[100px] cursor-pointer rounded border-y-4 border-dark-grey hover:border-light-blue bg-background_bundle_venom bg-center bg-cover bg-no-repeat flex flex-col gap-[2%]"
                        onClick={() => {
                            playSound('click_loby');

                            const options = {
                                method: 'post',
                                headers: {
                                    'Content-Type': 'application/json; charset=UTF-8',
                                },
                                body: JSON.stringify({
                                    "bundle": 1,
                                }),
                            };
                            fetch(`https://YBN/YBN.Store:GetBundle`, options)
                        }}
                        onMouseEnter={() => playSound('hover')}
                        >
                            <h1 className='uppercase leading-none tracking-widest opacity-0 group-hover:opacity-100 ease-in duration-100 800:text-[12px] 1280:text-[17px] 1600:text-[20px] 1920:text-[23px] 2560:text-[25px] text-[#9aa39a] font-Countach'>Venom PACK</h1>
                            <h1 className='text-[#7f857e] uppercase opacity-0 group-hover:opacity-100 ease-in duration-100 text-[10px] 800:text-[10px] 1024:text-[12px] 1280:text-[15px] 1440:text-[16px] 1600:text-[18px] 1920:text-[20px] 2560:text-[22px] rounded font-light tracking-widest font-Countach'><span className='bg-[#141313] border border-l-4 border-[#727872] px-[2%] pb-1 rounded-sm'>6 Items Included</span></h1>

                            <div className='flex flex-row gap-[1%] w-full'>
                                <h1 className='text-[#e7e7e7] font-Countach leading-none tracking-wider 800:text-[15px] 1280:text-[20px] 1600:text-[25px] 1920:text-[30px] 2560:text-[35px]'>400</h1>
                                <div className='bg-points bg-contain bg-center bg-no-repeat 2560:w-[35px] 2560:h-[35px] 1920:w-[30px] 1920:h-[30px] 1600:w-[25px] 1600:h-[25px] 1280:w-[20px] 1280:h-[20px] 800:w-[15px] 800:h-[15px]'></div>
                            </div>
                        </div>

                        <div className="shrink-0 p-[1%] justify-end overflow-hidden group 2560:w-[575px] 2560:h-[325px] 1920:w-[430px] 1920:h-[250px] 1600:w-[350px] 1600:h-[215px] 1280:w-[275px] 1280:h-[165px] 1024:w-[245px] 1024:h-[135px] 800:w-[200px] 800:h-[100px] cursor-pointer rounded border-y-4 border-dark-grey hover:border-light-blue bg-background_bundle_demon_chains bg-center bg-cover bg-no-repeat flex flex-col gap-[2%]"
                        onClick={() => {
                            playSound('click_loby');

                            const options = {
                                method: 'post',
                                headers: {
                                    'Content-Type': 'application/json; charset=UTF-8',
                                },
                                body: JSON.stringify({
                                    "bundle": 2,
                                }),
                            };
                            fetch(`https://YBN/YBN.Store:GetBundle`, options)
                        }}
                        onMouseEnter={() => playSound('hover')}
                        >
                            <h1 className='uppercase leading-none tracking-widest opacity-0 group-hover:opacity-100 ease-in duration-100 800:text-[12px] 1280:text-[17px] 1600:text-[20px] 1920:text-[23px] 2560:text-[25px] text-[#9aa39a] font-Countach'>Demon Chains PACK</h1>
                            <h1 className='text-[#7f857e] uppercase opacity-0 group-hover:opacity-100 ease-in duration-100 text-[10px] 800:text-[10px] 1024:text-[12px] 1280:text-[15px] 1440:text-[16px] 1600:text-[18px] 1920:text-[20px] 2560:text-[22px] rounded font-light tracking-widest font-Countach'><span className='bg-[#141313] border border-l-4 border-[#727872] px-[2%] pb-1 rounded-sm'>6 Items Included</span></h1>

                            <div className='flex flex-row gap-[1%] w-full'>
                                <h1 className='text-[#e7e7e7] font-Countach leading-none tracking-wider 800:text-[15px] 1280:text-[20px] 1600:text-[25px] 1920:text-[30px] 2560:text-[35px]'>1000</h1>
                                <div className='bg-points bg-contain bg-center bg-no-repeat 2560:w-[35px] 2560:h-[35px] 1920:w-[30px] 1920:h-[30px] 1600:w-[25px] 1600:h-[25px] 1280:w-[20px] 1280:h-[20px] 800:w-[15px] 800:h-[15px]'></div>
                            </div>
                        </div>
                        <div className="shrink-0 p-[1%] justify-end overflow-hidden group 2560:w-[575px] 2560:h-[325px] 1920:w-[430px] 1920:h-[250px] 1600:w-[350px] 1600:h-[215px] 1280:w-[275px] 1280:h-[165px] 1024:w-[245px] 1024:h-[135px] 800:w-[200px] 800:h-[100px] cursor-pointer rounded border-y-4 border-dark-grey hover:border-light-blue bg-background_bundle_hunt bg-center bg-cover bg-no-repeat flex flex-col gap-[2%]"
                        onClick={() => {
                            playSound('click_loby');

                            const options = {
                                method: 'post',
                                headers: {
                                    'Content-Type': 'application/json; charset=UTF-8',
                                },
                                body: JSON.stringify({
                                    "bundle": 3,
                                }),
                            };
                            fetch(`https://YBN/YBN.Store:GetBundle`, options)
                        }}
                        onMouseEnter={() => playSound('hover')}
                        >
                            <h1 className='uppercase leading-none tracking-widest opacity-0 group-hover:opacity-100 ease-in duration-100 800:text-[12px] 1280:text-[17px] 1600:text-[20px] 1920:text-[23px] 2560:text-[25px] text-[#9aa39a] font-Countach'>Hunt PACK</h1>
                            <h1 className='text-[#7f857e] uppercase opacity-0 group-hover:opacity-100 ease-in duration-100 text-[10px] 800:text-[10px] 1024:text-[12px] 1280:text-[15px] 1440:text-[16px] 1600:text-[18px] 1920:text-[20px] 2560:text-[22px] rounded font-light tracking-widest font-Countach'><span className='bg-[#141313] border border-l-4 border-[#727872] px-[2%] pb-1 rounded-sm'>5 Items Included</span></h1>
                            
                            <div className='flex flex-row gap-[1%] w-full'>
                                <h1 className='text-[#e7e7e7] font-Countach leading-none tracking-wider 800:text-[15px] 1280:text-[20px] 1600:text-[25px] 1920:text-[30px] 2560:text-[35px]'>800</h1>
                                <div className='bg-points bg-contain bg-center bg-no-repeat 2560:w-[35px] 2560:h-[35px] 1920:w-[30px] 1920:h-[30px] 1600:w-[25px] 1600:h-[25px] 1280:w-[20px] 1280:h-[20px] 800:w-[15px] 800:h-[15px]'></div>
                            </div>
                        </div>
                    </div>
                </div> */}



                <div className='w-full h-auto flex flex-col 800:gap-[10px] 1280:gap-[12px] 1600:gap-[15px] 1920:gap-[18px]'>
                    <h1 className='text-black uppercase text-[10px] 800:text-[10px] 1024:text-[12px] 1280:text-[15px] 1440:text-[16px] 1600:text-[18px] 1920:text-[23px] 2560:text-[25px] rounded font-light font-Countach'><span className='bg-extreme-light-grey px-[0.5%] pb-1 rounded-sm'>Most Popular</span></h1>
                    <div className="snap-x scroll-auto touch-auto overflow-auto flex flex-row gap-[1%] w-full pb-[1%]">

                        <div className="shrink-0 p-[1%] justify-end overflow-hidden group 2560:w-[700px] 2560:h-[400px] 1920:w-[430px] 1920:h-[250px] 1600:w-[350px] 1600:h-[215px] 1280:w-[275px] 1280:h-[165px] 800:w-[200px] 800:h-[100px] cursor-pointer rounded border-y-4 border-dark-grey hover:border-light-blue bg-pass_2 bg-center bg-cover bg-no-repeat flex flex-col gap-[2%]"
                        onClick={() => {
                            playSound('click_loby');

                            const options = {
                                method: 'post',
                                headers: {
                                    'Content-Type': 'application/json; charset=UTF-8',
                                },
                                body: JSON.stringify({}),
                            };
                            fetch(`https://YBN/YBN.Store:Gold`, options)
                        }}
                        onMouseEnter={() => playSound('hover')}
                        >
                            <h1 className='uppercase leading-none tracking-widest opacity-0 group-hover:opacity-100 ease-in duration-100 800:text-[12px] 1280:text-[17px] 1600:text-[20px] 1920:text-[23px] 2560:text-[25px] text-[#9aa39a] font-Countach'>Gold</h1>
                            <h1 className='text-[#7f857e] uppercase opacity-0 group-hover:opacity-100 ease-in duration-100 text-[10px] 800:text-[10px] 1024:text-[12px] 1280:text-[15px] 1440:text-[16px] 1600:text-[18px] 1920:text-[20px] 2560:text-[22px] rounded font-light tracking-widest font-Countach'><span className='bg-[#141313] border border-l-4 border-[#727872] px-[2%] pb-1 rounded-sm'>12 Items Included</span></h1>
                            
                            <div className='flex flex-row gap-[1%] w-full'>
                                <h1 className='text-[#e7e7e7] font-Countach leading-none tracking-wider 800:text-[15px] 1280:text-[20px] 1600:text-[25px] 1920:text-[30px] 2560:text-[35px]'>1,100</h1>
                                <div className='bg-points bg-contain bg-center bg-no-repeat 2560:w-[35px] 2560:h-[35px] 1920:w-[30px] 1920:h-[30px] 1600:w-[25px] 1600:h-[25px] 1280:w-[20px] 1280:h-[20px] 800:w-[15px] 800:h-[15px]'></div>
                            </div>
                        </div>
                        <div className="shrink-0 p-[1%] justify-end overflow-hidden group 2560:w-[700px] 2560:h-[400px] 1920:w-[430px] 1920:h-[250px] 1600:w-[350px] 1600:h-[215px] 1280:w-[275px] 1280:h-[165px] 800:w-[200px] 800:h-[100px] cursor-pointer rounded border-y-4 border-dark-grey hover:border-light-blue bg-pass_2 bg-center bg-cover bg-no-repeat flex flex-col gap-[2%]"
                        onClick={() => {
                            playSound('click_loby');

                            const options = {
                                method: 'post',
                                headers: {
                                    'Content-Type': 'application/json; charset=UTF-8',
                                },
                                body: JSON.stringify({}),
                            };
                            fetch(`https://YBN/YBN.Store:Platinum`, options)
                        }}
                        onMouseEnter={() => playSound('hover')}
                        >
                            <h1 className='uppercase leading-none tracking-widest opacity-0 group-hover:opacity-100 ease-in duration-100 800:text-[12px] 1280:text-[17px] 1600:text-[20px] 1920:text-[23px] 2560:text-[25px] text-[#9aa39a] font-Countach'>Platinum</h1>
                            <h1 className='text-[#7f857e] uppercase opacity-0 group-hover:opacity-100 ease-in duration-100 text-[10px] 800:text-[10px] 1024:text-[12px] 1280:text-[15px] 1440:text-[16px] 1600:text-[18px] 1920:text-[20px] 2560:text-[22px] rounded font-light tracking-widest font-Countach'><span className='bg-[#141313] border border-l-4 border-[#727872] px-[2%] pb-1 rounded-sm'>15 Items Included</span></h1>
                            
                            <div className='flex flex-row gap-[1%] w-full'>
                                <h1 className='text-[#e7e7e7] font-Countach leading-none tracking-wider 800:text-[15px] 1280:text-[20px] 1600:text-[25px] 1920:text-[30px] 2560:text-[35px]'>2,400</h1>
                                <div className='bg-points bg-contain bg-center bg-no-repeat 2560:w-[35px] 2560:h-[35px] 1920:w-[30px] 1920:h-[30px] 1600:w-[25px] 1600:h-[25px] 1280:w-[20px] 1280:h-[20px] 800:w-[15px] 800:h-[15px]'></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full h-auto flex flex-col 800:gap-[10px] 1280:gap-[12px] 1600:gap-[15px] 1920:gap-[18px]'>
                    <h1 className='text-black uppercase text-[10px] 800:text-[10px] 1024:text-[12px] 1280:text-[15px] 1440:text-[16px] 1600:text-[18px] 1920:text-[23px] 2560:text-[25px] rounded font-light font-Countach'><span className='bg-extreme-light-grey px-[0.5%] pb-1 rounded-sm'>XP DOUBLE</span></h1>
                    <div className="snap-x scroll-auto touch-auto overflow-auto flex flex-row gap-[1%] w-full pb-[1%]">
                        <div className="shrink-0 p-[1%] justify-end overflow-hidden group 2560:w-[575px] 2560:h-[325px] 1920:w-[430px] 1920:h-[250px] 1600:w-[350px] 1600:h-[215px] 1280:w-[275px] 1280:h-[165px] 1024:w-[245px] 1024:h-[135px] 800:w-[200px] 800:h-[100px] cursor-pointer rounded border-y-4 border-dark-grey hover:border-light-blue bg-xp_player bg-center bg-cover bg-no-repeat flex flex-col gap-[2%]"
                        onClick={() => {
                            playSound('click_loby');

                            const options = {
                                method: 'post',
                                headers: {
                                    'Content-Type': 'application/json; charset=UTF-8',
                                },
                                body: JSON.stringify({
                                    "xp": 1,
                                }),
                            };
                            fetch(`https://YBN/YBN.Store:XpDoublePlayer`, options)
                        }}
                        onMouseEnter={() => playSound('hover')}
                        >
                            <h1 className='uppercase leading-none tracking-widest opacity-0 group-hover:opacity-100 ease-in duration-100 800:text-[12px] 1280:text-[17px] 1600:text-[20px] 1920:text-[23px] 2560:text-[25px] text-[#9aa39a] font-Countach'>XP BOOST PLAYER</h1>
                            <h1 className='text-[#7f857e] uppercase opacity-0 group-hover:opacity-100 ease-in duration-100 text-[10px] 800:text-[10px] 1024:text-[12px] 1280:text-[15px] 1440:text-[16px] 1600:text-[18px] 1920:text-[20px] 2560:text-[22px] rounded font-light tracking-widest font-Countach'><span className='bg-[#141313] border border-l-4 border-[#727872] px-[2%] pb-1 rounded-sm'>1 Hours of double XP</span></h1>

                            <div className='flex flex-row gap-[1%] w-full'>
                                <h1 className='text-[#e7e7e7] font-Countach leading-none tracking-wider 800:text-[15px] 1280:text-[20px] 1600:text-[25px] 1920:text-[30px] 2560:text-[35px]'>400</h1>
                                <div className='bg-points bg-contain bg-center bg-no-repeat 2560:w-[35px] 2560:h-[35px] 1920:w-[30px] 1920:h-[30px] 1600:w-[25px] 1600:h-[25px] 1280:w-[20px] 1280:h-[20px] 800:w-[15px] 800:h-[15px]'></div>
                            </div>
                        </div>

                        <div className="shrink-0 p-[1%] justify-end overflow-hidden group 2560:w-[575px] 2560:h-[325px] 1920:w-[430px] 1920:h-[250px] 1600:w-[350px] 1600:h-[215px] 1280:w-[275px] 1280:h-[165px] 1024:w-[245px] 1024:h-[135px] 800:w-[200px] 800:h-[100px] cursor-pointer rounded border-y-4 border-dark-grey hover:border-light-blue bg-xp_team bg-center bg-cover bg-no-repeat flex flex-col gap-[2%]"
                        onClick={() => {
                            playSound('click_loby');

                            const options = {
                                method: 'post',
                                headers: {
                                    'Content-Type': 'application/json; charset=UTF-8',
                                },
                                body: JSON.stringify({
                                    "xp": 2,
                                }),
                            };
                            fetch(`https://YBN/YBN.Store:XpDoubleTeam`, options)
                        }}
                        onMouseEnter={() => playSound('hover')}
                        >
                            <h1 className='uppercase leading-none tracking-widest opacity-0 group-hover:opacity-100 ease-in duration-100 800:text-[12px] 1280:text-[17px] 1600:text-[20px] 1920:text-[23px] 2560:text-[25px] text-[#9aa39a] font-Countach'>XP BOOST TEAM</h1>
                            <h1 className='text-[#7f857e] uppercase opacity-0 group-hover:opacity-100 ease-in duration-100 text-[10px] 800:text-[10px] 1024:text-[12px] 1280:text-[15px] 1440:text-[16px] 1600:text-[18px] 1920:text-[20px] 2560:text-[22px] rounded font-light tracking-widest font-Countach'><span className='bg-[#141313] border border-l-4 border-[#727872] px-[2%] pb-1 rounded-sm'>1 Hours of double XP</span></h1>

                            <div className='flex flex-row gap-[1%] w-full'>
                                <h1 className='text-[#e7e7e7] font-Countach leading-none tracking-wider 800:text-[15px] 1280:text-[20px] 1600:text-[25px] 1920:text-[30px] 2560:text-[35px]'>800</h1>
                                <div className='bg-points bg-contain bg-center bg-no-repeat 2560:w-[35px] 2560:h-[35px] 1920:w-[30px] 1920:h-[30px] 1600:w-[25px] 1600:h-[25px] 1280:w-[20px] 1280:h-[20px] 800:w-[15px] 800:h-[15px]'></div>
                            </div>
                        </div>
                        <div className="shrink-0 p-[1%] justify-end overflow-hidden group 2560:w-[575px] 2560:h-[325px] 1920:w-[430px] 1920:h-[250px] 1600:w-[350px] 1600:h-[215px] 1280:w-[275px] 1280:h-[165px] 1024:w-[245px] 1024:h-[135px] 800:w-[200px] 800:h-[100px] cursor-pointer rounded border-y-4 border-dark-grey hover:border-light-blue bg-xp_server bg-center bg-cover bg-no-repeat flex flex-col gap-[2%]"
                        onClick={() => {
                            playSound('click_loby');

                            const options = {
                                method: 'post',
                                headers: {
                                    'Content-Type': 'application/json; charset=UTF-8',
                                },
                                body: JSON.stringify({
                                    "xp": 3,
                                }),
                            };
                            fetch(`https://YBN/YBN.Store:XpDoubleServer`, options)
                        }}
                        onMouseEnter={() => playSound('hover')}
                        >
                            <h1 className='uppercase leading-none tracking-widest opacity-0 group-hover:opacity-100 ease-in duration-100 800:text-[12px] 1280:text-[17px] 1600:text-[20px] 1920:text-[23px] 2560:text-[25px] text-[#9aa39a] font-Countach'>XP BOOST SERVER</h1>
                            <h1 className='text-[#7f857e] uppercase opacity-0 group-hover:opacity-100 ease-in duration-100 text-[10px] 800:text-[10px] 1024:text-[12px] 1280:text-[15px] 1440:text-[16px] 1600:text-[18px] 1920:text-[20px] 2560:text-[22px] rounded font-light tracking-widest font-Countach'><span className='bg-[#141313] border border-l-4 border-[#727872] px-[2%] pb-1 rounded-sm'>1 Hours of double XP</span></h1>
                            
                            <div className='flex flex-row gap-[1%] w-full'>
                                <h1 className='text-[#e7e7e7] font-Countach leading-none tracking-wider 800:text-[15px] 1280:text-[20px] 1600:text-[25px] 1920:text-[30px] 2560:text-[35px]'>1200</h1>
                                <div className='bg-points bg-contain bg-center bg-no-repeat 2560:w-[35px] 2560:h-[35px] 1920:w-[30px] 1920:h-[30px] 1600:w-[25px] 1600:h-[25px] 1280:w-[20px] 1280:h-[20px] 800:w-[15px] 800:h-[15px]'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    )
}